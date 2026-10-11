"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig, sports } from "@/lib/data";

// Brand icon SVGs (lucide-react v1 removed brand icons)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Sports", href: "/sports" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Contact", href: "/contact" },
];

const featuredSports = sports.slice(0, 8);

const CURRENT_YEAR = 2026; // Update annually

export default function Footer() {
  const year = CURRENT_YEAR;

  return (
    <footer className="bg-[#050f22] text-white overflow-hidden relative">
      {/* Top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      {/* Main footer */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none mb-6 group">
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-blue-400">
                OMAIR
              </span>
              <span className="text-[20px] font-black tracking-[0.1em] uppercase text-white group-hover:text-blue-300 transition-colors duration-300">
                SPORTS FLOORING
              </span>
            </Link>

            <p className="text-white/50 text-[13px] leading-relaxed max-w-xs mb-8">
              Premium sports flooring and complete court solutions. From import
              and manufacturing to professional installation — your trusted
              sports facility partner.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: InstagramIcon, href: siteConfig.instagram, label: "Instagram" },
                { icon: FacebookIcon, href: siteConfig.facebook, label: "Facebook" },
                { icon: LinkedinIcon, href: siteConfig.linkedin, label: "LinkedIn" },
                { icon: YoutubeIcon, href: siteConfig.youtube, label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 hover:border-blue-500 hover:bg-blue-600 flex items-center justify-center text-white/40 hover:text-white transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-black tracking-[0.25em] uppercase text-white/30 mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/60 hover:text-white text-[13px] font-medium transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-blue-500 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h4 className="text-[11px] font-black tracking-[0.25em] uppercase text-white/30 mb-5">
              Sports
            </h4>
            <ul className="space-y-2.5">
              {featuredSports.map((sport) => (
                <li key={sport.id}>
                  <Link
                    href={`/sports#${sport.id}`}
                    className="group flex items-center gap-2 text-white/60 hover:text-white text-[13px] font-medium transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-blue-500 transition-all duration-300" />
                    {sport.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-black tracking-[0.25em] uppercase text-white/30 mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors duration-200 group"
                >
                  <Phone size={14} className="mt-0.5 flex-shrink-0 text-blue-400" />
                  <span className="text-[13px]">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors duration-200"
                >
                  <MessageCircle size={14} className="mt-0.5 flex-shrink-0 text-blue-400" />
                  <span className="text-[13px]">WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-white/60 hover:text-white transition-colors duration-200"
                >
                  <Mail size={14} className="mt-0.5 flex-shrink-0 text-blue-400" />
                  <span className="text-[13px] break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-blue-400" />
                  <span className="text-[13px]">{siteConfig.address}</span>
                </div>
              </li>
            </ul>

            {/* Quick CTA */}
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 text-[11px] font-bold tracking-[0.1em] uppercase transition-all duration-300"
            >
              Get a Quote
              <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-[11px] tracking-[0.08em]">
            © {year} Omair Sports Flooring. All rights reserved.
          </p>
          <p className="text-white/20 text-[11px]">
            Premium Sports Flooring & Court Solutions — Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}
