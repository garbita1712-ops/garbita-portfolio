"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

export default function CleanAbout() {
  return (
    <section id="about" className="py-28 px-6 sm:px-12 relative overflow-hidden bg-[#070709]">
      {/* Background ambient lighting */}
      <div
        className="absolute left-0 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="text-6xl sm:text-8xl font-signature text-white tracking-wide signature-glow">
            About
          </h2>
          <p className="text-zinc-300 text-lg max-w-lg leading-relaxed font-light">
            Full-Stack Developer &amp; Computer Science Engineer building robust web systems.
          </p>
        </motion.div>

        {/* 2-Column Seamless Grid - NO BORDERS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Biography & Executive Summary (Seamless - No Box Borders) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="uppercase tracking-widest">Biography</span>
              <span className="text-zinc-500">Kalyani / Kolkata, WB, India</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
              Crafting scalable full-stack web applications &amp; intelligent software.
            </h3>

            <p className="text-zinc-300 leading-relaxed font-light text-base sm:text-lg">
              I am <strong className="text-white font-semibold">Garbita Chowdhury</strong>, a passionate <strong className="text-white font-semibold">Full-Stack Developer</strong> and Computer Science &amp; Engineering student at <strong className="text-white font-semibold">Kalyani Government Engineering College (KGEC)</strong>. I specialize in building responsive modern frontends, scalable backend APIs, and end-to-end production web platforms.
            </p>

            <p className="text-zinc-300 leading-relaxed font-light text-base">
              My core stack covers <strong className="text-white">Next.js 16</strong>, <strong className="text-white">React 19</strong>, <strong className="text-white">TypeScript</strong>, <strong className="text-white">Node.js</strong>, <strong className="text-white">FastAPI</strong>, and modern databases (<strong className="text-white">PostgreSQL &amp; MongoDB</strong>). Winner of the prestigious <strong className="text-white font-bold">Smart India Hackathon 2026</strong> for developing <strong className="text-white">NER-SHIELD</strong> (PS ID 26001) and secured WBJEE rank <strong className="text-white">1102</strong>.
            </p>

            {/* Core Strengths Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>Next.js 16, React 19 &amp; TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>Node.js &amp; FastAPI Backends</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>PostgreSQL, MongoDB &amp; ORMs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>RESTful APIs &amp; Cloud Deployment</span>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-6 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#contact"
                className="px-7 py-3 rounded-full bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2 shadow-2xl"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                <Sparkles className="w-4 h-4 text-white animate-pulse" />
                <span>KGEC B.Tech CSE · Full-Stack Developer</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: ONLY Vector Stroke Line Art Portrait (No Extra Milestone Boxes, No Borders) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-md w-full aspect-square bg-[#070709] group">
              <img
                src="/assets/garbita_stroke_portrait.png"
                alt="Garbita Chowdhury Stroke Portrait"
                className="w-full h-full object-cover object-center filter contrast-125 brightness-100 group-hover:scale-105 transition-transform duration-700 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-40" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
