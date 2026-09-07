"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Terminal } from "lucide-react";
import Github from "./GithubIcon";
import { getTechIcon } from "./TechLogos";

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  fullDetails: string;
  architecture: string[];
  tech: string[];
  image: string;
  link: string;
  codeSnippet?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "code">("overview");

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="relative w-full max-w-3xl nivora-card bg-zinc-950 border border-white/20 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_30px_rgba(255,255,255,0.08)] z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-zinc-900/90 border border-white/15 text-zinc-400 hover:text-white hover:border-white/30 transition-all shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Banner */}
          <div className="relative p-6 sm:p-8 w-full overflow-hidden bg-zinc-900 border-b border-white/10">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-white text-black font-extrabold text-[11px] uppercase shadow-md inline-block">
                {project.tag}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">{project.title}</h2>
              <p className="text-xs sm:text-sm text-zinc-300 font-medium">{project.subtitle}</p>
            </div>
          </div>

          {/* Modal Navigation Tabs */}
          <div className="flex border-b border-white/10 px-6 pt-2 bg-zinc-950">
            {[
              { id: "overview", label: "Overview" },
              { id: "architecture", label: "Architecture & Features" },
              { id: "code", label: "Technical Snippet" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-3 text-xs font-bold uppercase transition-colors relative ${
                  activeTab === tab.id ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 space-y-6 text-sm text-zinc-300 max-h-[60vh] overflow-y-auto">
            
            {activeTab === "overview" && (
              <div className="space-y-6">
                <p className="text-base text-zinc-200 leading-relaxed font-light">
                  {project.fullDetails}
                </p>

                <div className="space-y-3">
                  <div className="text-xs uppercase font-mono text-zinc-500">Tech Stack Matrix</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => {
                      const Icon = getTechIcon(t);
                      return (
                        <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/15 text-xs font-mono text-white">
                          {Icon && <Icon className="w-3.5 h-3.5 text-white flex-shrink-0" />}
                          <span>{t}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "architecture" && (
              <div className="space-y-4">
                <div className="text-xs uppercase font-mono text-zinc-500">Key Subsystems &amp; Mechanics</div>
                <div className="space-y-2.5">
                  {project.architecture.map((item, i) => (
                    <div key={i} className="flex items-start space-x-3 p-3 rounded-xl bg-zinc-900/60 border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-xs leading-relaxed text-zinc-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "code" && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>TERMINAL EXECUTION PREVIEW</span>
                  <Terminal className="w-4 h-4" />
                </div>
                <pre className="p-4 rounded-xl bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300 overflow-x-auto leading-relaxed">
                  {project.codeSnippet || `// Sample execution routine for ${project.title}\nasync function runPipeline() {\n  const telemetry = await fetchISROTelemetry();\n  const riskScore = await model.predict(telemetry);\n  if (riskScore > 0.75) await triggerSMSAlert(riskScore);\n}`}
                </pre>
              </div>
            )}

          </div>

          {/* Modal Footer Actions */}
          <div className="p-6 bg-zinc-950 border-t border-white/10 flex items-center justify-between">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs hover:bg-zinc-200 transition-all flex items-center space-x-2 shadow-lg"
            >
              <span>Explore GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="text-xs text-zinc-400 hover:text-white font-medium underline"
            >
              Close Window
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
