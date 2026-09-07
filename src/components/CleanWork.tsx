"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers, ExternalLink } from "lucide-react";
import ProjectModal, { ProjectData } from "./ProjectModal";
import { getTechIcon } from "./TechLogos";

export default function CleanWork() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: ProjectData[] = [
    {
      id: "ner-shield",
      title: "NER-SHIELD",
      subtitle: "AI Hazard Telemetry & Risk Engine",
      tag: "SIH 2026 Winner",
      description:
        "AI-based early warning & landslide risk monitoring system built for the North-Eastern Region (Problem Statement ID 26001). Integrates PyTorch ML inference models with ISRO telemetry datasets and an offline SMS gateway.",
      fullDetails:
        "NER-SHIELD is an end-to-end landslide prediction and risk telemetry system built for the North-Eastern Region of India (SIH Problem Statement 26001). It integrates physical failure mechanics (factor of safety calculations) with machine learning pipelines trained on ISRO NRSC landslide incidents and Kaggle datasets.",
      architecture: [
        "FastAPI REST Backend with PyTorch ML Model Inference Engine",
        "Flutter Cross-Platform Mobile Dashboard with Offline Hazard Queuing",
        "ISRO NRSC Telemetry Pipeline (Rainfall, Soil Moisture, Slope Gradient)",
        "TextBee SMS Gateway Integration for Remote Emergency Messaging",
        "ISRO NRSC & Kaggle Incident Dataset Pipeline Integration",
      ],
      tech: ["FastAPI", "PyTorch", "Flutter", "ISRO Telemetry", "SMS Gateway", "Python"],
      image: "/assets/ner_shield.png",
      link: "https://github.com/garbita1712-ops",
      codeSnippet: `# PyTorch Telemetry Inference Routine
class LandslidePredictor(nn.Module):
    def forward(self, telemetry):
        return self.fc(telemetry)`,
    },
    {
      id: "shoptrend",
      title: "ShopTrend",
      subtitle: "Next.js 16 E-Commerce Storefront & Admin",
      tag: "Full-Stack Web App",
      description:
        "Production Next.js 16 storefront & admin suite. Features JWT authentication (NextAuth), automated Cloudinary media asset cleanup, real-time analytics, and Cashfree gateway.",
      fullDetails:
        "ShopTrend is a full-stack e-commerce ecosystem built with Next.js 16 App Router, TypeScript, and Tailwind CSS.",
      architecture: [
        "Next.js 16 App Router Architecture with React 19 Server Components",
        "NextAuth JWT Authentication with Custom Middleware Guards",
        "Cloudinary Orphan Media Image Cleanup & Webhook Sync",
        "Cashfree Payment Gateway Integration & Order Health Webhooks",
        "MongoDB Mongoose Data Schemas & Aggregation Pipelines",
      ],
      tech: ["Next.js 16", "NextAuth (JWT)", "MongoDB", "Tailwind CSS", "Cashfree API", "TypeScript"],
      image: "/assets/shoptrend.png",
      link: "https://github.com/garbita1712-ops",
      codeSnippet: `// NextAuth JWT Token Refresh Routine
export const authOptions: NextAuthOptions = {
  providers: [CredentialsProvider({ async authorize(credentials) { ... } })]
};`,
    },
    {
      id: "weathertrack",
      title: "WeatherTrack GIS",
      subtitle: "GIS Telemetry & Weather Hazard Engine",
      tag: "GIS Telemetry",
      description:
        "Automated GIS hazard telemetry data pipeline integrating rainfall, soil moisture, and atmospheric pressure feeds with Python FastAPI microservices.",
      fullDetails:
        "WeatherTrack GIS processes high-resolution satellite weather data and slope stability metrics to calculate real-time hazard risk levels across geographical regions.",
      architecture: [
        "FastAPI GIS Data Pipeline & Spatial Data Querying",
        "PyTorch Hazard Risk Prediction & Incident Telemetry",
        "Automated Threshold Telemetry Alerts & Dashboard Integration",
      ],
      tech: ["Python", "FastAPI", "PyTorch", "GIS Pipelines", "REST APIs"],
      image: "/assets/ner_shield.png",
      link: "https://github.com/garbita1712-ops",
      codeSnippet: `# GIS Telemetry Pipeline
async function processTelemetry(coords, rainfall) {
    risk = await model.evaluate(coords, rainfall)
    return risk
}`,
    },
    {
      id: "devpulse",
      title: "DevPulse Studio",
      subtitle: "Interactive Code Execution Sandbox",
      tag: "Developer Tooling",
      description:
        "Production-grade Next.js 16 interactive developer studio featuring code tab switching, syntax highlighting, and live model execution preview.",
      fullDetails:
        "DevPulse Studio is a developer suite built to showcase AI model execution routines, architecture diagrams, and live production endpoints.",
      architecture: [
        "Next.js 16 App Router Architecture & React 19 Server Components",
        "TypeScript Monorepo Architecture with Strict Type Guards",
        "Framer Motion Interactive Canvas & Responsive Layout",
      ],
      tech: ["Next.js 16", "TypeScript", "React 19", "Tailwind CSS", "Framer Motion"],
      image: "/assets/shoptrend.png",
      link: "https://github.com/garbita1712-ops",
      codeSnippet: `// Interactive Studio Execution
export function executeStudio(snippet: string) {
  return evalInSandbox(snippet);
}`,
    },
  ];

  return (
    <section id="work" className="py-28 px-6 sm:px-12 relative overflow-hidden">
      {/* subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="text-6xl sm:text-8xl font-signature text-white tracking-wide signature-glow">
            Projects
          </h2>
          <p className="text-zinc-300 text-lg max-w-lg leading-relaxed font-light">
            Selected production platforms, AI hazard telemetry models, and full-stack systems.
          </p>
        </motion.div>

        {/* ── Side-by-Side 2-Column Grid Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                onHoverStart={() => setHoveredIndex(idx)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer relative rounded-3xl overflow-hidden flex flex-col justify-between"
                style={{
                  background: "linear-gradient(135deg, #0d0d11 0%, #08080a 100%)",
                  border: `1px solid ${isHovered ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.08)"}`,
                  boxShadow: isHovered
                    ? "0 0 50px rgba(255,255,255,0.06), 0 25px 50px rgba(0,0,0,0.7)"
                    : "0 4px 30px rgba(0,0,0,0.5)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0px)",
                  transition: "all 0.45s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                {/* Top Glowing White Line on Hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                    opacity: isHovered ? 1 : 0,
                  }}
                />

                {/* Card Content Body */}
                <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                          PROJECT {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-white border border-white/15"
                      >
                        {project.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-3xl font-extrabold text-white tracking-tight group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-400 font-mono mt-1">{project.subtitle}</p>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => {
                        const Icon = getTechIcon(t);
                        return (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-mono font-semibold"
                            style={{
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.1)",
                              color: "#d4d4d8",
                            }}
                          >
                            {Icon && <Icon className="w-3.5 h-3.5 text-white flex-shrink-0" />}
                            <span>{t}</span>
                          </span>
                        );
                      })}
                    </div>

                    {/* Footer Trigger Link */}
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 group-hover:text-white transition-colors">
                        Inspect Architecture &amp; Code
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-between border-t border-white/5 pt-10"
        >
          <div className="flex items-center gap-3 text-zinc-500 text-sm">
            <Layers className="w-4 h-4 text-zinc-400" />
            <span className="font-mono">4 featured systems shown</span>
          </div>
          <a
            href="https://github.com/garbita1712-ops"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 text-sm font-semibold hover:bg-white/[0.07] hover:text-white hover:border-white/20 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            All Repositories
          </a>
        </motion.div>
      </div>

      {/* Pop-up Modal Window */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
