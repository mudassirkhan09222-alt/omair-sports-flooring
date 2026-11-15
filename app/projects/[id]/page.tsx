"use client";
import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { ArrowLeft, MapPin, Calendar, Tag, ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type Project = {
  id: string;
  title: string;
  location: string;
  year: string;
  category: string;
  sport: string;
  description: string;
  image_url: string;
  images?: string[];
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [project, setProject]     = useState<Project | null>(null);
  const [loading, setLoading]     = useState(true);
  const [activeImg, setActiveImg] = useState(0);

  // Lightbox state
  const [lightbox, setLightbox]   = useState(false);
  const [lbIndex, setLbIndex]     = useState(0);

  useEffect(() => {
    if (!id) return;
    supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data, error }) => {
        if (error || !data) { router.push("/404"); return; }
        setProject(data as Project);
        setLoading(false);
      });
  }, [id, router]);

  // Keyboard navigation for lightbox
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (!lightbox) return;
    if (e.key === "Escape")       setLightbox(false);
    if (e.key === "ArrowRight")   setLbIndex(i => (i + 1) % allImages.length);
    if (e.key === "ArrowLeft")    setLbIndex(i => (i - 1 + allImages.length) % allImages.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  if (loading) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!project) return null;

  const allImages: string[] = (() => {
    const imgs = Array.isArray(project.images) && project.images.length > 0
      ? project.images
      : [project.image_url];
    return imgs.filter(Boolean);
  })();

  const openLightbox = (index: number) => {
    setLbIndex(index);
    setLightbox(true);
  };

  const prevImg = () => setLbIndex(i => (i - 1 + allImages.length) % allImages.length);
  const nextImg = () => setLbIndex(i => (i + 1) % allImages.length);

  return (
    <main className="bg-white min-h-screen">

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => setLightbox(false)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center transition-colors"
          >
            <X size={20} className="text-white" />
          </button>

          {/* Counter */}
          {allImages.length > 1 && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              {lbIndex + 1} / {allImages.length}
            </div>
          )}

          {/* Prev */}
          {allImages.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); prevImg(); }}
              className="absolute left-3 sm:left-6 z-10 w-11 h-11 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full h-full flex items-center justify-center px-16 py-16"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-5xl max-h-[85vh]">
              <Image
                src={allImages[lbIndex]}
                alt={`${project.title} — image ${lbIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          {/* Next */}
          {allImages.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); nextImg(); }}
              className="absolute right-3 sm:right-6 z-10 w-11 h-11 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight size={24} className="text-white" />
            </button>
          )}

          {/* Thumbnails strip */}
          {allImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {allImages.map((url, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setLbIndex(i); }}
                  className={`relative w-12 h-9 overflow-hidden rounded transition-all border-2 ${
                    i === lbIndex ? "border-white opacity-100" : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image src={url} alt="" fill className="object-cover" sizes="48px" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Hero ── */}
      <div
        className="relative w-full h-[55vh] sm:h-[65vh] lg:h-[75vh] min-h-[380px] overflow-hidden cursor-zoom-in"
        onClick={() => openLightbox(activeImg)}
        title="Click to view full screen"
      >
        <Image
          src={allImages[activeImg]}
          alt={project.title}
          fill
          priority
          className="object-cover object-center transition-opacity duration-500"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/90 via-[#0a1f44]/30 to-transparent" />

        {/* Zoom hint */}
        <div className="absolute top-28 right-6 lg:right-12 bg-black/40 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1.5 rounded-full flex items-center gap-1.5 select-none">
          <ZoomIn size={12} /> Click to enlarge
        </div>

        {/* Breadcrumb */}
        <div
          className="absolute top-24 left-0 right-0 max-w-screen-xl mx-auto px-6 lg:px-12"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center gap-2 text-white/50 text-xs">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-white/80 line-clamp-1">{project.title}</span>
          </div>
        </div>

        {/* Title overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 max-w-screen-xl mx-auto px-6 lg:px-12 pb-10"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1">
              {project.sport}
            </span>
            <span className="bg-white/15 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1">
              {project.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase leading-tight tracking-tight">
            {project.title}
          </h1>
        </div>

        {/* Dots */}
        {allImages.length > 1 && (
          <div
            className="absolute bottom-4 right-6 lg:right-12 flex gap-2"
            onClick={e => e.stopPropagation()}
          >
            {allImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === activeImg ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-14 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left */}
          <div className="lg:col-span-2 space-y-10">

            {project.description && (
              <div>
                <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                  Project Overview
                </p>
                <p className="text-[#4a5568] text-base sm:text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            )}

            <div>
              <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                Project Details
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Sport",    value: project.sport,    icon: Tag      },
                  { label: "Type",     value: project.category, icon: Tag      },
                  { label: "Location", value: project.location, icon: MapPin   },
                  { label: "Year",     value: project.year,     icon: Calendar },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label}
                    className="flex items-start gap-4 bg-[#f7f9fc] px-5 py-4 border-l-2 border-blue-500">
                    <Icon size={15} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[#0a1f44] text-xs font-bold uppercase tracking-wide mb-0.5">{label}</p>
                      <p className="text-[#4a5568] text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery thumbnails — click = lightbox */}
            {allImages.length > 1 && (
              <div>
                <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                  Gallery
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {allImages.map((url, i) => (
                    <button
                      key={i}
                      onClick={() => openLightbox(i)}
                      className={`group relative aspect-video overflow-hidden border-2 transition-all ${
                        i === activeImg
                          ? "border-blue-500 ring-2 ring-blue-200"
                          : "border-transparent hover:border-blue-300"
                      }`}
                      title="Click to view full screen"
                    >
                      <Image src={url} alt={`Image ${i + 1}`} fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width:640px)50vw,33vw" />
                      {/* Zoom overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center">
                        <ZoomIn size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </div>
                    </button>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-2 flex items-center gap-1">
                  <ZoomIn size={11} /> Click any image to view full screen
                </p>
              </div>
            )}
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            <div className="border border-[#e2e8f0]">
              <div className="bg-[#0a1f44] px-5 py-3">
                <p className="text-white text-xs font-bold tracking-widest uppercase">Project Info</p>
              </div>
              <div className="divide-y divide-[#e2e8f0]">
                <div className="flex items-center gap-3 px-5 py-4">
                  <MapPin size={15} className="text-blue-600 flex-shrink-0" />
                  <span className="text-[#4a5568] text-sm">{project.location}</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-4">
                  <Calendar size={15} className="text-blue-600 flex-shrink-0" />
                  <span className="text-[#4a5568] text-sm">Completed {project.year}</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-4">
                  <Tag size={15} className="text-blue-600 flex-shrink-0" />
                  <span className="text-[#4a5568] text-sm">{project.sport} — {project.category}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-6 text-white">
              <h3 className="text-lg font-black uppercase tracking-tight mb-2">Want a Similar Project?</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                We can build the same for you — anywhere in Pakistan.
              </p>
              <Link href="/contact"
                className="group flex items-center justify-between gap-2 bg-white text-blue-600 px-5 py-3 text-xs font-bold tracking-widest uppercase hover:bg-blue-50 transition-colors">
                Get a Free Quote
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <Link href="/projects"
              className="group flex items-center gap-2 text-[#4a5568] text-xs font-bold tracking-widest uppercase hover:text-blue-600 transition-colors">
              <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" />
              All Projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
