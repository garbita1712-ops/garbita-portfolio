"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

export default function KineticSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const lines = [
    "LOOK AT YOUR",
    "PRODUCTS FROM",
    "A DIFFERENT",
    "PERSPECTIVE",
  ];

  // Track scroll progress within 250vh pinned track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mouse motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 18 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Dynamic Scroll Transforms
  const skewAngle = useTransform(scrollYProgress, [0, 0.5, 1], [-14, 0, 14]);
  const rotateYAngle = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);
  const containerScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.05, 0.95]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.4, 1, 1, 0.4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.25);
    mouseY.set((e.clientY - centerY) * 0.25);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[250vh] w-full select-none border-t border-white/10"
    >
      {/* Sticky Locked Window Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
        
        {/* Badge Header */}
        <div className="text-xs uppercase font-mono tracking-widest text-zinc-500 mb-6 flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span>02 / 3D Kinetic Perspective Engine</span>
        </div>

        {/* 3D Kinetic Container */}
        <motion.div
          style={{
            scale: containerScale,
            opacity: textOpacity,
            rotateY: rotateYAngle,
          }}
          className="w-full max-w-6xl mx-auto space-y-[-1.5vw] sm:space-y-[-1vw] py-8 rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Inner Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-emerald-500/5 pointer-events-none" />

          {lines.map((lineText, idx) => {
            const isEven = idx % 2 === 0;
            // Kept within safe [-15%, +15%] bounds so text NEVER leaves the viewport!
            const scrollHorizontalShift = useTransform(
              scrollYProgress,
              [0, 1],
              isEven ? ["-12%", "12%"] : ["12%", "-12%"]
            );

            return (
              <div
                key={idx}
                className="flex relative w-full h-[12vw] sm:h-[9.5vw] md:h-[7.5vw] items-center justify-center pointer-events-none"
              >
                {/* Left Half: Gold / Emerald Kinetic Highlight (#FFD700 style) */}
                <div className="w-1/2 overflow-hidden text-amber-400 dark:text-amber-300 flex justify-end pr-1">
                  <motion.h2
                    style={{
                      x: useTransform(scrollHorizontalShift, (val) => `calc(${val} + ${mouseXSpring.get()}px)`),
                      skewX: skewAngle,
                      rotate: useTransform(skewAngle, (val) => val * 0.4),
                    }}
                    className="text-[6.5vw] sm:text-[5vw] md:text-[4.2vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap text-right drop-shadow-md"
                  >
                    <span className="inline-block">{lineText}</span>
                  </motion.h2>
                </div>

                {/* Right Half: Deep Obsidian / White Contrast */}
                <div className="w-1/2 overflow-hidden text-zinc-100 flex justify-start pl-1">
                  <motion.h2
                    style={{
                      x: useTransform(scrollHorizontalShift, (val) => `calc(${val} + ${mouseXSpring.get()}px)`),
                      skewX: useTransform(skewAngle, (val) => -val),
                      rotate: useTransform(skewAngle, (val) => -val * 0.4),
                    }}
                    className="text-[6.5vw] sm:text-[5vw] md:text-[4.2vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap text-left"
                  >
                    <span className="inline-block">{lineText}</span>
                  </motion.h2>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Floating Scroll Cue Pill */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.8, 0]),
          }}
          className="absolute bottom-10 flex items-center space-x-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-white/10 text-xs text-zinc-300 font-mono pointer-events-none shadow-2xl backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>SCROLL TO SCRUB 3D KINETIC PERSPECTIVE</span>
        </motion.div>

      </div>
    </section>
  );
}
