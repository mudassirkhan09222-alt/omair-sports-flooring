"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div ref={ref} className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            >
              Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-5xl font-black leading-tight tracking-tight text-[#0a1f44] uppercase"
            >
              Our <span className="text-blue-600">Work</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:max-w-xs"
          >
            <p className="text-[#4a5568] text-sm leading-relaxed mb-4">
              Click any project to see the full details, images and specifications.
            </p>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-blue-600 text-xs font-bold tracking-widest uppercase hover:gap-3 transition-all duration-300"
            >
              View All Projects
              <ArrowRight size={13} />
            </Link>
          </motion.div>
        </div>

        {/* ── All 8 project cards — click = full page ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="group relative block overflow-hidden aspect-[4/5]"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/90 via-[#0a1f44]/20 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Hover centre button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 flex items-center gap-2">
                    View Project <ArrowRight size={11} />
                  </span>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <span className="bg-blue-600 text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1">
                    {project.sport}
                  </span>
                  <span className="bg-white/15 backdrop-blur-sm text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1">
                    {project.type}
                  </span>
                </div>

                {/* Info at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-sm font-black uppercase tracking-tight leading-tight mb-1.5">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white/55">
                    <MapPin size={10} className="text-blue-300 flex-shrink-0" />
                    <span className="text-[10px]">{project.location}</span>
                    <span className="text-white/25 mx-1">·</span>
                    <span className="text-[10px]">{project.year}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
