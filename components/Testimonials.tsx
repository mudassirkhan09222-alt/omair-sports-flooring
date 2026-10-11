"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="py-20 lg:py-32 bg-[#0a1f44] overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

      <div ref={ref} className="relative max-w-screen-xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          >
            Client Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight text-white uppercase"
          >
            What Our Clients
            <span className="text-blue-400"> Say.</span>
          </motion.h2>
        </div>

        {/* Slider */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <div className="flex justify-center mb-7">
                <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                  <Quote size={20} className="text-blue-400" />
                </div>
              </div>

              <blockquote className="text-lg sm:text-xl lg:text-2xl text-white font-light leading-relaxed mb-8 tracking-tight">
                "{testimonials[active].quote}"
              </blockquote>

              <div className="flex flex-col items-center gap-1.5">
                <div className="w-8 h-px bg-blue-500" />
                <p className="text-white font-bold text-sm uppercase tracking-wide mt-2">
                  {testimonials[active].name}
                </p>
                <p className="text-blue-300 text-xs font-medium tracking-widest uppercase">
                  {testimonials[active].company}
                </p>
                <p className="text-white/30 text-[11px]">
                  {testimonials[active].project}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/15 hover:border-blue-400 flex items-center justify-center text-white/40 hover:text-blue-400 transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft size={17} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === active
                      ? "w-6 h-1.5 bg-blue-400 rounded"
                      : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-white/15 hover:border-blue-400 flex items-center justify-center text-white/40 hover:text-blue-400 transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        {/* Bottom cards — desktop */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mt-16">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className={`text-left p-4 border transition-all duration-300 ${
                i === active
                  ? "border-blue-500 bg-blue-600/10"
                  : "border-white/8 hover:border-white/25"
              }`}
            >
              <p className="text-white/60 text-[11px] leading-relaxed mb-3 line-clamp-3">
                "{t.quote}"
              </p>
              <p className="text-white text-[10px] font-bold uppercase tracking-wide">{t.name}</p>
              <p className="text-blue-300/60 text-[9px] tracking-widest uppercase">{t.company}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
