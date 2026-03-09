"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X } from "lucide-react";

export default function Navbar() {
  const searchParams = useSearchParams();
  const hasCoupon = !!searchParams.get("coupon");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
      transition={{ duration: 0.4 }}
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        hasCoupon ? "top-10 sm:top-11" : "top-0"
      } ${scrolled ? "glass-panel" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-end flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
              <Sparkles size={16} className="text-black" strokeWidth={2.5} />
            </div>
            <span className="font-poppins font-bold text-lg text-white tracking-tight">
              Calango{" "}
              <span className="text-gradient-animated">Studio</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-txt-secondary hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-accent to-accent-end group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#planos"
              className="btn-primary px-5 py-2.5 text-xs tracking-widest"
            >
              Assinar agora
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden pb-6 space-y-1 overflow-hidden"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-txt-secondary hover:text-white hover:bg-white/5 transition-all py-3 px-4 rounded-xl"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#planos"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center btn-primary px-5 py-3 text-xs tracking-widest mt-3"
              >
                Assinar agora
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
