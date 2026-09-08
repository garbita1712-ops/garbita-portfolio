"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import HandwrittenSignature from "./HandwrittenSignature";

export default function NivoraFooter() {
  return (
    <footer className="py-10 sm:py-16 px-5 sm:px-8 bg-zinc-950 border-t border-white/10 text-zinc-400 font-sans">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 sm:gap-8">
          
          {/* Brand - Spans full 2 columns on mobile */}
          <div className="col-span-2 md:col-span-1 space-y-2 pb-2 md:pb-0 border-b border-white/5 md:border-b-0">
            <h4 className="text-2xl font-signature text-white signature-glow">Garbita Chowdhury</h4>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Full-Stack Developer crafting scalable web applications, modern frontends, and intelligent software.
            </p>
          </div>

          {/* Navigation Menu - Column 1 on mobile */}
          <div className="col-span-1 space-y-2.5">
            <div className="text-xs uppercase font-mono text-zinc-500 font-semibold tracking-wider">Navigation</div>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/#work" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/#code" className="hover:text-white transition-colors">Code Studio</Link></li>
              <li><Link href="#skills" className="hover:text-white transition-colors">Skills</Link></li>
              <li><Link href="#achievements" className="hover:text-white transition-colors">Achievements</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Socials - Column 2 on mobile */}
          <div className="col-span-1 space-y-2.5">
            <div className="text-xs uppercase font-mono text-zinc-500 font-semibold tracking-wider">Socials</div>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/garbita-chowdhury-387548383?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/garbita1712-ops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contacts - Spans 2 columns on mobile */}
          <div className="col-span-2 md:col-span-1 space-y-2.5 pt-2 md:pt-0 border-t border-white/5 md:border-t-0">
            <div className="text-xs uppercase font-mono text-zinc-500 font-semibold tracking-wider">Contact</div>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>
                <a href="mailto:garbita.chowdhury1712@gmail.com" className="hover:text-white transition-colors break-all">
                  garbita.chowdhury1712@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919007946673" className="hover:text-white transition-colors">
                  +91 9007946673
                </a>
              </li>
              <li>
                <span className="text-zinc-400">Kolkata, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Big Watermark Authentic Handwritten Signature */}
        <div className="border-t border-white/10 pt-12 text-center select-none flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl px-4 flex justify-center opacity-20 hover:opacity-45 transition-opacity duration-700">
            <HandwrittenSignature
              animate={true}
              speed={1.0}
              strokeWidth={2.4}
              className="w-full max-w-[620px]"
              color="#ffffff"
              glow={false}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 mt-6 pt-4 w-full">
            <div>© 2026 Garbita Chowdhury. All rights reserved.</div>
            <div>Built with Next.js 16, TypeScript &amp; Handwritten Aesthetics</div>
          </div>
        </div>

      </div>
    </footer>
  );
}
