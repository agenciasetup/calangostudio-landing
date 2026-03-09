"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Ferramentas", href: "#ferramentas" },
    { label: "Clientes", href: "#clientes" },
    { label: "Planos", href: "#planos" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-xl border-b border-glass"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl">🦎</span>
            <span className="font-syne font-bold text-xl text-white">
              Calango{" "}
              <span className="bg-gradient-to-r from-accent to-accent-end bg-clip-text text-transparent">
                Studio
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-txt-secondary hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#planos"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-accent to-accent-end text-black font-semibold text-sm hover:shadow-[0_0_24px_rgba(255,170,0,0.4)] transition-shadow"
            >
              Assinar agora
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden pb-4 space-y-3"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-txt-secondary hover:text-white transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#planos"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-accent to-accent-end text-black font-semibold text-sm"
            >
              Assinar agora
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
