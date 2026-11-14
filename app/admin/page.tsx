"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Plus, Pencil, Trash2, LogOut, ExternalLink, MapPin, Calendar, LayoutGrid } from "lucide-react";

type Project = {
  id: string; title: string; location: string; year: string;
  category: string; sport: string; image_url: string; description?: string;
};

export default function AdminDashboard() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/projects");
    if (res.status === 401) { router.push("/admin/login"); return; }
    setProjects(await res.json());
    setLoading(false);
  }, [router]);

  useEffect(() => { load(); }, [load]);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;
    setDeleting(id);
    const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
    if (res.ok) setProjects(p => p.filter(x => x.id !== id));
    setDeleting(null);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen" style={{ background: "#f0f4f8" }}>
      {/* Navbar */}
      <header style={{ background: "linear-gradient(135deg,#0a1f44 0%,#0d2a5e 100%)" }}
        className="sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/OSF-LOGO.png" alt="OSF" width={120} height={45} className="object-contain brightness-0 invert" />
            <div className="hidden sm:flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
              <LayoutGrid size={13} className="text-blue-300" />
              <span className="text-white/80 text-xs font-semibold tracking-wider">Admin Dashboard</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/projects" target="_blank"
              className="flex items-center gap-2 text-white/60 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-xs font-semibold transition-all">
              <ExternalLink size={14} />
              <span className="hidden sm:block">Live Site</span>
            </Link>
            <button onClick={handleLogout}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-xs font-semibold transition-all">
              <LogOut size={14} />
              <span className="hidden sm:block">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-5 py-8">
        {/* Stats + header row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
            <p className="text-gray-500 text-sm mt-0.5">
              {loading ? "Loading..." : `${projects.length} project${projects.length !== 1 ? "s" : ""} on your website`}
            </p>
          </div>
          <Link href="/admin/projects/new"
            className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg,#2563eb,#1d4ed8)" }}>
            <Plus size={16} />
            Add New Project
          </Link>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse">
                <div className="aspect-video bg-gray-200" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-gray-200 rounded-lg w-3/4" />
                  <div className="h-3 bg-gray-100 rounded-lg w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-2xl shadow-sm border-2 border-dashed border-gray-200">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <LayoutGrid size={28} className="text-blue-500" />
            </div>
            <h3 className="text-gray-800 font-bold text-lg mb-2">No Projects Yet</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-xs mx-auto">
              Add your first project and it will appear on the website automatically.
            </p>
            <Link href="/admin/projects/new"
              className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-md"
              style={{ background: "linear-gradient(135deg,#2563eb,#1d4ed8)" }}>
              <Plus size={15} /> Add First Project
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map(project => (
              <div key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                {/* Image */}
                <div className="relative aspect-video bg-gray-100 overflow-hidden">
                  <Image src={project.image_url} alt={project.title} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width:640px)100vw,(max-width:1024px)50vw,33vw"
                    onError={e => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&q=50"; }} />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {project.sport}
                    </span>
                    <span className="bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 text-sm mb-2 line-clamp-1">{project.title}</h3>
                  <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={11} className="text-blue-400" />{project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} className="text-blue-400" />{project.year}
                    </span>
                  </div>
                  {project.description && (
                    <p className="text-gray-400 text-xs line-clamp-2 mb-3 leading-relaxed">{project.description}</p>
                  )}
                  {/* Actions */}
                  <div className="flex gap-2 pt-3 border-t border-gray-100">
                    <Link href={`/admin/projects/${project.id}`}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-gray-800 hover:bg-blue-600 text-white py-2 rounded-lg text-xs font-semibold transition-all">
                      <Pencil size={12} /> Edit
                    </Link>
                    <button onClick={() => handleDelete(project.id, project.title)}
                      disabled={deleting === project.id}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-red-50 hover:bg-red-500 text-red-500 hover:text-white py-2 rounded-lg text-xs font-semibold transition-all disabled:opacity-50">
                      <Trash2 size={12} />
                      {deleting === project.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
