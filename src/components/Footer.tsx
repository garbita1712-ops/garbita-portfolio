"use client";

import { ArrowUp, Heart, Code2 } from "lucide-react";
import Github from "./GithubIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white font-mono font-bold text-base shadow-lg">
              GC
            </div>
            <div>
              <div className="text-base font-bold text-white">Garbita Chowdhury</div>
              <div className="text-xs text-gray-400 font-mono">B.Tech CSE @ Kalyani Govt. Engineering College</div>
            </div>
          </div>

          {/* Copyright & Stack */}
          <div className="text-center text-xs text-gray-400 space-y-1">
            <div>
              © {new Date().getFullYear()} Garbita Chowdhury. All rights reserved.
            </div>
            <div className="flex items-center justify-center space-x-1 font-mono text-[11px] text-gray-500">
              <span>Crafted with</span>
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Next.js 16, Tailwind CSS & Framer Motion</span>
            </div>
          </div>

          {/* Action links & Scroll to Top */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/garbita1712-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-white hover:border-cyan-500/40 transition-all"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl glass-card text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
