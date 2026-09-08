"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Download } from "lucide-react";

export default function CleanHero() {
  return (
    <section id="hero" className="min-h-[100dvh] pt-20 sm:pt-32 pb-12 sm:pb-10 px-5 sm:px-12 flex flex-col justify-end sm:justify-between relative overflow-hidden bg-[#070709]">

      {/* Background Garbita Face Portrait - Prominent sketch face with soft edge blending on desktop */}
      <div
        className="absolute top-0 right-0 left-0 sm:left-auto w-full sm:w-[54vw] lg:w-[48vw] h-[65vh] sm:h-full pointer-events-none z-0 opacity-70 sm:opacity-50 overflow-hidden flex items-start sm:items-center justify-center sm:justify-end"
        style={{
          maskImage: "radial-gradient(ellipse at 60% 40%, black 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at 60% 40%, black 70%, transparent 100%)",
        }}
      >
        <img
          src="/assets/garbita_face.jpg"
          alt="Garbita Background Portrait"
          className="w-full h-full object-cover object-[50%_5%] sm:object-[75%_10%] scale-125 sm:scale-105 transform-gpu origin-top filter contrast-125 brightness-85 sm:brightness-75 mix-blend-screen"
        />
        {/* Soft Edge Blending: Minimal left blend on desktop to keep portrait clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070709]/85 via-transparent to-[#070709] sm:bg-gradient-to-r sm:from-[#070709] sm:via-transparent sm:to-transparent" />
      </div>

      {/* Top Header Dark Shadow Gradient Overlay for Mobile */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#070709]/95 via-[#070709]/60 to-transparent pointer-events-none z-[1] sm:hidden" />

      {/* Hero Foreground Content - Centered vertically on desktop (sm:my-auto), elevated at bottom for mobile (mt-auto pb-12) */}
      <div className="max-w-7xl mx-auto w-full space-y-4 sm:space-y-8 relative z-10 mt-auto sm:my-auto pb-12 sm:pb-0">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-7xl lg:text-8xl text-white leading-[1.1] max-w-3xl font-extrabold tracking-tight"
        >
          Full-Stack Developer.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-300 text-base sm:text-2xl font-light leading-relaxed max-w-2xl"
        >
          Building scalable full-stack web applications, modern responsive frontends, and high-performance backend architectures.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4"
        >
          <a
            href="#work"
            className="px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-white text-black text-xs sm:text-sm font-bold hover:bg-zinc-200 transition-colors flex items-center space-x-2 shadow-2xl"
          >
            <span>View Featured Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="#code"
            className="px-6 py-3 sm:px-7 sm:py-3.5 rounded-full border border-zinc-700 bg-zinc-950/80 backdrop-blur-md text-zinc-300 text-xs sm:text-sm font-semibold hover:text-white hover:border-zinc-500 transition-colors flex items-center space-x-2 shadow-xl"
          >
            <span>Code Studio</span>
            <Terminal className="w-4 h-4 text-zinc-300" />
          </a>

          <a
            href="https://res.cloudinary.com/dlrlet9fg/image/upload/v1788843369/resume_Garbita-1_vipyo9.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 sm:px-7 sm:py-3.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-xs sm:text-sm font-semibold hover:bg-white/10 hover:border-white/40 transition-colors flex items-center space-x-2 shadow-xl font-mono cursor-pointer"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <div className="max-w-7xl mx-auto w-full pt-4 sm:pt-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center space-x-2 text-[11px] sm:text-xs font-mono text-zinc-400"
        >
          <span>Scroll down to inspect featured systems</span>
          <ArrowDown className="w-3.5 h-3.5 text-zinc-400 animate-bounce" />
        </motion.div>
      </div>

    </section>
  );
}
