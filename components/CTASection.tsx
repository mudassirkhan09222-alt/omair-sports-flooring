"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">

      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=85"
          alt="Sports facility"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44]/95 via-[#0a1f44]/80 to-[#0a1f44]/70" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

      <div ref={ref} className="relative max-w-screen-xl mx-auto px-6 lg:px-12 text-center">

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
        >
          Start Your Project
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight tracking-tight text-white uppercase mb-5"
        >
          Let's Build Your
          <br />
          <span className="text-blue-400">Sports Facility.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-white/55 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-10"
        >
          Tell us about your project. We'll get back within 24 hours with a
          clear, competitive quote — no obligations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-blue-900/30"
          >
            Request a Quote
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-8 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-white/10"
          >
            <Phone size={13} />
            Call Us
          </Link>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-white/8"
        >
          {["Free Consultation", "Quote in 24hrs", "Certified Installation", "Full Warranty"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              <span className="text-white/40 text-[11px] font-semibold tracking-wide uppercase">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
