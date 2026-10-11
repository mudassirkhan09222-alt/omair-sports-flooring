"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";
import CTASection from "@/components/CTASection";

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0a1f44] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&q=80"
            alt="Sports flooring products"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Product Range
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight tracking-tight text-white uppercase mb-5"
          >
            The Right Surface
            <br />
            <span className="text-blue-400">for Every Sport.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-white/60 text-base max-w-lg leading-relaxed"
          >
            Click any product below to see full specifications, applications
            and pricing information.
          </motion.p>
        </div>
      </section>

      {/* ── All Products Grid ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
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
                    <div className="absolute inset-0 bg-[#0a1f44]/0 group-hover:bg-[#0a1f44]/30 transition-all duration-400 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 flex items-center gap-2">
                        View Details <ArrowRight size={11} />
                      </span>
                    </div>
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1">
                      {product.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1 bg-white">
                    <h3 className="text-[#0a1f44] text-sm font-black uppercase tracking-tight mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {product.name}
                    </h3>
                    <p className="text-[#4a5568] text-[13px] leading-relaxed mb-4 flex-1">
                      {product.description}
                    </p>

                    <div className="grid grid-cols-2 gap-1.5 mb-4">
                      {product.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                          <span className="text-[11px] text-[#4a5568] font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-blue-600 text-[11px] font-bold tracking-widest uppercase border-t border-[#e8edf5] pt-3 mt-auto group-hover:gap-3 transition-all duration-300">
                      View Full Details
                      <ArrowRight size={11} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why our products */}
      <section className="py-20 bg-[#f7f9fc]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Why Our Materials
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight text-[#0a1f44] uppercase">
              Quality You Can <span className="text-blue-600">Trust.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "01", title: "International Brands",    desc: "We source directly from leading manufacturers in Europe and Asia." },
              { n: "02", title: "Certified Materials",     desc: "All products meet relevant international sports federation standards." },
              { n: "03", title: "Local Manufacturing",     desc: "In-house production for quality control and faster delivery." },
              { n: "04", title: "Full Warranty",           desc: "Product and installation warranties on every project we complete." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="bg-white border border-[#e2e8f0] p-6 hover:border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl font-black text-blue-100 leading-none mb-3">{item.n}</div>
                <h3 className="text-[#0a1f44] font-black text-sm uppercase tracking-wide mb-2">{item.title}</h3>
                <p className="text-[#4a5568] text-[13px] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
