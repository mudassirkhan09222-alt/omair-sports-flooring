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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/sports#${sport.id}`}
        className={`group block relative overflow-hidden ${variant === "large" ? "aspect-[3/4]" : "aspect-[4/5]"}`}
      >
        {/* Image with hover zoom */}
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={sport.image}
            alt={sport.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Gradient overlay — deepens on hover */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0.6 }}
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

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 lg:p-6">
          <motion.span
            className="text-blue-300 text-[9px] font-bold tracking-[0.3em] uppercase mb-1.5 block"
            initial={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
          >
            Sports Flooring
          </motion.span>

          <h3 className="text-white text-xl lg:text-2xl font-black uppercase tracking-tight mb-0">
            {sport.name}
          </h3>

          {/* Description slides up on hover */}
          <motion.p
            className="text-white/70 text-xs leading-relaxed overflow-hidden"
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            whileHover={{ height: "auto", opacity: 1, marginTop: 8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {sport.description}
          </motion.p>

          {/* Arrow button */}
          <motion.div
            className="flex items-center justify-between mt-3"
            initial={{ opacity: 0, y: 8 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-blue-300 text-[10px] font-bold tracking-[0.15em] uppercase">View Details</span>
            <motion.div
              className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center"
              whileHover={{ scale: 1.15, backgroundColor: "#3b82f6" }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <ArrowUpRight size={13} className="text-white" />
            </motion.div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
