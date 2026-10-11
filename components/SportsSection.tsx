"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sports } from "@/lib/data";
import SportsCard from "./SportsCard";

export default function SportsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredSports = sports.slice(0, 2);
  const gridSports = sports.slice(2);

  return (
    <section className="py-20 lg:py-32 bg-[#f7f9fc] overflow-hidden">
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
              Sports We Cover
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-5xl font-black leading-tight tracking-tight text-[#0a1f44] uppercase"
            >
              Every Sport.
              <br />
              <span className="text-blue-600">One Company.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:max-w-xs"
          >
            <p className="text-[#4a5568] text-sm leading-relaxed mb-4">
              Padel, tennis, basketball, squash, futsal, football, volleyball,
              badminton — we have the right surface for every sport.
            </p>
            <Link
              href="/sports"
              className="group inline-flex items-center gap-2 text-blue-600 text-xs font-bold tracking-widest uppercase hover:gap-3 transition-all duration-300"
            >
              View All Sports
              <ArrowRight size={13} />
            </Link>
          </motion.div>
        </div>

        {/* 2 large featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {featuredSports.map((sport, i) => (
            <SportsCard key={sport.id} sport={sport} index={i} variant="large" />
          ))}
        </div>

        {/* Smaller grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gridSports.slice(0, 4).map((sport, i) => (
            <SportsCard key={sport.id} sport={sport} index={i + 2} variant="small" />
          ))}
        </div>

        {gridSports.length > 4 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {gridSports.slice(4).map((sport, i) => (
              <SportsCard key={sport.id} sport={sport} index={i + 6} variant="small" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
