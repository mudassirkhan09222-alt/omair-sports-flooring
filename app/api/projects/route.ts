import { NextRequest, NextResponse } from "next/server";
import { getAllProjects, createProject, verifyAdmin } from "@/lib/projects-db";

export const dynamic = "force-dynamic";

export async function GET() {
  const projects = await getAllProjects();
  return NextResponse.json(projects);
}

export async function POST(req: NextRequest) {
  if (!verifyAdmin(req))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { title, location, year, category, sport, description, image_url, images } = body;

  if (!title || !location || !year || !sport)
    return NextResponse.json({ error: "title, location, year and sport are required." }, { status: 400 });

  // images array takes priority; fall back to image_url
  const imagesArr: string[] = Array.isArray(images) && images.length > 0
    ? images
    : image_url ? [image_url] : [];

  if (imagesArr.length === 0)
    return NextResponse.json({ error: "At least one image is required." }, { status: 400 });

  const project = await createProject({
    title,
    location,
    year,
    category:    category    || "Outdoor",
    sport:       sport       || "General",
    description: description || "",
    image_url:   imagesArr[0],   // cover image
    images:      imagesArr,      // all images
  });

  if (!project)
    return NextResponse.json({ error: "Failed to create project." }, { status: 500 });

  return NextResponse.json(project, { status: 201 });
}
