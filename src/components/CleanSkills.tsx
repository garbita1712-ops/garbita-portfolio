"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPytorch,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiDocker,
  SiNodedotjs,
  SiFlutter,
  SiDart,
  SiGit,
  SiFramer,
  SiHtml5,
  SiExpress,
  SiScikitlearn,
} from "react-icons/si";

interface SkillItem {
  name: string;
  category: "Frontend" | "Backend & Cloud" | "AI & Telemetry" | "Mobile & Systems";
  desc: string;
  icon: React.ElementType;
  highlight?: boolean;
}

const ALL_SKILLS: SkillItem[] = [
  { name: "Next.js 16", category: "Frontend", desc: "App Router & Server Components", icon: SiNextdotjs, highlight: true },
  { name: "PyTorch", category: "AI & Telemetry", desc: "Hazard Telemetry & Risk Models", icon: SiPytorch, highlight: true },
  { name: "TypeScript", category: "Frontend", desc: "Strict Type Safety & Monorepos", icon: SiTypescript, highlight: true },
  { name: "FastAPI", category: "Backend & Cloud", desc: "Python REST Microservices", icon: SiFastapi, highlight: true },
  { name: "React 19", category: "Frontend", desc: "UI Architecture & Hooks", icon: SiReact },
  { name: "Python", category: "AI & Telemetry", desc: "ML Data Pipelines & GIS", icon: SiPython },
  { name: "Flutter", category: "Mobile & Systems", desc: "Cross-Platform Mobile Dashboards", icon: SiFlutter, highlight: true },
  { name: "MongoDB", category: "Backend & Cloud", desc: "NoSQL Schemas & Aggregations", icon: SiMongodb },
  { name: "Tailwind CSS", category: "Frontend", desc: "Utility-First Responsive UI", icon: SiTailwindcss },
  { name: "Node.js", category: "Backend & Cloud", desc: "Async Backend Runtime", icon: SiNodedotjs },
  { name: "Dart", category: "Mobile & Systems", desc: "Mobile Application Logic", icon: SiDart },
  { name: "Docker", category: "Mobile & Systems", desc: "Containerized Deployments", icon: SiDocker },
  { name: "Git & Actions", category: "Mobile & Systems", desc: "CI/CD & Version Control", icon: SiGit },
  { name: "Framer Motion", category: "Frontend", desc: "Smooth Fluid Animations", icon: SiFramer },
  { name: "Scikit-Learn", category: "AI & Telemetry", desc: "Factor-of-Safety Analytics", icon: SiScikitlearn },
  { name: "Express", category: "Backend & Cloud", desc: "Node.js REST Services", icon: SiExpress },
  { name: "HTML5 / CSS3", category: "Frontend", desc: "Modern Web Standards", icon: SiHtml5 },
];

const CATEGORIES = ["All Stack", "Frontend", "Backend & Cloud", "AI & Telemetry", "Mobile & Systems"] as const;

export default function CleanSkills() {
  const [activeTab, setActiveTab] = useState<(typeof CATEGORIES)[number]>("All Stack");

  const filteredSkills =
    activeTab === "All Stack" ? ALL_SKILLS : ALL_SKILLS.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-28 px-6 sm:px-12 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)" }}
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
            Skills
          </h2>
          <p className="text-zinc-300 text-lg max-w-lg leading-relaxed font-light">
            Technical stack spanning AI inference models, web platforms, and mobile systems.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex overflow-x-auto whitespace-nowrap items-center gap-2 border-b border-white/10 pb-4 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full font-mono text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === cat
                  ? "bg-white text-black font-bold shadow-lg"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Big Tech Logos Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative rounded-2xl p-6 flex flex-col justify-between overflow-hidden cursor-default"
                  style={{
                    background: "linear-gradient(135deg, #0d0d14 0%, #08080d 100%)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 50px rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
                  }}
                >
                  {/* Subtle top accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Top Row: Big Logo Container */}
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-md">
                      <Icon className="w-9 h-9 text-white group-hover:text-black transition-colors duration-300" />
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                      {skill.category}
                    </span>
                  </div>

                  {/* Bottom Row: Name & Description */}
                  <div className="mt-6 space-y-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono leading-relaxed">{skill.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-12"
        >
          {[
            { label: "Core Technologies", value: "17+" },
            { label: "Production Apps", value: "3" },
            { label: "AI Models Trained", value: "2" },
            { label: "SIH Winner Award", value: "1" },
          ].map((stat) => (
            <div key={stat.label} className="text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">{stat.value}</div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
