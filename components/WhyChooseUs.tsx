"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whyChooseUs } from "@/lib/data";

const cardImages = [
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85", alt: "Premium materials" },
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85", alt: "Expert installation" },
  { src: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=85", alt: "Experienced team" },
  { src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&q=85", alt: "Quality control" },
  { src: "https://images.unsplash.com/photo-1505666287802-931dc83948e9?w=800&q=85", alt: "Complete solutions" },
  { src: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&q=85", alt: "After-sales support" },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-32 bg-[#f7f9fc] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div ref={ref} className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-5">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-5xl font-black leading-tight tracking-tight text-[#0a1f44] uppercase"
            >
              Why Work With
              <br />
              <span className="text-blue-600">Omair?</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#4a5568] text-sm leading-relaxed lg:max-w-xs lg:text-right"
          >
            Clubs, universities and developers across Pakistan trust us because we deliver what we promise.
          </motion.p>
        </div>

        {/* 6 image cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.09 }}
              className="group relative overflow-hidden aspect-[4/3] cursor-default"
            >
              <Image
                src={cardImages[index].src}
                alt={cardImages[index].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/92 via-[#0a1f44]/45 to-[#0a1f44]/5" />
              <div className="absolute inset-0 w-1 bg-blue-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-bottom" />

              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="text-blue-400/60 text-[9px] font-black tracking-widest uppercase mb-2">{item.number}</span>
                <h3 className="text-white text-sm font-black uppercase tracking-wide mb-1.5 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/65 text-[12px] leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
                  {item.description}
                </p>
                <div className="mt-3 w-6 h-0.5 bg-blue-400/50 group-hover:w-12 group-hover:bg-blue-400 transition-all duration-400" />
              </div>

              <div className="absolute top-3 right-4 text-[3rem] font-black text-white/4 leading-none select-none group-hover:text-white/8 transition-colors duration-300">
                {item.number}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-5 relative h-[240px] lg:h-[320px] overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600&q=85"
            alt="Sports facility"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44]/88 via-[#0a1f44]/50 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 lg:px-14">
            <div>
              <p className="text-blue-300 text-[10px] font-semibold tracking-[0.2em] uppercase mb-3">Our Promise</p>
              <p className="text-white text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-tight tracking-tight mb-5">
                Quality You Can See.
                <br />
                Results That Last.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300"
              >
                Start Your Project
                <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
