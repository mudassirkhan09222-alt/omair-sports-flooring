"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { sports } from "@/lib/data";
import CTASection from "@/components/CTASection";

export default function SportsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0a1f44] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=1920&q=80"
            alt="Sports courts"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="block w-10 h-px bg-blue-400" />
            <span className="text-blue-300 text-[11px] font-bold tracking-[0.25em] uppercase">Sports Expertise</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[1.0] tracking-[-0.02em] text-white uppercase max-w-3xl mb-6"
          >
            Sports{" "}
            <span className="text-blue-400">Without</span>
            <br />
            Limits.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-white/60 text-lg max-w-xl leading-relaxed"
          >
            Professional surfaces and court solutions designed for every game — built to international standards, installed by certified teams.
          </motion.p>
        </div>
      </section>

      {/* Sports list */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="space-y-0">
            {sports.map((sport, index) => (
              <motion.div
                key={sport.id}
                id={sport.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.05 }}
                className={`group grid lg:grid-cols-2 gap-0 border-b border-[#e2e8f0] ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[16/9] lg:aspect-auto lg:min-h-[480px] overflow-hidden ${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={sport.image}
                    alt={sport.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/40 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-blue-600 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5">
                      {sport.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex flex-col justify-center p-10 lg:p-16 ${
                    index % 2 !== 0 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="block w-8 h-px bg-blue-400" />
                    <span className="text-blue-500 text-[10px] font-bold tracking-[0.25em] uppercase">
                      Sports Flooring
                    </span>
                  </div>

                  <h2 className="text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-[-0.02em] text-[#0a1f44] uppercase mb-5">
                    {sport.name}
                  </h2>

                  <p className="text-[#4a5568] text-base leading-relaxed mb-8 max-w-md">
                    {sport.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {["Premium surface materials", "Certified installation team", "International standards compliance", "Custom court design & marking"].map(feat => (
                      <div key={feat} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span className="text-[#0a1f44] text-[13px] font-semibold">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="group/link inline-flex items-center gap-3 bg-[#0a1f44] hover:bg-blue-600 text-white px-7 py-3.5 text-[12px] font-bold tracking-[0.1em] uppercase transition-all duration-300 self-start"
                  >
                    Get a Quote
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
