import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  // Verify admin cookie
  const pwd   = process.env.ADMIN_PASSWORD;
  const token = req.cookies.get("admin_token")?.value;

  // Allow if password matches cookie, OR if no password is set (local dev fallback)
  const isAdmin = !pwd || (token && token === pwd);
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided." }, { status: 400 });
    }

    // Validate file type
    const allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
    if (!allowed.includes(file.type)) {
      return NextResponse.json({ error: "Only JPG, PNG, WEBP, GIF allowed." }, { status: 400 });
    }

    // Validate file size — 5MB max
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large. Max 5MB." }, { status: 400 });
    }

    // ── Try Supabase Storage if credentials are present ──────────────────────
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey  = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && serviceKey && !supabaseUrl.includes("placeholder")) {
      try {
        const ext    = file.name.split(".").pop()?.toLowerCase() || "jpg";
        const path   = `projects/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const buffer = new Uint8Array(await file.arrayBuffer());

        const uploadRes = await fetch(
          `${supabaseUrl}/storage/v1/object/project-images/${path}`,
          {
            method:  "POST",
            headers: {
              Authorization:  `Bearer ${serviceKey}`,
              "Content-Type": file.type,
              "x-upsert":     "true",
            },
            body: buffer,
          }
        );

        if (uploadRes.ok) {
          const publicUrl = `${supabaseUrl}/storage/v1/object/public/project-images/${path}`;
          return NextResponse.json({ url: publicUrl });
        }
        // If Supabase fails, fall through to base64
        console.warn("Supabase upload failed, falling back to base64");
      } catch (supaErr) {
        console.warn("Supabase error:", supaErr);
        // Fall through to base64
      }
    }

    // ── Base64 fallback — works without any external service ─────────────────
    // Note: base64 URLs are large. For production use, set up Supabase.
    const bytes   = await file.arrayBuffer();
    const base64  = Buffer.from(bytes).toString("base64");
    const dataUrl = `data:${file.type};base64,${base64}`;

    return NextResponse.json({ url: dataUrl });

  } catch (err) {
    console.error("Upload route error:", err);
    return NextResponse.json(
      { error: "Upload failed. Please try again." },
      { status: 500 }
    );
  }
}
