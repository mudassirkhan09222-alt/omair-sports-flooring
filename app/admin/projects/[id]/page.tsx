"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Save, Trash2, X, LayoutGrid } from "lucide-react";
import ImageUploader from "@/components/admin/ImageUploader";
import { useImageUpload } from "@/lib/useImageUpload";

const SPORTS = [
  "Padel","Tennis","Basketball","Squash","Futsal","Football",
  "Volleyball","Badminton","Hockey","Running Track","Gym","Kids Play Area",
  "Multi-Sport","Other",
];

const inp = "w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-all bg-gray-50 focus:bg-white";
const lbl = "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5";

type FormState = {
  title: string; location: string; year: string;
  category: string; sport: string; description: string;
};

export default function EditProject() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const [form, setForm] = useState<FormState>({
    title: "", location: "", year: "", category: "Outdoor", sport: "", description: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const { images, uploadFiles, removeImage, getUrls, isUploading, reinit } =
    useImageUpload([]);

  useEffect(() => {
    fetch(`/api/projects/${id}`)
      .then(r => { if (!r.ok) { router.push("/admin"); return null; } return r.json(); })
      .then(d => {
        if (!d) return;
        setForm({
          title: d.title || "", location: d.location || "", year: d.year || "",
          category: d.category || "Outdoor", sport: d.sport || "", description: d.description || "",
        });
        // Support both images array and single image_url
        const existing: string[] = Array.isArray(d.images) && d.images.length > 0
          ? d.images
          : d.image_url ? [d.image_url] : [];

        // Inject existing images into the hook
        reinit(existing);
        setLoading(false);
      });
  }, [id, router, reinit]);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const urls = getUrls();
    if (urls.length === 0) { setError("Please upload at least one image."); return; }
    setSaving(true); setError("");
    const res = await fetch(`/api/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, image_url: urls[0], images: urls }),
    });
    if (res.ok) { router.push("/admin"); router.refresh(); }
    else { const d = await res.json(); setError(d.error || "Update failed."); setSaving(false); }
  };

  const handleDelete = async () => {
    setDeleting(true);
    const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
    if (res.ok) { router.push("/admin"); router.refresh(); }
    else { setError("Delete failed."); setDeleting(false); setShowDeleteConfirm(false); }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#f0f4f8" }}>
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-3" />
        <p className="text-gray-400 text-sm">Loading project...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen" style={{ background: "#f0f4f8" }}>
      {/* Header */}
      <header style={{ background: "linear-gradient(135deg,#0a1f44 0%,#0d2a5e 100%)" }}
        className="sticky top-0 z-50 shadow-xl">
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/OSF-LOGO.png" alt="OSF" width={110} height={42}
              className="object-contain brightness-0 invert" />
            <div className="hidden sm:flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
              <LayoutGrid size={13} className="text-blue-300" />
              <span className="text-white/70 text-xs font-semibold truncate max-w-[180px]">
                Edit: {form.title || "Project"}
              </span>
            </div>
          </div>
          <Link href="/admin"
            className="flex items-center gap-2 text-white/60 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-xs font-semibold transition-all">
            <ArrowLeft size={14} /> Back
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-8">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-5 gap-6">

            {/* ── Left ── */}
            <div className="lg:col-span-3 space-y-5">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-7 h-7 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">1</span>
                  <h2 className="text-sm font-bold text-gray-800">Project Information</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className={lbl}>Project Title <span className="text-red-400">*</span></label>
                    <input name="title" required value={form.title} onChange={set} className={inp} />
                  </div>
                  <div>
                    <label className={lbl}>Description</label>
                    <textarea name="description" rows={4} value={form.description} onChange={set}
                      className={`${inp} resize-none`} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={lbl}>Sport <span className="text-red-400">*</span></label>
                      <select name="sport" required value={form.sport} onChange={set} className={inp}>
                        <option value="">Select sport...</option>
                        {SPORTS.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={lbl}>Type <span className="text-red-400">*</span></label>
                      <select name="category" required value={form.category} onChange={set} className={inp}>
                        <option value="Outdoor">Outdoor</option>
                        <option value="Indoor">Indoor</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={lbl}>Location <span className="text-red-400">*</span></label>
                      <input name="location" required value={form.location} onChange={set} className={inp} />
                    </div>
                    <div>
                      <label className={lbl}>Year <span className="text-red-400">*</span></label>
                      <input name="year" required value={form.year} onChange={set} className={inp} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right ── */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">2</span>
                    <h2 className="text-sm font-bold text-gray-800">Project Images</h2>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                    {getUrls().length} image{getUrls().length !== 1 ? "s" : ""}
                  </span>
                </div>
                <ImageUploader
                  images={images}
                  onFiles={uploadFiles}
                  onRemove={removeImage}
                  isUploading={isUploading}
                />
              </div>

              {/* Actions */}
              <div className="bg-white rounded-2xl shadow-sm p-5 space-y-3">
                {error && (
                  <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl px-3 py-2.5">
                    <X size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-red-600 text-xs leading-relaxed">{error}</p>
                  </div>
                )}
                <button type="submit" disabled={saving || isUploading}
                  className="w-full flex items-center justify-center gap-2 text-white py-3 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0"
                  style={{ background: "linear-gradient(135deg,#2563eb,#1d4ed8)" }}>
                  <Save size={15} />
                  {saving ? "Saving..." : isUploading ? "Uploading..." : "Update Project"}
                </button>
                <Link href="/admin"
                  className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 py-3 rounded-xl text-sm font-semibold transition-all">
                  Cancel
                </Link>

                {/* Delete confirmation */}
                {!showDeleteConfirm ? (
                  <button type="button" onClick={() => setShowDeleteConfirm(true)}
                    className="w-full flex items-center justify-center gap-2 border-2 border-red-200 hover:border-red-400 text-red-500 hover:bg-red-50 py-3 rounded-xl text-sm font-semibold transition-all">
                    <Trash2 size={15} /> Delete Project
                  </button>
                ) : (
                  <div className="border-2 border-red-200 rounded-xl p-4 bg-red-50 space-y-3">
                    <p className="text-xs text-red-700 font-semibold text-center">
                      Delete &quot;{form.title}&quot;? This cannot be undone.
                    </p>
                    <div className="flex gap-2">
                      <button type="button" onClick={handleDelete} disabled={deleting}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg text-xs font-semibold transition-all disabled:opacity-60">
                        {deleting ? "Deleting..." : "Yes, Delete"}
                      </button>
                      <button type="button" onClick={() => setShowDeleteConfirm(false)}
                        className="flex-1 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 py-2.5 rounded-lg text-xs font-semibold transition-all">
                        Keep
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

