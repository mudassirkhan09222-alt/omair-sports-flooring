"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { processSteps } from "@/lib/data";

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-32 bg-[#f7f9fc] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="block w-8 h-px bg-blue-500 origin-right" />
            <span className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase">Our Process</span>
            <span className="block w-8 h-px bg-blue-500 origin-left" />
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl lg:text-5xl font-black leading-tight tracking-tight text-[#0a1f44] uppercase"
            >
              How We Deliver
              <br />
              <span className="text-blue-600">Your Project.</span>
            </motion.h2>
          </div>
        </div>

        {/* Desktop — horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Animated connector line */}
          <div className="absolute top-[18px] left-0 right-0 h-px bg-blue-100">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-gradient-to-r from-blue-500 to-blue-300 origin-left"
            />
          </div>

          <div className="grid grid-cols-8 gap-3 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col items-center text-center"
              >
                {/* Dot with ping animation */}
                <div className="relative mb-8 w-5 h-5">
                  {/* Ping ring */}
                  <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    animate={isInView ? { scale: [1, 2.2, 1], opacity: [0, 0.5, 0] } : {}}
                    transition={{ duration: 2, delay: 0.5 + index * 0.2, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute inset-0 rounded-full bg-blue-400"
                  />
                  <motion.div
                    whileHover={{ scale: 1.4, backgroundColor: "#2563eb" }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-5 h-5 rounded-full bg-white border-2 border-blue-500 relative z-10"
                  />
                </div>

                <span className="text-blue-400/50 text-[9px] font-black tracking-widest mb-1 block">{step.step}</span>
                <h3 className="text-[#0a1f44] text-[11px] font-black uppercase tracking-wide mb-1.5 leading-tight">{step.title}</h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#4a5568] text-[10px] leading-relaxed"
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile — vertical timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-100">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full bg-gradient-to-b from-blue-500 to-blue-200 origin-top h-full"
            />
          </div>

          <div className="space-y-7 pl-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.2 + index * 0.08 }}
                  className="absolute -left-[2.2rem] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-500 z-10"
                />
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-blue-400/50 text-[9px] font-black tracking-widest">{step.step}</span>
                  <h3 className="text-[#0a1f44] text-sm font-black uppercase tracking-wide">{step.title}</h3>
                </div>
                <p className="text-[#4a5568] text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
