"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HandwrittenSignature from "./HandwrittenSignature";

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Total animation runtime before smooth fadeout
    const timer = setTimeout(() => {
      setDone(true);
      setTimeout(onFinish, 700);
    }, 2800);

    return () => {
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 min-h-[100dvh] w-screen z-[999] flex flex-col items-center justify-center bg-[#070709] select-none overflow-hidden px-4"
        >
          {/* Ambient soft glow background */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[220px] sm:h-[300px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.08) 0%, rgba(147,197,253,0.03) 40%, transparent 80%)",
            }}
          />

          {/* Centerpiece: Real Handwritten Straight White Signature Only */}
          <div className="relative flex flex-col items-center justify-center w-full max-w-[680px] px-2">
            <HandwrittenSignature
              animate={true}
              speed={1.0}
              color="#ffffff"
              strokeWidth={2.8}
              glow={true}
              className="w-full max-w-[640px]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
