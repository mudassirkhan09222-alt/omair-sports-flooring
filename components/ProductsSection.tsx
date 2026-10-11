"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

        {/* ── Header ── */}
        <div ref={ref} className="mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          >
            Our Products
          </motion.p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-5xl font-black leading-tight tracking-tight text-[#0a1f44] uppercase"
            >
              The Right Surface
              <br />
              <span className="text-blue-600">for Every Sport.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#4a5568] text-sm leading-relaxed lg:max-w-xs"
            >
              Click any product to see full details, specifications and applications.
            </motion.p>
          </div>
        </div>

        {/* ── Product Grid — all 8 cards, click = full page ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <Link
                href={`/products/${product.id}`}
                className="group flex flex-col border border-[#e8edf5] hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/8 transition-all duration-300 h-full"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#0a1f44]/0 group-hover:bg-[#0a1f44]/30 transition-all duration-400 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 flex items-center gap-2">
                      View Details <ArrowRight size={11} />
                    </span>
                  </div>
                  {/* Category badge */}
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1 bg-white">
                  <h3 className="text-[#0a1f44] text-sm font-black uppercase tracking-tight mb-1.5 group-hover:text-blue-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-[#4a5568] text-[12px] leading-relaxed mb-3 flex-1">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-1 mb-3">
                    {product.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                        <span className="text-[10px] text-[#4a5568] font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-blue-600 text-[11px] font-bold tracking-widest uppercase border-t border-[#e8edf5] pt-3 mt-auto group-hover:gap-3 transition-all duration-300">
                    View Full Details
                    <ArrowRight size={11} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 border-2 border-[#0a1f44] text-[#0a1f44] px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-[#0a1f44] hover:text-white transition-all duration-300"
          >
            See All Products
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
