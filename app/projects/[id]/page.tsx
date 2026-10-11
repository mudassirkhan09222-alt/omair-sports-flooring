import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Calendar, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.name} | Omair Sports Flooring`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const others = projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <main className="bg-white">

      {/* ── Full-screen hero image ── */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-[420px] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/92 via-[#0a1f44]/35 to-[#0a1f44]/15" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-0 right-0 max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-white/50 text-xs font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <ChevronRight size={12} />
            <span className="text-white">{project.name}</span>
          </div>
        </div>

        {/* Title at bottom */}
        <div className="absolute bottom-0 left-0 right-0 max-w-screen-xl mx-auto px-6 lg:px-12 pb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1">
              {project.sport}
            </span>
            <span className="bg-white/15 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1">
              {project.type}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tight">
            {project.name}
          </h1>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-14 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left — description */}
          <div className="lg:col-span-2 space-y-10">

            <div>
              <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Project Overview
              </p>
              <p className="text-[#4a5568] text-base sm:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key details */}
            <div>
              <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                Project Details
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Sport",     value: project.sport      },
                  { label: "Type",      value: project.type       },
                  { label: "Location",  value: project.location   },
                  { label: "Year",      value: project.year       },
                  ...(project.client  ? [{ label: "Client",  value: project.client  }] : []),
                  ...(project.area    ? [{ label: "Area",    value: project.area    }] : []),
                  ...(project.surface ? [{ label: "Surface", value: project.surface }] : []),
                ].map((detail) => (
                  <div key={detail.label} className="flex items-start gap-4 bg-[#f7f9fc] px-5 py-4 border-l-2 border-blue-500">
                    <span className="text-[#0a1f44] text-xs font-bold uppercase tracking-wide w-20 flex-shrink-0 mt-0.5">
                      {detail.label}
                    </span>
                    <span className="text-[#4a5568] text-sm">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — sidebar */}
          <div className="space-y-6">

            {/* Location + year card */}
            <div className="border border-[#e2e8f0]">
              <div className="bg-[#0a1f44] px-5 py-3">
                <p className="text-white text-xs font-bold tracking-widest uppercase">Project Info</p>
              </div>
              <div className="divide-y divide-[#e2e8f0]">
                <div className="flex items-center gap-3 px-5 py-4">
                  <MapPin size={16} className="text-blue-600 flex-shrink-0" />
                  <span className="text-[#4a5568] text-sm">{project.location}</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-4">
                  <Calendar size={16} className="text-blue-600 flex-shrink-0" />
                  <span className="text-[#4a5568] text-sm">Completed {project.year}</span>
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
              <Link
                href="/contact"
                className="group flex items-center justify-between gap-2 bg-white text-blue-600 px-5 py-3 text-xs font-bold tracking-widest uppercase hover:bg-blue-50 transition-colors duration-200"
              >
                Get a Free Quote
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Back */}
            <Link
              href="/projects"
              className="group flex items-center gap-2 text-[#4a5568] text-xs font-bold tracking-widest uppercase hover:text-blue-600 transition-colors"
            >
              <ArrowLeft size={13} className="transition-transform duration-300 group-hover:-translate-x-1" />
              All Projects
            </Link>
          </div>
        </div>

        {/* ── More projects ── */}
        {others.length > 0 && (
          <div className="mt-20 pt-14 border-t border-[#e2e8f0]">
            <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">More Work</p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1f44] uppercase tracking-tight mb-8">
              Other Projects
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="group relative overflow-hidden aspect-[4/3] block"
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/90 via-[#0a1f44]/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1">
                      {p.sport}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-sm font-black uppercase tracking-tight mb-1">{p.name}</h3>
                    <div className="flex items-center gap-1.5 text-white/55">
                      <MapPin size={10} className="text-blue-300" />
                      <span className="text-[10px]">{p.location}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
