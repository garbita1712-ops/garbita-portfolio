"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Github from "./GithubIcon";

export default function CleanNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["hero", "about", "work", "code", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  const navItems = [
    { id: "about", label: "About", href: "#about" },
    { id: "work", label: "Work", href: "#work" },
    { id: "code", label: "Code Studio", href: "#code" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-8 ${
          scrolled ? "top-4" : "top-0 py-6"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 flex items-center justify-between ${
            scrolled
              ? "max-w-4xl py-3 px-6 rounded-full bg-zinc-950/80 backdrop-blur-2xl border border-white/12 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.05)]"
              : "max-w-6xl py-2 px-4 bg-transparent border-b border-white/5"
          }`}
        >
          {/* Brand Logo & Signature */}
          <a href="#hero" className="flex items-center space-x-2 group select-none">
            <span className="text-2xl sm:text-3xl font-signature text-white tracking-wide signature-glow group-hover:text-zinc-200 transition-colors">
              Garbita Chowdhury
            </span>
          </a>

          {/* Desktop Floating Pill Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 relative px-3 py-1.5 rounded-full bg-zinc-900/60 border border-white/5 backdrop-blur-md select-none">
            {navItems.map((item) => {
              const isHovered = hoveredNav === item.id;
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onMouseEnter={() => setHoveredNav(item.id)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className={`relative px-4 py-1.5 text-xs font-mono font-medium transition-colors duration-200 z-10 ${
                    isActive || isHovered ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {/* Sliding Hover Glass Pill */}
                  {isHovered && (
                    <motion.div
                      layoutId="navHoverPill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.1)] -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {/* Active Indicator Dot */}
                  {isActive && !isHovered && (
                    <motion.div
                      layoutId="navActiveDot"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/garbita1712-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all border border-transparent hover:border-white/10"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="hidden sm:flex px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all items-center space-x-1.5 shadow-[0_0_20px_rgba(255,255,255,0.25)] border border-white"
            >
              <Sparkles className="w-3 h-3 text-black animate-pulse" />
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>

            {/* Clean Transparent Burger Button (No Black Box, No Blinking Dot) */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden relative p-2.5 text-white focus:outline-none z-50 bg-transparent border-0 shadow-none"
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                {/* Top line */}
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="w-5 h-0.5 bg-white rounded-full origin-center"
                />
                {/* Middle line */}
                <motion.span
                  animate={mobileOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-0.5 bg-white rounded-full"
                />
                {/* Bottom line */}
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="w-5 h-0.5 bg-white rounded-full origin-center"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Right-to-Left Side Drawer Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md md:hidden"
            />

            {/* Right-to-Left Slide-In Side Sheet Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-40 w-[82vw] max-w-sm bg-zinc-950 border-l border-white/15 backdrop-blur-3xl p-8 shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col justify-between md:hidden"
            >
              {/* Drawer Content */}
              <div className="pt-20 space-y-8">
                <div className="space-y-1 border-b border-white/10 pb-4">
                  <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Navigation</div>
                  <div className="text-2xl font-signature text-white signature-glow">Garbita Chowdhury</div>
                </div>

                {/* Nav Links List */}
                <nav className="flex flex-col space-y-3 font-mono text-sm">
                  {navItems.map((item, idx) => (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.06 }}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                        activeSection === item.id
                          ? "bg-white text-black font-bold border-white"
                          : "bg-zinc-900/70 border-white/10 text-zinc-300 hover:text-white hover:border-white/30"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer CTA */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3.5 rounded-2xl bg-white text-black font-bold text-xs flex items-center justify-center gap-2 shadow-xl"
                >
                  <Sparkles className="w-4 h-4 text-black animate-pulse" />
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="text-center font-mono text-[11px] text-zinc-500">
                  © 2026 Garbita Chowdhury
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
