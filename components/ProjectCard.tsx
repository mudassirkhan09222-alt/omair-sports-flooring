"use client";

import Image from "next/image";
import Link from "next/link";
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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/projects/${project.id}`} className="group relative block overflow-hidden aspect-[4/5]">
        {/* Image with hover zoom */}
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0.65 }}
          whileHover={{ opacity: 0.92 }}
          transition={{ duration: 0.4 }}
          style={{ background: "linear-gradient(to top, #0a1f44 0%, #0a1f4480 40%, transparent 100%)" }}
        />

        {/* Top accent line */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-1.5">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 + 0.2 }}
            className="bg-blue-600 text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1"
          >
            {project.sport}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 + 0.3 }}
            className="bg-white/20 backdrop-blur-sm text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1"
          >
            {project.type}
          </motion.span>
        </div>

        {/* Content */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-5"
          initial={{ y: 8 }}
          whileHover={{ y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-white text-sm font-black uppercase tracking-tight mb-1.5">{project.name}</h3>
              <div className="flex items-center gap-1.5 text-white/55">
                <MapPin size={10} className="text-blue-300" />
                <span className="text-[10px] font-medium">{project.location}</span>
              </div>
            </div>
            <motion.div
              className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1, backgroundColor: "rgba(37,99,235,0.8)" }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight size={12} className="text-white" />
            </motion.div>
          </div>

          <motion.div
            className="mt-3 pt-3 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-blue-300 text-[9px] font-bold tracking-widest uppercase">{project.year}</span>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
