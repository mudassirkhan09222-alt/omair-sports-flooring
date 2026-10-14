"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  { number: "01", label: "Import",           desc: "We source premium materials from international suppliers" },
  { number: "02", label: "Manufacture",      desc: "In-house production to exact project specifications"      },
  { number: "03", label: "Quality Control",  desc: "Every batch tested before it leaves our facility"        },
  { number: "04", label: "Installation",     desc: "Our trained teams install on-site with precision"        },
  { number: "05", label: "Handover",         desc: "Complete delivery with documentation and support"        },
];

export default function ManufacturingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-[#0a1f44] overflow-hidden relative">

      <div className="absolute inset-0">
        <Image
          src="/images/manufacturing/mfg-civil-work.jpg"
          alt="Manufacturing"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0a1f44]/85" />
      </div>

      <div ref={ref} className="relative max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            >
              How We Work
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight text-white uppercase mb-5"
            >
              We Control
              <br />
              <span className="text-blue-400">Every Step.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/55 text-sm leading-relaxed mb-9"
            >
              We don't just sell flooring — we manage the whole project. Import,
              manufacture, install, hand over. One team, no middlemen, better results.
            </motion.p>

            {/* Steps */}
            <div>
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -25 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.09 }}
                  className="group flex items-center gap-4 border-b border-white/8 py-3.5 hover:border-blue-500/40 transition-colors duration-300"
                >
                  <span className="text-blue-400/50 text-[10px] font-black tracking-widest w-7 flex-shrink-0">
                    {step.number}
                  </span>
                  <div className="flex-1">
                    <span className="text-white font-bold text-[13px] uppercase tracking-wide">{step.label}</span>
                    <span className="text-white/35 text-[11px] ml-2 hidden sm:inline">— {step.desc}</span>
                  </div>
                  <motion.div
                    className="h-px bg-blue-400"
                    initial={{ width: "1.25rem" }}
                    whileHover={{ width: "2.5rem" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8"
            >
              <Link
                href="/manufacturing"
                className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all duration-300"
              >
                See Our Process
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/manufacturing/mfg-installation.jpg"
                alt="Sports court construction"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/40 to-transparent" />
            </div>

            <div className="absolute top-8 -left-6 bg-blue-600 px-5 py-4 text-white">
              <div className="text-2xl font-black leading-none">ISO</div>
              <div className="text-blue-200 text-[9px] font-bold tracking-widest uppercase mt-1">Quality</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
