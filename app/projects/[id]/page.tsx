"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { ArrowLeft, MapPin, Calendar, Tag, ArrowRight } from "lucide-react";

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
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading]  = useState(true);
  const [activeImg, setActiveImg] = useState(0);

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

  if (loading) return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!project) return null;

  // All images — cover first
  const allImages: string[] = (() => {
    const imgs = Array.isArray(project.images) && project.images.length > 0
      ? project.images
      : [project.image_url];
    return imgs.filter(Boolean);
  })();

  return (
    <main className="bg-white min-h-screen">
      {/* ── Hero ── */}
      <div className="relative w-full h-[55vh] sm:h-[65vh] lg:h-[75vh] min-h-[380px] overflow-hidden">
        <Image
          src={allImages[activeImg]}
          alt={project.title}
          fill
          priority
          className="object-cover object-center transition-opacity duration-500"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/90 via-[#0a1f44]/30 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-0 right-0 max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-white/50 text-xs">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-white/80 line-clamp-1">{project.title}</span>
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 max-w-screen-xl mx-auto px-6 lg:px-12 pb-10">
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

        {/* Image switcher dots (if multiple) */}
        {allImages.length > 1 && (
          <div className="absolute bottom-4 right-6 lg:right-12 flex gap-2">
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

          {/* Left — description */}
          <div className="lg:col-span-2 space-y-10">

            {/* Overview */}
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

            {/* Details grid */}
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
                      <p className="text-[#0a1f44] text-xs font-bold uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      <p className="text-[#4a5568] text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image gallery (thumbnails) */}
            {allImages.length > 1 && (
              <div>
                <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                  Gallery
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {allImages.map((url, i) => (
                    <button key={i} onClick={() => setActiveImg(i)}
                      className={`relative aspect-video overflow-hidden border-2 transition-all ${
                        i === activeImg ? "border-blue-500 ring-2 ring-blue-200" : "border-transparent hover:border-blue-300"
                      }`}>
                      <Image src={url} alt={`Image ${i + 1}`} fill
                        className="object-cover" sizes="(max-width:640px)50vw,33vw" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right — sidebar */}
          <div className="space-y-6">
            {/* Info card */}
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

            {/* CTA */}
            <div className="bg-blue-600 p-6 text-white">
              <h3 className="text-lg font-black uppercase tracking-tight mb-2">
                Want a Similar Project?
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                We can build the same for you — anywhere in Pakistan.
              </p>
              <Link href="/contact"
                className="group flex items-center justify-between gap-2 bg-white text-blue-600 px-5 py-3 text-xs font-bold tracking-widest uppercase hover:bg-blue-50 transition-colors">
                Get a Free Quote
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Back link */}
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
