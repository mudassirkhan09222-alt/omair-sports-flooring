import Hero from "@/components/Hero";
import CompanyIntro from "@/components/CompanyIntro";
import Stats from "@/components/Stats";
import SportsSection from "@/components/SportsSection";
import ProductsSection from "@/components/ProductsSection";
import ManufacturingSection from "@/components/ManufacturingSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanyIntro />
      <Stats />
      <SportsSection />
      <ProductsSection />
      <ManufacturingSection />
      <WhyChooseUs />
      <ProjectsSection />
      <ProcessSection />
      <Testimonials />
      <CTASection />
    </main>
  );
}
