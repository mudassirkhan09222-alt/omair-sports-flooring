"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";

const milestones = [
  { year: "2014", title: "Company Founded", desc: "Omair Sports Flooring was established with a vision to bring world-class sports surfaces to Pakistan." },
  { year: "2016", title: "First Major Project", desc: "Completed our first large-scale sports complex, delivering professional basketball and badminton courts." },
  { year: "2018", title: "Manufacturing Facility", desc: "Launched our in-house manufacturing capability for PVC and PU sports flooring systems." },
  { year: "2020", title: "Padel Court Specialists", desc: "Became one of Pakistan's leading padel court construction companies as the sport grew rapidly." },
  { year: "2022", title: "100+ Projects", desc: "Surpassed 100 completed sports facility projects across Pakistan." },
  { year: "2024", title: "International Partnerships", desc: "Established direct partnerships with leading international sports flooring manufacturers." },
];

const team = [
  { name: "Omair", role: "Founder & Director", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Technical Lead", role: "Head of Installation", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Project Manager", role: "Senior Project Manager", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
  { name: "Design Team", role: "Court Design Specialist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0a1f44] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80"
            alt="About Omair Sports Flooring"
            fill
            className="object-cover opacity-10"
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
            <span className="text-blue-300 text-[11px] font-bold tracking-[0.25em] uppercase">About Us</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[1.0] tracking-[-0.02em] text-white uppercase max-w-3xl mb-6"
          >
            Built on{" "}
            <span className="text-blue-400">Experience.</span>
            <br />
            Driven by Quality.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-white/60 text-lg max-w-xl leading-relaxed"
          >
            Over a decade of delivering professional sports flooring and court solutions across Pakistan — from a single court to full sports complexes.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Story */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/about-story.jpg"
                alt="Girl sitting on blue tennis court"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/20 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-6 bg-blue-600 text-white p-6 max-w-[200px]">
              <div className="text-3xl font-black leading-none">100%</div>
              <div className="text-blue-200 text-[11px] font-semibold tracking-[0.12em] uppercase mt-1">Client Satisfaction</div>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-blue-200 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-10 h-px bg-blue-500" />
              <span className="text-blue-600 text-[11px] font-bold tracking-[0.25em] uppercase">Our Story</span>
            </div>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black leading-[1.1] tracking-[-0.02em] text-[#0a1f44] uppercase mb-6">
              Pakistan's Premier Sports<br />
              <span className="text-blue-600">Flooring Company.</span>
            </h2>
            <div className="space-y-4 text-[#4a5568] leading-relaxed">
              <p>Founded in 2014, Omair Sports Flooring began with a simple mission: to bring world-class sports surfaces to Pakistan. What started as a supply business quickly evolved into a full-service sports facility company.</p>
              <p>Today, we provide end-to-end solutions — from importing premium international materials and operating our own manufacturing facility, to delivering certified professional installation across the country.</p>
              <p>Our portfolio spans padel clubs, tennis academies, university sports complexes, hotel facilities, housing society courts and commercial sports venues. Every project is handled with the same commitment to quality, precision and professionalism.</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["Import & Manufacturing", "Professional Installation", "Complete Court Solutions", "Project Management", "Quality Assurance", "After-Sales Support"].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span className="text-[#0a1f44] text-[13px] font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-[#f7f9fc]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="block w-10 h-px bg-blue-500" />
              <span className="text-blue-600 text-[11px] font-bold tracking-[0.25em] uppercase">Our Journey</span>
              <span className="block w-10 h-px bg-blue-500" />
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-black leading-[1.05] tracking-[-0.02em] text-[#0a1f44] uppercase">
              A Decade of <span className="text-blue-600">Excellence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group bg-white border border-[#e2e8f0] p-7 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className="text-[2.5rem] font-black text-blue-100 group-hover:text-blue-200 transition-colors leading-none mb-4">{m.year}</div>
                <h3 className="text-[#0a1f44] font-black text-[15px] uppercase tracking-[0.06em] mb-2">{m.title}</h3>
                <p className="text-[#4a5568] text-[13px] leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}
