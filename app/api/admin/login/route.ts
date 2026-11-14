import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const adminPwd = process.env.ADMIN_PASSWORD;

  if (!adminPwd || password !== adminPwd)
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });

  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_token", adminPwd, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
  return res;
}
