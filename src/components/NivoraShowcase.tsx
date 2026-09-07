"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import TiltCard from "./TiltCard";
import ProjectModal, { ProjectData } from "./ProjectModal";

export default function NivoraShowcase() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      id: "ner-shield",
      title: "NER-SHIELD",
      subtitle: "AI Hazard Telemetry & Risk Engine",
      tag: "SIH 2026 Winner",
      description: "AI-based early warning & landslide risk monitoring system built for the North-Eastern Region (Problem Statement ID 26001). PyTorch ML models + ISRO telemetry + offline SMS gateway.",
      fullDetails: "NER-SHIELD is an end-to-end landslide prediction and risk telemetry system built for the North-Eastern Region of India (SIH Problem Statement 26001). It integrates physical failure mechanics (factor of safety calculations) with machine learning pipelines trained on ISRO NRSC landslide incidents and Kaggle datasets. In remote areas with restricted network access, the system utilizes an offline SMS gateway (TextBee API) to deliver instant warning alerts to vulnerable communities.",
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
      codeSnippet: `// PyTorch Telemetry Inference Routine
import torch
import torch.nn as nn

class LandslidePredictor(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc = nn.Sequential(
            nn.Linear(6, 64),
            nn.ReLU(),
            nn.Linear(64, 32),
            nn.ReLU(),
            nn.Linear(32, 1),
            nn.Sigmoid()
        )
    def forward(self, telemetry):
        return self.fc(telemetry)`
    },
    {
      id: "shoptrend",
      title: "ShopTrend",
      subtitle: "Next.js 16 E-Commerce Storefront & Admin",
      tag: "Full-Stack Web App",
      description: "Production Next.js 16 storefront & admin suite. Features JWT authentication (NextAuth), automated Cloudinary media asset cleanup, real-time analytics, and Cashfree gateway.",
      fullDetails: "ShopTrend is a full-stack e-commerce ecosystem built with Next.js 16 App Router, TypeScript, and Tailwind CSS. It features custom JWT authentication via NextAuth, automated Cloudinary media asset orphan cleanup background jobs, real-time transaction processing via Cashfree Payment SDK, and an extensive admin management dashboard for inventory control, shipping tracking, and order fulfillment.",
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
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user = await User.findOne({ email: credentials.email });
        if (!user || !(await bcrypt.compare(credentials.password, user.password))) {
          throw new Error("Invalid credentials");
        }
        return { id: user._id, role: user.role };
      }
    })
  ]
};`
    },
    {
      id: "weathertrack",
      title: "WeatherTrack",
      subtitle: "GIS Weather Analytics & Task Engine",
      tag: "GIS & Task Utility",
      description: "Interactive GIS weather tracking dashboard powered by OpenWeather API. Features geolocation search, weather condition fallback themes, and integrated MongoDB task scheduling.",
      fullDetails: "WeatherTrack is an interactive GIS telemetry analytics application. It allows users to search global locations, fetch real-time atmospheric metrics (humidity, pressure, wind velocity, cloud coverage), switch visual dynamic background themes based on weather codes, and schedule automated task reminders linked to MongoDB.",
      architecture: [
        "OpenWeatherMap API Integration with Dynamic Metric Caching",
        "MongoDB Task & Schedule Data Store Models",
        "Dynamic Weather Condition Theme Background Switcher",
        "Geolocation Autocomplete Search & Map Coordinate Telemetry",
      ],
      tech: ["Next.js", "TypeScript", "MongoDB", "OpenWeather API", "Leaflet GIS"],
      image: "/assets/3d_isometric_contributions.png",
      link: "https://github.com/garbita1712-ops",
    },
  ];

  return (
    <section id="work" className="py-24 px-4 sm:px-8 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="text-xs uppercase font-mono tracking-widest text-zinc-500 mb-2">
              Gallery / Featured Work
            </div>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              Digital Systems &amp; Products
            </h2>
          </div>

          <div className="flex space-x-2">
            {[
              { id: "all", label: "All Work" },
              { id: "ai-systems", label: "AI Systems" },
              { id: "web-platform", label: "Web Platforms" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  filter === tab.id
                    ? "bg-white text-black font-bold shadow-lg"
                    : "bg-zinc-900 text-zinc-400 border border-white/10 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(filter === "all" ? projects : projects.filter((p) => p.id.includes(filter.replace("-platform", "").replace("-systems", "")))).map((item) => (
            <TiltCard
              key={item.id}
              onClick={() => setSelectedProject(item)}
              className="group nivora-card p-6 rounded-3xl flex flex-col justify-between space-y-6 hover:border-white/40 transition-all duration-300"
            >
              {/* Image Preview Box */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />

                {/* Tag Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-white">
                  {item.tag}
                </span>

                {/* View Overlay Button */}
                <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-white text-black text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-1 shadow-2xl">
                  <span>↳ EXPAND DETAILS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card Meta */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs text-zinc-500 font-mono">2026</span>
                </div>
                <div className="text-xs text-zinc-400 font-medium">{item.subtitle}</div>
                <p className="text-sm text-zinc-400 line-clamp-3 pt-1">{item.description}</p>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>

      {/* Expanded Interactive Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
