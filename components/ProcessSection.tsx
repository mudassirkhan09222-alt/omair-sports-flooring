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
        <div ref={ref} className="text-center mb-14 lg:mb-18">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          >
            Our Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-5xl font-black leading-tight tracking-tight text-[#0a1f44] uppercase"
          >
            How We Deliver
            <br />
            <span className="text-blue-600">Your Project.</span>
          </motion.h2>
        </div>

        {/* Desktop — horizontal */}
        <div className="hidden lg:block relative">
          <div className="absolute top-10 left-0 right-0 h-px bg-blue-100">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
              className="h-full bg-blue-500 origin-left"
            />
          </div>
          <div className="grid grid-cols-8 gap-3 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.09 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative w-4 h-4 mb-7">
                  <div className="w-4 h-4 rounded-full bg-white border-2 border-blue-500 group-hover:bg-blue-500 transition-colors duration-300 z-10 relative" />
                </div>
                <span className="text-blue-400/50 text-[9px] font-black tracking-widest mb-1.5 block">{step.step}</span>
                <h3 className="text-[#0a1f44] text-[11px] font-black uppercase tracking-wide mb-1.5 leading-tight">{step.title}</h3>
                <p className="text-[#4a5568] text-[10px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile — vertical */}
        <div className="lg:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-blue-100">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
              className="w-full bg-blue-500 origin-top h-full"
            />
          </div>
          <div className="space-y-7 pl-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: 15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.07 }}
                className="relative"
              >
                <div className="absolute -left-[2.2rem] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-500 z-10" />
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
