"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className="group relative overflow-hidden aspect-[4/5] cursor-pointer"
    >
      <Image
        src={project.image}
        alt={project.name}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ transform: "scale(1)" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/90 via-[#0a1f44]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Top badge */}
      <div className="absolute top-4 left-4 flex gap-2">
        <span className="bg-blue-600 text-white text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1">
          {project.sport}
        </span>
        <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold tracking-[0.15em] uppercase px-2.5 py-1">
          {project.type}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-white text-base font-black uppercase tracking-tight mb-1.5">
              {project.name}
            </h3>
            <div className="flex items-center gap-1.5 text-white/60">
              <MapPin size={11} className="text-blue-300" />
              <span className="text-[11px] font-medium">{project.location}</span>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0">
            <ArrowUpRight size={14} className="text-white" />
          </div>
        </div>

        {/* Year */}
        <div className="mt-3 pt-3 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-blue-300 text-[10px] font-bold tracking-[0.2em] uppercase">
            {project.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
