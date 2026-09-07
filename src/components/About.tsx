"use client";

import { Award, BookOpen, Brain, Sparkles, Terminal, Code2, ShieldAlert, Cpu } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: "SIH Internal Hackathon Winner",
      description: "Lead developer for NER-SHIELD landslide risk monitoring system built for the Smart India Hackathon.",
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-400/30",
    },
    {
      icon: BookOpen,
      title: "B.Tech CSE @ KGEC",
      description: "Pursuing Computer Science & Engineering degree at Kalyani Govt. Engineering College with high academic distinction.",
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/30",
    },
    {
      icon: Brain,
      title: "WBJEE State Rank 1102",
      description: "Achieved top 1.5% percentile merit score in West Bengal Joint Entrance Examination.",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/30",
    },
    {
      icon: Cpu,
      title: "Full-Stack & AI Systems",
      description: "Architecting Next.js applications, JWT authentication flows, FastAPI backend telemetry, and GIS web apps.",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/30",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Excellence & Profile</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Garbita Chowdhury</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Engineering scalable web platforms, real-time AI telemetric warning engines, and user-first digital experiences.
          </p>
        </div>

        {/* Biography Content Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Main Biography Card */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <span>Executive Bio</span>
                </h3>
                <span className="text-xs font-mono text-gray-400">KGEC / Kolkata, India</span>
              </div>

              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                I am a <strong className="text-cyan-300 font-semibold">B.Tech Computer Science & Engineering</strong> student at <strong className="text-white">Kalyani Govt. Engineering College (KGEC)</strong> with expertise across Full-Stack Web development including TypeScript, Next.js, NextAuth (JWT), React, Docker, Tailwind CSS, MongoDB, Vercel, HTML5, Node.js, and Python.
              </p>

              <p className="text-gray-300 leading-relaxed text-base">
                Winner of the <strong className="text-amber-300 font-semibold">SIH Internal Hackathon</strong> for leading the development of <strong>NER-SHIELD</strong>, an AI-based early warning & landslide risk monitoring system for the North-Eastern Region. Beyond core software engineering, I bring expertise in Graphic Design, Video Editing, Generative AI, Problem Solving, and Public Speaking.
              </p>

              {/* Skills Badge Tags */}
              <div className="pt-2 flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "Next.js 16",
                  "FastAPI",
                  "PyTorch",
                  "Docker",
                  "MongoDB",
                  "Tailwind CSS",
                  "Generative AI",
                  "Video Editing",
                  "Graphic Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Signature Block */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400 font-mono">Formal Signature</div>
                <div className="text-sm font-bold text-gray-200">Garbita Chowdhury</div>
              </div>
              <img
                src="/assets/signature_dark.svg"
                alt="Garbita Chowdhury Signature"
                className="h-12 opacity-90 invert-0"
              />
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`glass-card p-6 rounded-2xl border ${item.border} hover:bg-white/[0.04] transition-all duration-300 flex items-start space-x-4`}
                >
                  <div className={`p-3 rounded-xl ${item.bg} ${item.color} flex-shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
