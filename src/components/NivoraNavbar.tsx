"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Github from "./GithubIcon";
import MagneticButton from "./MagneticButton";

export default function NivoraNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center space-x-2 group">
          <div className="w-9 h-9 rounded-full bg-white text-black font-extrabold flex items-center justify-center text-sm shadow-md group-hover:scale-110 transition-transform">
            G
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            Nivora<span className="text-zinc-500 font-light"> / Garbita</span>
          </span>
        </a>

        {/* Floating Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 px-4 py-2 rounded-full bg-zinc-900/90 border border-white/10 backdrop-blur-xl shadow-2xl">
          {[
            { name: "Work", href: "#work" },
            { name: "Capabilities", href: "#capabilities" },
            { name: "Process", href: "#process" },
            { name: "FAQ", href: "#faq" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Magnetic Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <MagneticButton href="https://github.com/garbita1712-ops" target="_blank" rel="noopener noreferrer">
            <span className="p-2.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 transition-all flex items-center justify-center">
              <Github className="w-4 h-4" />
            </span>
          </MagneticButton>

          <MagneticButton href="#contact">
            <span className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-all flex items-center space-x-1.5 shadow-lg">
              <span>Schedule a Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-full bg-zinc-900 border border-white/10 text-white"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-3 p-6 rounded-3xl bg-zinc-900 border border-white/10 backdrop-blur-2xl space-y-4">
          <div className="flex flex-col space-y-3">
            {[
              { name: "Work", href: "#work" },
              { name: "Capabilities", href: "#capabilities" },
              { name: "Process", href: "#process" },
              { name: "FAQ", href: "#faq" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white py-1"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 py-3 rounded-xl bg-white text-black text-center font-bold text-xs"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
