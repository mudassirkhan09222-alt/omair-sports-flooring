import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { products } from "@/lib/data";

// Generate static params for all products
export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return {};
  return {
    title: `${product.name} | Omair Sports Flooring`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const otherProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main className="bg-white">

      {/* ── Full-screen Hero Image ── */}
      <div className="relative w-full h-[55vh] sm:h-[65vh] lg:h-[75vh] min-h-[400px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/90 via-[#0a1f44]/40 to-[#0a1f44]/20" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-0 right-0 max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-2 text-white/50 text-xs font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight size={12} />
            <span className="text-white">{product.name}</span>
          </div>
        </div>

        {/* Title overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 max-w-screen-xl mx-auto px-6 lg:px-12 pb-10">
          <span className="inline-block bg-blue-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 mb-4">
            {product.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tight">
            {product.name}
          </h1>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-14 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left — main info */}
          <div className="lg:col-span-2 space-y-10">

            {/* Description */}
            <div>
              <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Overview</p>
              <p className="text-[#4a5568] text-base sm:text-lg leading-relaxed">
                {product.fullDescription || product.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5">Key Features</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {product.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-3 bg-[#f7f9fc] px-4 py-3 border-l-2 border-blue-500">
                    <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                    <span className="text-[#0a1f44] text-sm font-semibold">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            {product.applications && (
              <div>
                <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-5">Applications</p>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="border-2 border-[#e2e8f0] text-[#0a1f44] text-xs font-semibold px-4 py-2 hover:border-blue-500 hover:text-blue-600 transition-colors duration-200"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right — specs + CTA */}
          <div className="space-y-6">

            {/* Specs table */}
            {product.specs && (
              <div className="border border-[#e2e8f0]">
                <div className="bg-[#0a1f44] px-5 py-3">
                  <p className="text-white text-xs font-bold tracking-widest uppercase">Specifications</p>
                </div>
                <div className="divide-y divide-[#e2e8f0]">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex items-start px-5 py-3.5 gap-3">
                      <span className="text-[#0a1f44] text-xs font-bold uppercase tracking-wide w-28 flex-shrink-0 mt-0.5">
                        {spec.label}
                      </span>
                      <span className="text-[#4a5568] text-xs leading-relaxed">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA box */}
            <div className="bg-blue-600 p-6 text-white">
              <h3 className="text-lg font-black uppercase tracking-tight mb-2">
                Interested in This Product?
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                Get in touch for pricing, availability and a free site assessment.
              </p>
              <Link
                href="/contact"
                className="group flex items-center justify-between gap-2 bg-white text-blue-600 px-5 py-3 text-xs font-bold tracking-widest uppercase hover:bg-blue-50 transition-colors duration-200"
              >
                Request a Quote
                <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Back */}
            <Link
              href="/products"
              className="group flex items-center gap-2 text-[#4a5568] text-xs font-bold tracking-widest uppercase hover:text-blue-600 transition-colors duration-200"
            >
              <ArrowLeft size={13} className="transition-transform duration-300 group-hover:-translate-x-1" />
              All Products
            </Link>
          </div>
        </div>

        {/* ── Other Products ── */}
        {otherProducts.length > 0 && (
          <div className="mt-20 pt-14 border-t border-[#e2e8f0]">
            <p className="text-blue-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">More Products</p>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a1f44] uppercase tracking-tight mb-8">
              You May Also Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.id}`}
                  className="group border border-[#e2e8f0] hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-[9px] font-bold tracking-widest uppercase px-2 py-1">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-[#0a1f44] text-sm font-black uppercase tracking-tight mb-1">
                      {p.name}
                    </h3>
                    <p className="text-[#4a5568] text-xs leading-relaxed line-clamp-2">{p.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
