"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

export default function YannickProjects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      id: "ner-shield",
      name: "NER-SHIELD",
      year: "2026",
      award: "SIH 2026 Internal Winner",
      info: "AI-based early warning & landslide risk monitoring system for the North-Eastern Region (Problem Statement ID 26001). Ingests rainfall, soil moisture, and slope gradient telemetry from ISRO NRSC to calculate real-time risk scores with PyTorch models and trigger offline SMS alerts.",
      tech: "FastAPI, PyTorch, Flutter, ISRO Telemetry, SMS Gateway, Python",
      link: "https://github.com/garbita1712-ops",
      image: "/assets/3d_isometric_contributions.png",
    },
    {
      id: "shoptrend",
      name: "SHOP TREND",
      year: "2026",
      award: "Production Full-Stack App",
      info: "Production-grade e-commerce storefront & admin suite built with Next.js 16 App Router. Features JWT authentication (NextAuth), automated Cloudinary media asset cleanup, real-time analytics, and Cashfree gateway.",
      tech: "Next.js 16, NextAuth (JWT), MongoDB, Tailwind CSS, Cashfree API",
      link: "https://github.com/garbita1712-ops",
      image: "/assets/dark_mode.svg",
    },
    {
      id: "weathertrack",
      name: "WEATHER TRACK",
      year: "2026",
      award: "GIS Telemetry Web App",
      info: "Interactive GIS weather tracking dashboard powered by OpenWeather API. Features geolocation search, weather condition fallback themes, temperature unit toggles, and integrated MongoDB task scheduling.",
      tech: "Next.js, TypeScript, MongoDB, OpenWeather API, Leaflet GIS",
      link: "https://github.com/garbita1712-ops",
      image: "/assets/dark_mode.svg",
    },
  ];

  return (
    <section id="projects" className="w-full py-12 px-4 sm:px-8 border-b border-current font-mono">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-current pb-4">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-accent">
            [ /&gt; FEATURED PRODUCTION PROJECTS ]
          </h2>
          <span className="text-xs opacity-70">2024 — 2026</span>
        </div>

        {/* Projects List in Yannick Gregoire Terminal Box Format */}
        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative ascii-box p-6 sm:p-8 hover:border-accent transition-colors duration-200"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Project Title Block */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="text-xs opacity-70">
                    [ /&gt; PR. NAME &nbsp; {project.year} &nbsp; ⮐ ]
                  </div>
                  
                  <div className="p-4 bg-accent-subtle border border-current">
                    <h3 className="text-3xl font-extrabold uppercase tracking-tight text-accent">
                      {project.name}
                    </h3>
                    <div className="text-xs font-bold mt-1 text-current opacity-90">
                      {project.award}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase underline hover:text-accent transition-colors pt-2"
                  >
                    <span>VISIT REPOSITORY &nbsp; →</span>
                  </a>
                </div>

                {/* Project Info Block */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="text-xs opacity-70">
                    [ /&gt; INFO ]
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed">
                    {project.info}
                  </p>

                  <div className="pt-2 text-xs font-mono">
                    <span className="opacity-70 font-bold">TECH: </span>
                    <span className="text-accent font-semibold">{project.tech}</span>
                  </div>
                </div>

              </div>

              {/* Floating Image Preview on Hover (Yannick Gregoire signature style) */}
              {hoveredProject === project.id && (
                <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-64 h-40 ascii-box bg-black/95 p-2 shadow-2xl z-20 pointer-events-none animate-in fade-in duration-200">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover border border-current"
                  />
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black text-[10px] text-accent border border-accent">
                    PREVIEW
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
