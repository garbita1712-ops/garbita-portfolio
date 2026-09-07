"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function NivoraHero() {
  return (
    <section id="hero" className="pt-36 pb-20 px-4 sm:px-8 relative overflow-hidden">
      
      {/* Background Radial Glow Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-purple-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Top Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-xs text-zinc-300 shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white">Made by Garbita Chowdhury</span>
          <span className="text-zinc-600">•</span>
          <span>Thoughtful engineering across web, AI &amp; systems</span>
        </motion.div>

        {/* Giant Hero Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 max-w-5xl"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05]">
            Engineering for <br />
            <span className="text-gradient-white">Everyone &amp; Impact</span>
          </h1>

          <p className="text-lg sm:text-2xl text-zinc-400 font-light max-w-3xl leading-relaxed">
            We help ideas become clear, usable, and beautifully crafted. Computer Science student at <strong className="text-white font-medium">KGEC</strong> (WBJEE Rank 1102 &amp; SIH Hackathon Winner).
          </p>
        </motion.div>

        {/* CTA Magnetic Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center gap-4 pt-4"
        >
          <MagneticButton href="#contact" dataCursor="CALL">
            <span className="px-7 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all flex items-center space-x-2 shadow-xl">
              <span>Schedule a Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </MagneticButton>

          <MagneticButton href="#work" dataCursor="WORK">
            <span className="px-7 py-4 rounded-full bg-zinc-900 border border-white/10 text-white font-semibold text-sm hover:border-white/30 transition-all">
              Explore Projects ↳
            </span>
          </MagneticButton>
        </motion.div>

        {/* Statement Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-12 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-8 text-zinc-300 text-base sm:text-xl font-light leading-relaxed">
            Focused on clarity, craft, and real-world execution. Work spans full-stack web platforms, AI landslide telemetry, and interactive digital products — all shaped through thoughtful engineering decisions and kinetic 3D rendering.
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 1 }}
              className="nivora-card p-5 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="text-3xl font-extrabold text-white">1102</div>
              <div className="text-xs text-zinc-400 font-medium mt-1">WBJEE State Rank</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.08, rotate: -1 }}
              className="nivora-card p-5 rounded-2xl border border-emerald-500/30 shadow-2xl"
            >
              <div className="text-3xl font-extrabold text-emerald-400">SIH '26</div>
              <div className="text-xs text-zinc-400 font-medium mt-1">Hackathon Winner</div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
