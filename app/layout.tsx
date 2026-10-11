import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omair Sports Flooring | Premium Sports Flooring & Court Solutions",
  description:
    "Omair Sports Flooring provides professional sports flooring, court construction, manufacturing, supply and installation solutions for Padel, Tennis, Basketball, Squash, Futsal and other sports.",
  keywords: [
    "sports flooring",
    "padel court",
    "tennis court",
    "basketball flooring",
    "squash court",
    "futsal flooring",
    "sports court Pakistan",
    "sports facility construction",
    "PVC sports flooring",
    "PU sports flooring",
    "artificial turf",
    "Omair Sports Flooring",
  ],
  authors: [{ name: "Omair Sports Flooring" }],
  openGraph: {
    title: "Omair Sports Flooring | Premium Sports Flooring & Court Solutions",
    description:
      "Professional sports flooring, court construction and complete sports facility solutions in Pakistan.",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-[#0a1f44]">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
