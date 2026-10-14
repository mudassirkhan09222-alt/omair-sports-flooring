"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { staggerContainer, staggerItem } from "@/lib/animations";

const capabilities = [
  "Importing Premium Materials",
  "In-House Manufacturing",
  "Supply & Logistics",
  "Professional Installation",
  "Full Court Construction",
  "Project Management",
  "After-Sales Support",
];

export default function CompanyIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=900&q=85"
                  alt="Sports court"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/25 to-transparent pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -right-5 lg:-right-8 bg-blue-600 text-white px-6 py-5 shadow-2xl float-anim"
            >
              <div className="text-3xl font-black leading-none">20+</div>
              <div className="text-blue-200 text-[10px] font-semibold tracking-widest uppercase mt-1">Years Experience</div>
            </motion.div>

            {/* Decorative corner */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-4 -left-4 w-20 h-20 border-2 border-blue-100 -z-10"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 mb-5"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block w-8 h-px bg-blue-500 origin-left"
              />
              <span className="text-blue-600 text-xs font-semibold tracking-widest uppercase">Who We Are</span>
            </motion.div>

            <div className="overflow-hidden mb-5">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight text-[#0a1f44] uppercase"
              >
                Pakistan's Sports
                <br />
                <span className="text-blue-600">Court Experts.</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-[#4a5568] text-sm sm:text-base leading-relaxed mb-4"
            >
              Omair Sports Flooring builds complete sports courts — padel, tennis, basketball,
              squash, futsal and more. We import premium materials, manufacture locally and
              handle every installation ourselves.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-[#4a5568] text-sm sm:text-base leading-relaxed mb-9"
            >
              Over 20 years and 100+ projects delivered across Lahore, Karachi,
              Islamabad and beyond — for clubs, hotels, schools and housing societies.
            </motion.p>

            {/* Staggered capabilities */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-y-2 gap-x-4 mb-9"
            >
              {capabilities.map((item) => (
                <motion.div key={item} variants={staggerItem} className="flex items-center gap-2">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"
                  />
                  <span className="text-[#0a1f44] text-xs font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ x: 4 }}
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-blue-600 text-xs font-bold tracking-widest uppercase border-b-2 border-blue-600 pb-0.5 hover:gap-3 transition-all duration-300"
              >
                Our Story
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
