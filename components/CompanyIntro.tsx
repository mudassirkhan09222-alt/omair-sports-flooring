"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=900&q=85"
                alt="Sports court"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -bottom-6 -right-5 lg:-right-8 bg-blue-600 text-white px-6 py-5 shadow-xl"
            >
              <div className="text-3xl font-black leading-none">20+</div>
              <div className="text-blue-200 text-[10px] font-semibold tracking-widest uppercase mt-1">
                Years Experience
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Who We Are
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight text-[#0a1f44] uppercase mb-5">
              Pakistan's Sports
              <br />
              <span className="text-blue-600">Court Experts.</span>
            </h2>

            <p className="text-[#4a5568] text-sm sm:text-base leading-relaxed mb-4">
              Omair Sports Flooring builds complete sports courts — padel,
              tennis, basketball, squash, futsal and more. We import premium
              materials, manufacture locally and handle every installation
              ourselves.
            </p>

            <p className="text-[#4a5568] text-sm sm:text-base leading-relaxed mb-8">
              Over 20 years and 100+ projects delivered across Lahore, Karachi,
              Islamabad and beyond — for clubs, hotels, schools and housing
              societies.
            </p>

            {/* Capabilities */}
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-8">
              {capabilities.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span className="text-[#0a1f44] text-xs font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-blue-600 text-xs font-bold tracking-widest uppercase border-b-2 border-blue-600 pb-0.5 hover:gap-3 transition-all duration-300"
            >
              Learn More
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
