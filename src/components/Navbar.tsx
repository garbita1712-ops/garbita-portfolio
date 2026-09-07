"use client";

import { useState, useEffect } from "react";
import { Code2, Mail, Menu, X, Terminal, ExternalLink } from "lucide-react";
import Github from "./GithubIcon";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["hero", "about", "projects", "skills", "terminal", "contact"];
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

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "CLI Terminal", href: "#terminal" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel py-3 shadow-2xl" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white font-mono font-bold text-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
              GC
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-wider flex items-center gap-1.5">
                Garbita<span className="text-cyan-400 font-mono">.dev</span>
              </span>
              <span className="block text-[10px] text-gray-400 font-mono tracking-widest uppercase">
                Full-Stack Architect
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-1 glass-card px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com/garbita1712-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-gray-300 hover:text-cyan-400 hover:bg-white/5 border border-transparent hover:border-cyan-500/30 transition-all"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl hover:from-cyan-400 hover:to-purple-500 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 mr-2" /> Get in Touch
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-300 hover:text-white glass-card"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 px-4 pt-4 pb-6 mt-3 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href="https://github.com/garbita1712-ops"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-cyan-400 font-medium"
              >
                <Github className="w-5 h-5 mr-2" /> GitHub
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
