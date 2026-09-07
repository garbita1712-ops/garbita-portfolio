"use client";

import { useState } from "react";
import { ExternalLink, Layers, ShieldAlert, ShoppingBag, CloudSun, Sparkles, CheckCircle2 } from "lucide-react";
import Github from "./GithubIcon";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "ner-shield",
      category: "ai-ml",
      title: "NER-SHIELD",
      subtitle: "AI-Based Early Warning & Landslide Risk Monitoring System",
      badge: "SIH 2026 Winner",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      description:
        "Comprehensive landslide hazard prediction platform designed for the North-Eastern Region. Ingests rainfall, soil moisture, and slope gradient metrics from ISRO NRSC telemetry to calculate real-time risk scores with PyTorch models and trigger offline SMS alerts.",
      tech: ["FastAPI", "PyTorch", "Flutter", "ISRO Telemetry", "SMS Gateway", "Python"],
      icon: ShieldAlert,
      gradient: "from-amber-500/20 to-red-500/10",
      border: "border-amber-500/30",
      github: "https://github.com/garbita1712-ops",
      live: "#",
      highlights: [
        "SIH 2026 Problem Statement ID 26001 Solution",
        "Random Forest & PyTorch ML Risk Classifier",
        "Offline Emergency SMS Alert Gateway via TextBee",
      ],
    },
    {
      id: "shoptrend",
      category: "fullstack",
      title: "ShopTrend",
      subtitle: "Next.js 16 E-Commerce Storefront & Admin Portal",
      badge: "Full-Stack Web",
      badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      description:
        "Production-ready e-commerce platform built with Next.js 16 App Router. Features JWT authentication (NextAuth), real-time order tracking, automated Cloudinary media asset cleanup, Cashfree payment gateway, and full admin metrics.",
      tech: ["Next.js 16", "NextAuth (JWT)", "MongoDB", "Tailwind CSS", "Cloudinary"],
      icon: ShoppingBag,
      gradient: "from-cyan-500/20 to-blue-500/10",
      border: "border-cyan-500/30",
      github: "https://github.com/garbita1712-ops",
      live: "#",
      highlights: [
        "Automated Cloudinary Media Trash Cleanup Engine",
        "Cashfree & Razorpay Gateway Integrations",
        "Role-Based Admin Dashboard with Sales Telemetry",
      ],
    },
    {
      id: "weathertrack",
      category: "fullstack",
      title: "WeatherTrack",
      subtitle: "GIS Weather Analytics & Task Management App",
      badge: "Web App & GIS",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      description:
        "Interactive GIS weather tracking dashboard powered by OpenWeather API. Features geolocation search, weather condition fallback themes, temperature unit toggles, and integrated MongoDB task scheduling.",
      tech: ["Next.js", "TypeScript", "MongoDB", "OpenWeather API", "Tailwind CSS"],
      icon: CloudSun,
      gradient: "from-purple-500/20 to-pink-500/10",
      border: "border-purple-500/30",
      github: "https://github.com/garbita1712-ops",
      live: "#",
      highlights: [
        "Live Geolocation Weather Ingestion & Forecasts",
        "MongoDB CRUD Task & Weather Schedule Integration",
        "Dynamic Glassmorphic Theme Engine",
      ],
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Portfolio Projects</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production <span className="text-gradient">Architectures</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            High-performance web applications, AI telemetry systems, and full-stack solutions.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex justify-center space-x-2">
            {[
              { id: "all", label: "All Projects" },
              { id: "fullstack", label: "Full-Stack Web" },
              { id: "ai-ml", label: "AI / ML Systems" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  filter === btn.id
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                    : "glass-card text-gray-300 hover:text-white border border-white/10"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className={`glass-card rounded-3xl p-7 border ${project.border} bg-gradient-to-b ${project.gradient} hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between group`}
              >
                <div className="space-y-5">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white/10 text-white backdrop-blur-md">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${project.badgeColor}`}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs text-gray-400 font-mono mt-1">{project.subtitle}</div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed">{project.description}</p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start text-xs text-gray-300 space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-slate-900/80 text-[11px] font-mono text-cyan-300 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-mono text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl glass-card text-gray-300 hover:text-white hover:border-cyan-400/40 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
