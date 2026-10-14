"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Parallax: image moves up as user scrolls
  const imgY      = useTransform(scrollYProgress, [0, 1], ["0%",  "25%"]);
  const contentY  = useTransform(scrollYProgress, [0, 1], ["0%",  "15%"]);
  const opacity   = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">

      {/* Parallax background */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: imgY }}>
        <Image
          src="/Padel Image.jpeg"
          alt="Omair Sports Flooring — Professional Padel Courts"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44]/85 via-[#0a1f44]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/60 via-transparent to-transparent" />
      </motion.div>

      {/* Animated grain texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 w-full max-w-screen-xl mx-auto px-6 lg:px-12 pt-20"
      >
        <div className="max-w-xl">

          {/* Animated tag line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-5"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block w-8 h-px bg-blue-400 origin-left"
            />
            <span className="text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase">
              Sports Flooring & Court Solutions
            </span>
          </motion.div>

          {/* Word-by-word heading */}
          <div className="overflow-hidden mb-5">
            {["Professional", "Sports Flooring", "& Court Solutions."].map((line, li) => (
              <motion.div
                key={li}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.35 + li * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight uppercase ${li === 2 ? "text-blue-400" : "text-white"}`}>
                  {line}
                </h1>
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/65 text-sm sm:text-base leading-relaxed mb-8 font-light max-w-md"
          >
            We supply, manufacture and install sports courts across Pakistan —
            padel, tennis, basketball, futsal and more.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.88, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 text-xs font-bold tracking-widest uppercase transition-colors duration-300 shadow-lg shadow-blue-900/40"
              >
                Get a Free Quote
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/sports"
                className="inline-flex items-center gap-2 border border-white/40 hover:border-white/80 hover:bg-white/10 text-white px-7 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-300"
              >
                Our Sports
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.span
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/50 text-[9px] tracking-widest uppercase font-semibold"
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-white/40" />
        </motion.div>
      </motion.div>

    </section>
  );
}
