"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function NivoraProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Idea & Discovery",
      desc: "We analyze project requirements, ISRO telemetry data points, and technical goals to outline a clear architecture path.",
      deliverables: ["Telemetry Parameter Specs", "Database Schema Mapping", "API Endpoint Specs"],
    },
    {
      num: "02",
      title: "Architecture & Design",
      desc: "Designing system database schemas, REST APIs, NextAuth JWT flows, and responsive UI components.",
      deliverables: ["Next.js 16 App Router Setup", "PyTorch Model Training Pipeline", "Tailwind CSS Token System"],
    },
    {
      num: "03",
      title: "Full-Stack Execution",
      desc: "Engineered using Next.js 16, TypeScript, PyTorch, and FastAPI with robust test validation.",
      deliverables: ["NextAuth JWT Middleware", "Offline SMS Gateway Integration", "Cloudinary Cleanup Hooks"],
    },
    {
      num: "04",
      title: "Production Launch",
      desc: "Deployment to production servers (Vercel/Docker), domain whitelisting, and live performance monitoring.",
      deliverables: ["Vercel / Docker Container Deployment", "Cashfree Webhook Integration", "Production Smoke Testing"],
    },
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-8 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="text-xs uppercase font-mono tracking-widest text-zinc-500">
            How It Works / Workflow
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            From Idea to Launch
          </h2>
          <p className="text-zinc-400 text-lg">
            Crafting Your Next-Gen Digital Success Path
          </p>
        </div>

        {/* Step Timeline Grid with Progress Line */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const isActive = activeStep === index;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer nivora-card p-6 rounded-3xl space-y-6 flex flex-col justify-between transition-all duration-300 ${
                  isActive ? "border-white bg-zinc-900 shadow-2xl" : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`text-4xl font-extrabold font-mono ${isActive ? "text-white" : "text-zinc-600"}`}>
                      {step.num}
                    </span>
                    {isActive && (
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase font-semibold">Deliverables:</div>
                  {step.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-center space-x-1.5 text-[11px] text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="line-clamp-1">{deliv}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
