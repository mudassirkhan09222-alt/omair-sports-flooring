import { NextRequest, NextResponse } from "next/server";
import { getProjectById, updateProject, deleteProject, verifyAdmin } from "@/lib/projects-db";

export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const project = await getProjectById(id);
  if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(project);
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!verifyAdmin(req))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const body = await req.json();
  const updated = await updateProject(id, body);
  if (!updated) return NextResponse.json({ error: "Not found or update failed" }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!verifyAdmin(req))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const ok = await deleteProject(id);
  if (!ok) return NextResponse.json({ error: "Not found or delete failed" }, { status: 404 });
  return NextResponse.json({ success: true });
}
