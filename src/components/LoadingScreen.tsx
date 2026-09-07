"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 6;
      });
    }, 55);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#040406] flex flex-col justify-between p-8 sm:p-12 text-white font-mono select-none overflow-hidden"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between text-xs text-zinc-400 uppercase tracking-widest border-b border-white/10 pb-4">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>GARBITA CHOWDHURY / PEACHWEB ENGINE</span>
            </span>
            <span>2026 EDITION</span>
          </div>

          {/* Center Lottie Animation & Progress Counter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto w-full my-auto">
            
            {/* Lottiefiles Interactive Player Container */}
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative flex items-center justify-center">
              <DotLottiePlayer
                src="/assets/loading.lottie"
                autoplay
                loop
                className="w-full h-full drop-shadow-[0_0_35px_rgba(245,158,11,0.5)]"
              />
            </div>

            {/* Telemetry Counter & System Status */}
            <div className="space-y-4 text-center md:text-left">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 text-white font-black flex items-center justify-center text-2xl shadow-2xl mx-auto md:mx-0">
                G
              </div>
              
              <div className="text-6xl sm:text-9xl font-black font-sans tracking-tight bg-gradient-to-r from-white via-zinc-200 to-amber-300 bg-clip-text text-transparent">
                {progress}%
              </div>

              <div className="text-xs sm:text-sm text-zinc-400 font-mono tracking-wider max-w-md">
                {progress < 30 && "INITIALIZING PEACHWEB 3D CANVAS MATRIX..."}
                {progress >= 30 && progress < 70 && "LOADING LOTTIE ANIMATIONS & PYTORCH ENGINE..."}
                {progress >= 70 && progress < 100 && "CALCULATING KINETIC 3D PERSPECTIVE..."}
                {progress === 100 && "SYSTEM READY."}
              </div>
            </div>

          </div>

          {/* Progress Bar Line */}
          <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden border border-white/10">
            <motion.div
              className="bg-gradient-to-r from-amber-400 via-rose-500 to-purple-500 h-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
