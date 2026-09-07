"use client";

import { useState } from "react";
import { Cpu, Terminal, Layout, Server, Database, Palette, Check } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend Core",
      icon: Layout,
      color: "text-cyan-400",
      skills: [
        { name: "TypeScript", level: 92 },
        { name: "Next.js 16 / React", level: 95 },
        { name: "Tailwind CSS", level: 96 },
        { name: "HTML5 / CSS3", level: 98 },
      ],
    },
    {
      name: "Backend & Cloud",
      icon: Server,
      color: "text-purple-400",
      skills: [
        { name: "Node.js / Express", level: 90 },
        { name: "FastAPI (Python)", level: 88 },
        { name: "NextAuth (JWT)", level: 92 },
        { name: "MongoDB & MySQL", level: 89 },
      ],
    },
    {
      name: "AI & Data Science",
      icon: Cpu,
      color: "text-amber-400",
      skills: [
        { name: "Python / PyTorch", level: 86 },
        { name: "Generative AI Prompting", level: 90 },
        { name: "NumPy / Pandas", level: 85 },
        { name: "Scikit-Learn ML", level: 84 },
      ],
    },
    {
      name: "DevOps & Creative",
      icon: Palette,
      color: "text-blue-400",
      skills: [
        { name: "Docker & Git", level: 88 },
        { name: "Vercel Deployment", level: 94 },
        { name: "Graphic Design (Photoshop)", level: 91 },
        { name: "Video Editing (Premiere)", level: 89 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skill <span className="text-gradient">Proficiency Matrix</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Technical mastery across full-stack architecture, machine learning models, and creative media design.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 space-y-6"
              >
                <div className="flex items-center space-x-3 border-b border-white/10 pb-4">
                  <div className={`p-3 rounded-2xl bg-white/5 ${category.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between text-sm font-mono">
                        <span className="text-gray-200">{skill.name}</span>
                        <span className="text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-900 rounded-full overflow-hidden border border-white/5">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
