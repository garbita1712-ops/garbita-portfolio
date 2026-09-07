"use client";

import { CheckCircle2, Code2, Cpu, ShieldCheck } from "lucide-react";

export default function NivoraCapabilities() {
  const services = [
    {
      title: "Full-Stack Development",
      category: "Our Service",
      description:
        "We create modern, responsive, and high-performing web platforms tailored to complex business requirements. Clean SSR execution across Next.js 16, TypeScript, React, and MongoDB.",
      features: ["Responsive Design", "Custom Development", "SEO Optimization", "E-Commerce Solutions"],
      icon: Code2,
    },
    {
      title: "AI & Hazard Telemetry",
      category: "Our Service",
      description:
        "Building predictive telemetry engines that process ISRO NRSC sensor metrics, calculate landslide hazard risk scores with PyTorch models, and trigger emergency offline SMS alerts.",
      features: ["PyTorch Risk Classifier", "FastAPI Endpoints", "ISRO Telemetry Ingestion", "Offline SMS Gateway"],
      icon: Cpu,
    },
    {
      title: "System Architecture",
      category: "Our Service",
      description:
        "Designing resilient system architectures featuring NextAuth JWT security, automated media cleanup hooks (Cloudinary), Docker containerization, and Cashfree payment integration.",
      features: ["JWT Auth Security", "Automated Asset Cleanup", "Docker Containerization", "Payment Gateways"],
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="capabilities" className="py-24 px-4 sm:px-8 bg-zinc-950/60 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs uppercase font-mono tracking-widest text-zinc-500">
            Capabilities / What We Do
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Thoughtful Engineering Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="nivora-card p-8 rounded-3xl space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-mono text-zinc-500">{item.category}</span>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>

                  <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                </div>

                <div className="space-y-2 pt-6 border-t border-white/10">
                  {item.features.map((feat, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-zinc-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
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
