"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

interface KineticHeroTitleProps {
  lines?: string[];
}

export default function KineticHeroTitle({
  lines = ["LOOK AT YOUR", "SYSTEMS FROM", "A DIFFERENT", "PERSPECTIVE"],
}: KineticHeroTitleProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Track scroll progress within pinned track (300vh height)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mouse motion tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 140, damping: 20 };
  const mouseXSpring = useSpring(mouseX, springConfig);

  // Scroll Transforms for Skew Angle
  const skewAngle = useTransform(scrollYProgress, [0, 0.5, 1], [-18, 0, 18]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.3, 1, 1, 0.2]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.35);
    mouseY.set((e.clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[280vh] w-full select-none"
    >
      {/* Sticky Viewport Window */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-2 sm:px-6">
        
        <motion.div
          style={{ opacity: opacityProgress }}
          className="w-full max-w-[100vw] mx-auto space-y-[-2vw] sm:space-y-[-1.5vw] md:space-y-[-1vw]"
        >
          {lines.map((lineText, idx) => {
            // Odd lines travel Left -> Right (-60vw to +60vw)
            // Even lines travel Right -> Left (+60vw to -60vw)
            const isEven = idx % 2 === 0;
            const scrollHorizontalShift = useTransform(
              scrollYProgress,
              [0, 1],
              isEven ? ["-50vw", "50vw"] : ["50vw", "-50vw"]
            );

            return (
              <div
                key={idx}
                className="flex relative w-full h-[14vw] sm:h-[11vw] md:h-[9vw] items-center justify-center pointer-events-none overflow-hidden"
              >
                {/* Left Skewed Half */}
                <div className="w-1/2 overflow-hidden text-white flex justify-end pr-1">
                  <motion.h2
                    style={{
                      x: useTransform(scrollHorizontalShift, (val) => `calc(${val} + ${mouseXSpring.get()}px)`),
                      skewX: skewAngle,
                      rotate: useTransform(skewAngle, (val) => val * 0.4),
                    }}
                    className="text-[7vw] sm:text-[5.5vw] md:text-[4.8vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap text-right"
                  >
                    <span className="inline-block">{lineText}</span>
                  </motion.h2>
                </div>

                {/* Right Skewed Half */}
                <div className="w-1/2 overflow-hidden text-zinc-500 dark:text-zinc-600 flex justify-start pl-1">
                  <motion.h2
                    style={{
                      x: useTransform(scrollHorizontalShift, (val) => `calc(${val} + ${mouseXSpring.get()}px)`),
                      skewX: useTransform(skewAngle, (val) => -val),
                      rotate: useTransform(skewAngle, (val) => -val * 0.4),
                    }}
                    className="text-[7vw] sm:text-[5.5vw] md:text-[4.8vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap text-left"
                  >
                    <span className="inline-block">{lineText}</span>
                  </motion.h2>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Floating Progress Scroll Pill */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.8, 0]),
          }}
          className="absolute bottom-10 flex items-center space-x-2 px-4 py-2 rounded-full bg-zinc-900/90 border border-white/10 text-xs text-zinc-400 font-mono pointer-events-none shadow-2xl backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>SCROLL TO TRAVERSE HORIZONTAL PERSPECTIVE</span>
        </motion.div>

      </div>
    </div>
  );
}
