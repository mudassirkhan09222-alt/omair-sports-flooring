"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";
import CTASection from "@/components/CTASection";
import ProcessSection from "@/components/ProcessSection";

const capabilities = [
  {
    title: "Raw Material Import",
    desc: "We source premium raw materials directly from leading international manufacturers in Europe and Asia, ensuring consistent quality and competitive pricing.",
    image: "/images/manufacturing/mfg-materials.jpg",
  },
  {
    title: "In-House Production",
    desc: "Our manufacturing facility is equipped with modern machinery for producing PVC, PU and synthetic sports flooring systems to precise specifications.",
    image: "/images/manufacturing/mfg-civil-work.jpg",
  },
  {
    title: "Quality Control Lab",
    desc: "Every batch of material undergoes rigorous testing for thickness, hardness, shock absorption, slip resistance and durability before leaving our facility.",
    image: "/images/manufacturing/mfg-quality.jpg",
  },
  {
    title: "Certified Installation",
    desc: "Our installation teams are trained and certified to deliver precision installation on every surface type, from padel courts to full indoor arenas.",
    image: "/images/manufacturing/mfg-installation.jpg",
  },
];

export default function ManufacturingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0a1f44] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/manufacturing/mfg-civil-work.jpg"
            alt="Manufacturing facility"
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
            <span className="text-blue-300 text-[11px] font-bold tracking-[0.25em] uppercase">Manufacturing</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[1.0] tracking-[-0.02em] text-white uppercase max-w-3xl mb-6"
          >
            From Material to
            <br />
            <span className="text-blue-400">Finished Court.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-white/60 text-lg max-w-xl leading-relaxed"
          >
            We control the entire supply chain — from raw material import and in-house manufacturing to professional installation and project handover.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-10 h-px bg-blue-500" />
                <span className="text-blue-600 text-[11px] font-bold tracking-[0.25em] uppercase">Our Capabilities</span>
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.02em] text-[#0a1f44] uppercase mb-6">
                Complete Control.
                <br />
                <span className="text-blue-600">Uncompromised Quality.</span>
              </h2>
              <p className="text-[#4a5568] leading-relaxed mb-5">
                Unlike companies that simply resell imported products, Omair Sports Flooring operates its own manufacturing facility. This means we control material quality, production timelines and costs — delivering better results for every client.
              </p>
              <p className="text-[#4a5568] leading-relaxed">
                Our manufacturing capability combined with direct international partnerships allows us to offer the broadest range of sports flooring systems at highly competitive prices, without compromising on quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src="/images/manufacturing/mfg-materials.jpg"
                alt="Manufacturing floor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          {/* Capabilities grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group grid sm:grid-cols-2 gap-0 border border-[#e2e8f0] hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="300px"
                  />
                </div>
                <div className="p-7 flex flex-col justify-center">
                  <div className="text-2xl font-black text-blue-100 leading-none mb-3">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="text-[#0a1f44] font-black text-[15px] uppercase tracking-[0.05em] mb-3">{cap.title}</h3>
                  <p className="text-[#4a5568] text-[13px] leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSection />

      <CTASection />
    </main>
  );
}
