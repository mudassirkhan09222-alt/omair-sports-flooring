"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative py-24 lg:py-40 overflow-hidden">

      {/* Parallax background */}
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=85"
          alt="Sports facility"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44]/95 via-[#0a1f44]/80 to-[#0a1f44]/70" />
      </motion.div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

      <div className="relative max-w-screen-xl mx-auto px-6 lg:px-12 text-center">

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-5"
        >
          <span className="block w-8 h-px bg-blue-400 origin-right" />
          <span className="text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase">Start Your Project</span>
          <span className="block w-8 h-px bg-blue-400 origin-left" />
        </motion.div>

        <div className="overflow-hidden mb-5">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight tracking-tight text-white uppercase"
          >
            Let's Build Your
            <br />
            <span className="text-blue-400">Sports Facility.</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/55 text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-10"
        >
          Tell us about your project. We'll get back within 24 hours with a
          clear, competitive quote — no obligations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition-colors duration-300 shadow-lg shadow-blue-900/30"
            >
              Request a Quote
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-white/10"
            >
              <Phone size={13} />
              Call Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust strip with stagger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-white/8"
        >
          {["Free Consultation", "Quote in 24hrs", "Certified Installation", "Full Warranty"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
              className="flex items-center gap-2"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.75 + i * 0.08 }}
                className="w-1 h-1 rounded-full bg-blue-400"
              />
              <span className="text-white/40 text-[11px] font-semibold tracking-wide uppercase">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
