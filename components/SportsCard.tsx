"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Sport } from "@/lib/data";

interface SportsCardProps {
  sport: Sport;
  index: number;
  variant?: "large" | "small";
}

export default function SportsCard({ sport, index, variant = "small" }: SportsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link
        href={`/sports#${sport.id}`}
        className={`group block relative overflow-hidden ${
          variant === "large" ? "aspect-[3/4]" : "aspect-[4/5]"
        }`}
      >
        {/* Image */}
        <Image
          src={sport.image}
          alt={sport.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/90 via-[#0a1f44]/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-blue-300 text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">
              Sports Flooring
            </span>
            <h3 className="text-white text-2xl lg:text-3xl font-black uppercase tracking-tight mb-2">
              {sport.name}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-out">
              {sport.description}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-blue-300 text-[11px] font-bold tracking-[0.15em] uppercase">
              View Details
            </span>
            <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
              <ArrowUpRight size={14} className="text-white" />
            </div>
          </div>
        </div>

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </Link>
    </motion.div>
  );
}
