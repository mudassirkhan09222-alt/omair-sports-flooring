"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/lib/data";
import CTASection from "@/components/CTASection";

export default function ProjectsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0a1f44] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=1920&q=80"
            alt="Sports projects"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Our Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight tracking-tight text-white uppercase mb-5"
          >
            Projects We've
            <br />
            <span className="text-blue-400">Built.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/60 text-base max-w-lg leading-relaxed"
          >
            Click any project to see the full story — images, specifications and details.
          </motion.p>
        </div>
      </section>

      {/* ── All Projects Grid ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
              >
                <Link
                  href={`/projects/${project.id}`}
                  className="group relative block overflow-hidden aspect-[4/3]"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/90 via-[#0a1f44]/20 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Hover button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-5 py-2.5 flex items-center gap-2">
                      View Project <ArrowRight size={11} />
                    </span>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1">
                      {project.sport}
                    </span>
                    <span className="bg-white/15 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1">
                      {project.type}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-black text-base uppercase tracking-tight mb-1.5">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-white/55">
                      <MapPin size={11} className="text-blue-300" />
                      <span className="text-[11px]">{project.location}</span>
                      <span className="text-white/25 mx-1">·</span>
                      <span className="text-[11px]">{project.year}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
