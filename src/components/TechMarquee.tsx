"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiPytorch,
  SiPython,
  SiFastapi,
  SiTailwindcss,
  SiDocker,
  SiMongodb,
  SiReact,
  SiTypescript,
} from "react-icons/si";

export default function TechMarquee() {
  const items = [
    { text: "NER-SHIELD AI TELEMETRY", Icon: SiPytorch },
    { text: "NEXT.JS 16 APP ROUTER", Icon: SiNextdotjs },
    { text: "PYTORCH ML ENGINE", Icon: SiPytorch },
    { text: "SIH 2026 WINNER", Icon: null },
    { text: "FASTAPI & PYTHON", Icon: SiFastapi },
    { text: "TAILWIND CSS", Icon: SiTailwindcss },
    { text: "DOCKER CONTAINERIZATION", Icon: SiDocker },
    { text: "MONGODB DATABASE", Icon: SiMongodb },
    { text: "REACT 19 ARCHITECTURE", Icon: SiReact },
    { text: "TYPESCRIPT PRODUCTION", Icon: SiTypescript },
  ];

  return (
    <div className="w-full py-4 border-y border-white/10 overflow-hidden bg-zinc-950/80 backdrop-blur-md select-none font-mono text-xs sm:text-sm">
      <motion.div
        className="flex whitespace-nowrap space-x-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 22,
        }}
      >
        {/* Repeat twice for smooth loop */}
        {[...items, ...items].map((item, index) => (
          <span key={index} className="flex items-center space-x-2 text-zinc-300 font-medium tracking-wider">
            {item.Icon ? (
              <item.Icon className="w-4 h-4 text-white flex-shrink-0" />
            ) : (
              <span className="text-white font-bold">✦</span>
            )}
            <span>{item.text}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
