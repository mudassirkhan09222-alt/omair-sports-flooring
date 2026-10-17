"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/data";

// Brand icon SVGs (lucide-react v1 removed brand icons)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const sportOptions = [
  "Padel",
  "Tennis",
  "Basketball",
  "Squash",
  "Futsal",
  "Football",
  "Volleyball",
  "Badminton",
  "Multi-Sport",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    sport: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("https://formspree.io/f/xgvkwnjp", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject:       `New Quote Request — ${formData.name} (${formData.sport || "General"})`,
          Name:           formData.name,
          Company:        formData.company,
          Phone:          formData.phone,
          Email:          formData.email,
          "Sport / Type": formData.sport,
          Location:       formData.location,
          Message:        formData.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(
          (data as { errors?: { message: string }[] })?.errors?.[0]?.message ||
          "Something went wrong. Please try again or email us directly."
        );
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-[#0a1f44] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1920&q=80"
            alt="Contact Omair Sports Flooring"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
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
            <span className="text-blue-300 text-[11px] font-bold tracking-[0.25em] uppercase">
              Get in Touch
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[1.0] tracking-[-0.02em] text-white uppercase max-w-3xl mb-6"
          >
            Let's Build
            <br />
            <span className="text-blue-400">Together.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-white/60 text-lg max-w-xl leading-relaxed"
          >
            Tell us about your project. We'll get back to you with a detailed proposal and competitive quote.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-8">
                <span className="block w-10 h-px bg-blue-500" />
                <span className="text-blue-600 text-[11px] font-bold tracking-[0.25em] uppercase">
                  Request a Quote
                </span>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center border border-blue-100 bg-blue-50"
                >
                  <CheckCircle2 size={48} className="text-blue-600 mb-4" />
                  <h3 className="text-[#0a1f44] text-xl font-black uppercase tracking-tight mb-3">
                    Message Received!
                  </h3>
                  <p className="text-[#4a5568] max-w-sm leading-relaxed">
                    Thank you for reaching out. Our team will review your request and get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-[#0a1f44] mb-2">
                        Full Name <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full border-2 border-[#e2e8f0] focus:border-blue-500 px-4 py-3.5 text-[#0a1f44] text-[14px] outline-none transition-colors duration-200 placeholder:text-[#a0aec0]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-[#0a1f44] mb-2">
                        Company / Organisation
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full border-2 border-[#e2e8f0] focus:border-blue-500 px-4 py-3.5 text-[#0a1f44] text-[14px] outline-none transition-colors duration-200 placeholder:text-[#a0aec0]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-[#0a1f44] mb-2">
                        Phone <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 300 000 0000"
                        className="w-full border-2 border-[#e2e8f0] focus:border-blue-500 px-4 py-3.5 text-[#0a1f44] text-[14px] outline-none transition-colors duration-200 placeholder:text-[#a0aec0]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-[#0a1f44] mb-2">
                        Email Address <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="w-full border-2 border-[#e2e8f0] focus:border-blue-500 px-4 py-3.5 text-[#0a1f44] text-[14px] outline-none transition-colors duration-200 placeholder:text-[#a0aec0]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-[#0a1f44] mb-2">
                        Sport / Facility Type
                      </label>
                      <select
                        name="sport"
                        value={formData.sport}
                        onChange={handleChange}
                        className="w-full border-2 border-[#e2e8f0] focus:border-blue-500 px-4 py-3.5 text-[#0a1f44] text-[14px] outline-none transition-colors duration-200 bg-white"
                      >
                        <option value="">Select sport...</option>
                        {sportOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-[#0a1f44] mb-2">
                        Project Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, Area"
                        className="w-full border-2 border-[#e2e8f0] focus:border-blue-500 px-4 py-3.5 text-[#0a1f44] text-[14px] outline-none transition-colors duration-200 placeholder:text-[#a0aec0]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-[#0a1f44] mb-2">
                      Project Details / Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project — type of court, number of courts, approximate area, budget range, etc."
                      className="w-full border-2 border-[#e2e8f0] focus:border-blue-500 px-4 py-3.5 text-[#0a1f44] text-[14px] outline-none transition-colors duration-200 placeholder:text-[#a0aec0] resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-red-500 text-sm bg-red-50 border border-red-200 px-4 py-3">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-70 disabled:cursor-not-allowed text-white px-12 py-4 text-[13px] font-bold tracking-[0.12em] uppercase transition-all duration-300"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Request a Quote
                        <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info — 2 cols */}
            <div className="lg:col-span-2 space-y-10">
              {/* Contact info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="block w-10 h-px bg-blue-500" />
                  <span className="text-blue-600 text-[11px] font-bold tracking-[0.25em] uppercase">
                    Contact Info
                  </span>
                </div>

                <div className="space-y-5">
                  {/* CEO Phone */}
                  <a
                    href={`tel:${siteConfig.phoneCEO}`}
                    className="group flex items-start gap-4 p-4 border border-[#e2e8f0] hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a0aec0] mb-0.5">CEO — Call / WhatsApp</div>
                      <div className="text-[#0a1f44] font-semibold text-[14px]">{siteConfig.phoneCEO}</div>
                    </div>
                  </a>

                  {/* Manager Phone */}
                  <a
                    href={`tel:${siteConfig.phoneManager}`}
                    className="group flex items-start gap-4 p-4 border border-[#e2e8f0] hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a0aec0] mb-0.5">Manager — Call / WhatsApp</div>
                      <div className="text-[#0a1f44] font-semibold text-[14px]">{siteConfig.phoneManager}</div>
                    </div>
                  </a>

                  {/* WhatsApp CEO */}
                  <a
                    href={`https://wa.me/${siteConfig.whatsappCEO.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-4 border border-[#e2e8f0] hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a0aec0] mb-0.5">WhatsApp — CEO</div>
                      <div className="text-[#0a1f44] font-semibold text-[14px]">{siteConfig.whatsappCEO}</div>
                    </div>
                  </a>

                  {/* WhatsApp Manager */}
                  <a
                    href={`https://wa.me/${siteConfig.whatsappManager.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 p-4 border border-[#e2e8f0] hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <MessageCircle size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a0aec0] mb-0.5">WhatsApp — Manager</div>
                      <div className="text-[#0a1f44] font-semibold text-[14px]">{siteConfig.whatsappManager}</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-start gap-4 p-4 border border-[#e2e8f0] hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a0aec0] mb-0.5">Email</div>
                      <div className="text-[#0a1f44] font-semibold text-[14px] break-all">{siteConfig.email}</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 border border-[#e2e8f0]">
                    <div className="w-10 h-10 bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#a0aec0] mb-0.5">Office</div>
                      <div className="text-[#0a1f44] font-semibold text-[14px]">{siteConfig.address}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#a0aec0] mb-4">
                  Follow Us
                </div>
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
                      className="w-10 h-10 border-2 border-[#e2e8f0] hover:border-blue-500 hover:bg-blue-600 hover:text-white flex items-center justify-center text-[#4a5568] transition-all duration-300"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div>
                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#a0aec0] mb-4">
                  Location
                </div>
                <div className="relative h-56 border border-[#cbd5e1] overflow-hidden">
                  <iframe
                    src="https://maps.google.com/maps?q=Gulshan-e-Iqbal+Block+13A+Karachi+Pakistan&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Omair Sports Flooring Location"
                    className="absolute inset-0"
                  />
                </div>
                <a
                  href="https://maps.google.com/?q=Block+13-A+Gulshan-e-Iqbal+Karachi+Sindh+75300+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-600 text-[11px] font-bold tracking-widest uppercase mt-2 hover:gap-3 transition-all duration-200"
                >
                  <MapPin size={11} />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
