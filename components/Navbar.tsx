"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Sports", href: "/sports" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-white shadow-[0_2px_30px_rgba(0,32,96,0.10)] border-b border-blue-50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <img
                src="/OSF-LOGO.png"
                alt="Omair Sports Flooring"
                className={`h-20 w-auto object-contain transition-all duration-300 ${scrolled || !isHome ? "" : "brightness-0 invert"}`}
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200 group ${
                      scrolled || !isHome
                        ? isActive
                          ? "text-blue-600"
                          : "text-[#0a1f44] hover:text-blue-600"
                        : isActive
                        ? "text-blue-300"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-[2px] bg-blue-500 transition-transform duration-300 origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className={`hidden lg:inline-flex items-center gap-2 px-6 py-2.5 text-[12px] font-bold tracking-[0.12em] uppercase border-2 transition-all duration-300 ${
                  scrolled || !isHome
                    ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-[#0a1f44]"
                }`}
              >
                Get a Quote
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 transition-colors duration-200 ${
                  scrolled || !isHome ? "text-[#0a1f44]" : "text-white"
                }`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 top-20 z-40 bg-white shadow-2xl border-t border-blue-50 lg:hidden"
          >
            <div className="flex flex-col py-6 px-6 gap-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-3 px-4 text-[13px] font-bold tracking-[0.1em] uppercase border-b border-blue-50 transition-colors duration-200 ${
                        isActive
                          ? "text-blue-600 bg-blue-50"
                          : "text-[#0a1f44] hover:text-blue-600 hover:bg-blue-50/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  className="block w-full text-center py-3.5 bg-blue-600 text-white text-[13px] font-bold tracking-[0.12em] uppercase hover:bg-blue-700 transition-colors duration-200"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
