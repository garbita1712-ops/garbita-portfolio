"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Code, Cpu, Award, Sparkles, Terminal, ChevronDown, CheckCircle2 } from "lucide-react";
import Github from "./GithubIcon";

export default function Hero() {
  const roles = [
    "Full-Stack Architect",
    "B.Tech CSE Student @ KGEC",
    "SIH 2026 Hackathon Winner",
    "Generative AI & Machine Learning Lead",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern">
      {/* Dynamic Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Available Pill */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>KGEC Computer Science & Engineering</span>
              <span className="text-gray-500">•</span>
              <span className="text-purple-300 font-semibold">WBJEE Rank 1102</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <br />
                <span className="text-gradient">Garbita Chowdhury</span>
              </h1>
              
              {/* Typewriter Role */}
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-3xl font-mono text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">&gt;</span>
                  {displayText}
                  <span className="w-2.5 h-7 bg-cyan-400 ml-1 inline-block animate-pulse" />
                </span>
              </div>
            </div>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Computer Science student at <strong className="text-gray-200">Kalyani Govt. Engineering College</strong> specializing in production-grade Full-Stack systems, Next.js architectures, GIS telemetry, and AI/ML risk prediction models.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-base shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] transition-all transform hover:-translate-y-0.5 flex items-center space-x-2"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#terminal"
                className="px-6 py-3.5 rounded-xl glass-card text-gray-200 hover:text-cyan-300 font-mono text-sm border border-white/10 hover:border-cyan-500/40 transition-all flex items-center space-x-2"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Launch CLI Terminal</span>
              </a>

              <a
                href="https://github.com/garbita1712-ops"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl glass-card text-gray-300 hover:text-white hover:border-cyan-500/40 transition-all"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Key Metrics Stats Bar */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="glass-card p-4 rounded-2xl text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">1102</div>
                <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">WBJEE Merit Rank</div>
              </div>

              <div className="glass-card p-4 rounded-2xl text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">SIH Winner</div>
                <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">Internal Hackathon</div>
              </div>

              <div className="glass-card p-4 rounded-2xl text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">10+</div>
                <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">Full-Stack Repos</div>
              </div>
            </div>
          </div>

          {/* Avatar & Visual Badge Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Outer Neon Glow Rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500 to-purple-600 opacity-30 blur-2xl animate-pulse" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 opacity-40 blur-sm" />

              {/* Main Avatar Card Container */}
              <div className="relative w-full h-full rounded-3xl glass-card overflow-hidden p-3 border border-white/20 flex flex-col justify-between">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-900/90 flex items-center justify-center border border-white/10 group">
                  {/* Embedded SVG Portrait */}
                  <img
                    src="/assets/dark_mode.svg"
                    alt="Garbita Chowdhury Portrait"
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-80" />

                  {/* Overlay Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-panel border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-white">Garbita Chowdhury</div>
                        <div className="text-xs text-cyan-400 font-mono">CSE @ KGEC</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Technology Pills */}
              <div className="absolute -top-4 -right-4 glass-card px-3 py-1.5 rounded-xl border border-cyan-500/40 text-xs font-mono text-cyan-300 shadow-xl flex items-center space-x-1.5">
                <Code className="w-4 h-4 text-cyan-400" />
                <span>Next.js 16</span>
              </div>

              <div className="absolute -bottom-4 -left-4 glass-card px-3 py-1.5 rounded-xl border border-purple-500/40 text-xs font-mono text-purple-300 shadow-xl flex items-center space-x-1.5">
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>FastAPI / PyTorch</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <a href="#about" className="p-3 rounded-full glass-card text-gray-400 hover:text-cyan-400 transition-all animate-bounce">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
