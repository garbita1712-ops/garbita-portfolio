"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";

interface GalleryImage {
  id: string;
  title: string;
  subtitle: string;
  src: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "stroke-portrait",
    title: "Executive Profile Portrait",
    subtitle: "Full-Stack Engineer & AI Telemetry Architect",
    src: "/assets/garbita_stroke_portrait.png",
  },
  {
    id: "ai-code",
    title: "AI Inference & Neural Telemetry",
    subtitle: "PyTorch Factor-of-Safety Landslide Risk Engine",
    src: "/assets/stroke_ai_code.png",
  },
  {
    id: "sih-winner",
    title: "SIH 2026 Championship Trophy",
    subtitle: "1st Place Winner (Problem Statement 26001)",
    src: "/assets/stroke_sih_winner.png",
  },
  {
    id: "architecture",
    title: "System Architecture & Developer Studio",
    subtitle: "Next.js 16, REST Microservices & Cloud Infrastructure",
    src: "/assets/stroke_architecture.png",
  },
];

export default function CleanGallery() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-28 px-6 sm:px-12 relative overflow-hidden bg-[#070709]">
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
            Visual Studio
          </h2>
          <p className="text-zinc-300 text-lg max-w-lg leading-relaxed font-light">
            Monochrome line-art stroke series depicting AI inference, system design, and hackathon milestones.
          </p>
        </motion.div>

        {/* Pure Image Gallery Grid - No Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GALLERY_IMAGES.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/3] bg-[#050508]"
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center filter contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700 opacity-90"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Hover Badge Info */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between transition-all duration-300">
                <div className="space-y-1">
                  <div className="text-sm font-bold text-white group-hover:text-white transition-colors">
                    {item.title}
                  </div>
                  <div className="text-xs font-mono text-zinc-400 font-light">
                    {item.subtitle}
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-3xl overflow-hidden bg-[#0a0a0e] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/70 text-white hover:bg-white hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-4 sm:p-8 flex items-center justify-center bg-black/60 overflow-hidden flex-1">
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="max-h-[75vh] w-auto object-contain rounded-2xl filter contrast-125"
                />
              </div>

              <div className="p-6 bg-[#0e0e12] flex items-center justify-between font-mono text-xs text-zinc-400">
                <div>
                  <div className="text-base font-bold text-white font-sans">{activeImage.title}</div>
                  <div className="text-xs text-zinc-400 font-mono mt-0.5">{activeImage.subtitle}</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[11px]">
                  Stroke Line-Art Series
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
