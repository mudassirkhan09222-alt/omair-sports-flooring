"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/Padel Image.jpeg"
          alt="Omair Sports Flooring — Professional Padel Courts"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44]/80 via-[#0a1f44]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-lg">

          {/* Tag */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Sports Flooring & Court Solutions
          </motion.p>

          {/* Heading — smaller & tighter */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white uppercase mb-4"
          >
            Professional
            <br />
            Sports Flooring
            <br />
            <span className="text-blue-400">&amp; Court Solutions.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/65 text-sm sm:text-base leading-relaxed mb-7 font-light"
          >
            We supply, manufacture and install sports courts across Pakistan —
            padel, tennis, basketball, futsal and more.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300"
            >
              Get a Free Quote
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/sports"
              className="inline-flex items-center gap-2 border border-white/40 hover:border-white/70 hover:bg-white/10 text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300"
            >
              Our Sports
            </Link>
          </motion.div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="absolute bottom-8 right-6 lg:right-12 hidden md:flex items-center gap-8 lg:gap-10"
        >
          {[
            { value: "10+", label: "Years" },
            { value: "100+", label: "Projects" },
            { value: "50+", label: "Facilities" },
          ].map((s) => (
            <div key={s.label} className="text-right">
              <div className="text-white text-lg font-black leading-none">{s.value}</div>
              <div className="text-white/40 text-[9px] font-semibold tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-white/25" />
        </motion.div>
      </motion.div>

    </section>
  );
}
