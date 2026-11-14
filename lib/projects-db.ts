import { supabase, getAdminClient } from "./supabase";
import { NextRequest } from "next/server";

// ─── Types ────────────────────────────────────────────────────────────────────
export type Project = {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  sport: string;
  description: string;
  image_url: string;   // first/cover image — always populated
  images: string[];    // all images array (jsonb in DB)
  created_at?: string;
};

// ─── Public reads (anon key, respects RLS) ────────────────────────────────────
export async function getAllProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) { console.error("getAllProjects:", error.message); return []; }
  return data as Project[];
}

export async function getProjectById(id: string): Promise<Project | null> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error) { console.error("getProjectById:", error.message); return null; }
  return data as Project;
}

// ─── Admin writes (service-role key, bypasses RLS) ───────────────────────────
export async function createProject(
  payload: Omit<Project, "id" | "created_at">
): Promise<Project | null> {
  const admin = getAdminClient();

  // Ensure images array is always populated
  const images: string[] = Array.isArray(payload.images) && payload.images.length > 0
    ? payload.images
    : payload.image_url ? [payload.image_url] : [];

  const { data, error } = await admin
    .from("projects")
    .insert([{ ...payload, images }])
    .select()
    .single();

  if (error) { console.error("createProject:", error.message); return null; }
  return data as Project;
}

export async function updateProject(
  id: string,
  payload: Partial<Omit<Project, "id" | "created_at">>
): Promise<Project | null> {
  const admin = getAdminClient();
  const { data, error } = await admin
    .from("projects")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  if (error) { console.error("updateProject:", error.message); return null; }
  return data as Project;
}

export async function deleteProject(id: string): Promise<boolean> {
  const admin = getAdminClient();
  const { error } = await admin.from("projects").delete().eq("id", id);
  if (error) { console.error("deleteProject:", error.message); return false; }
  return true;
}

// ─── Auth helper ─────────────────────────────────────────────────────────────
export function verifyAdmin(req: NextRequest): boolean {
  const pwd = process.env.ADMIN_PASSWORD;
  if (!pwd) return false;
  const cookie = req.cookies.get("admin_token")?.value;
  if (cookie === pwd) return true;
  const auth = req.headers.get("authorization");
  if (auth === `Bearer ${pwd}`) return true;
  return false;
}
