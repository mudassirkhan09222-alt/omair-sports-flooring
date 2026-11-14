"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Save, X, LayoutGrid } from "lucide-react";
import ImageUploader from "@/components/admin/ImageUploader";
import { useImageUpload } from "@/lib/useImageUpload";

const SPORTS = [
  "Padel","Tennis","Basketball","Squash","Futsal","Football",
  "Volleyball","Badminton","Hockey","Running Track","Gym","Kids Play Area",
  "Multi-Sport","Other",
];

const inp = "w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none transition-all bg-gray-50 focus:bg-white";
const lbl = "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5";

export default function NewProject() {
  const router = useRouter();
  const { images, uploadFiles, removeImage, getUrls, isUploading } = useImageUpload();

  const [form, setForm] = useState({
    title: "", location: "", year: new Date().getFullYear().toString(),
    category: "Outdoor", sport: "", description: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const urls = getUrls();
    if (urls.length === 0) { setError("Please upload at least one image."); return; }
    setSaving(true); setError("");

    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, image_url: urls[0], images: urls }),
    });

    if (res.ok) { router.push("/admin"); router.refresh(); }
    else { const d = await res.json(); setError(d.error || "Failed to save."); setSaving(false); }
  };

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
              <span className="text-white/70 text-xs font-semibold">Add New Project</span>
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

            {/* ── Left — project info (3 cols) ── */}
            <div className="lg:col-span-3 space-y-5">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-7 h-7 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">1</span>
                  <h2 className="text-sm font-bold text-gray-800">Project Information</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className={lbl}>Project Title <span className="text-red-400">*</span></label>
                    <input name="title" required value={form.title} onChange={set}
                      placeholder="e.g. Premium Padel Club, Karachi" className={inp} />
                  </div>

                  <div>
                    <label className={lbl}>Description</label>
                    <textarea name="description" rows={4} value={form.description} onChange={set}
                      placeholder="Courts built, surface type, special features..."
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
                      <input name="location" required value={form.location} onChange={set}
                        placeholder="City, Pakistan" className={inp} />
                    </div>
                    <div>
                      <label className={lbl}>Year <span className="text-red-400">*</span></label>
                      <input name="year" required value={form.year} onChange={set}
                        placeholder="2024" className={inp} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right — images + save (2 cols) ── */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-7 h-7 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">2</span>
                  <h2 className="text-sm font-bold text-gray-800">Project Images</h2>
                </div>
                <ImageUploader
                  images={images}
                  onFiles={uploadFiles}
                  onRemove={removeImage}
                  isUploading={isUploading}
                />
              </div>

              {/* Save */}
              <div className="bg-white rounded-2xl shadow-sm p-5 space-y-3">
                {error && (
                  <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl px-3 py-2.5">
                    <X size={14} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-red-600 text-xs leading-relaxed">{error}</p>
                  </div>
                )}
                <button type="submit" disabled={saving || isUploading}
                  className="w-full flex items-center justify-center gap-2 text-white py-3 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:translate-y-0 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(135deg,#2563eb,#1d4ed8)" }}>
                  <Save size={15} />
                  {saving ? "Saving..." : isUploading ? "Uploading images..." : "Save Project"}
                </button>
                <Link href="/admin"
                  className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 py-3 rounded-xl text-sm font-semibold transition-all">
                  Cancel
                </Link>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100">
                <p className="text-xs font-bold text-blue-700 mb-1.5">💡 Tips</p>
                <ul className="space-y-1">
                  <li className="text-xs text-blue-600">• Select multiple images at once from the file picker</li>
                  <li className="text-xs text-blue-600">• First image is used as the cover on the website</li>
                  <li className="text-xs text-blue-600">• Landscape photos (16:9) look best on cards</li>
                  <li className="text-xs text-blue-600">• All images upload in parallel — very fast</li>
                </ul>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
