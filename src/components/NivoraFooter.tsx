"use client";

import { motion } from "framer-motion";

export default function NivoraFooter() {
  const ink = {
    fill: "none" as const,
    stroke: "#ffffff",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <footer className="py-16 px-4 sm:px-8 bg-zinc-950 border-t border-white/10 text-zinc-400 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-3">
            <h4 className="text-2xl font-signature text-white signature-glow">Garbita Chowdhury</h4>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Thoughtful design &amp; engineering across web platforms, AI risk models, and interactive digital products.
            </p>
          </div>

          {/* Menu */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono text-zinc-500 font-semibold">Menu</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#code" className="hover:text-white transition-colors">Code Studio</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono text-zinc-500 font-semibold">Contacts</div>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:garbita1712@gmail.com" className="hover:text-white transition-colors">garbita1712@gmail.com</a></li>
              <li><span className="text-zinc-500">KGEC, Kalyani, West Bengal</span></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono text-zinc-500 font-semibold">Socials</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/garbita1712-ops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub @garbita1712-ops
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Big Watermark SVG Signature (Preloader Signature) */}
        <div className="border-t border-white/10 pt-12 text-center select-none flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl px-4 flex justify-center opacity-80 hover:opacity-100 transition-opacity">
            <svg
              viewBox="0 0 680 180"
              className="w-full max-w-[580px]"
              aria-label="Garbita Chowdhury handwritten signature"
              style={{
                filter: "drop-shadow(0 0 12px rgba(255,255,255,0.4))",
                overflow: "visible",
              }}
            >
              <motion.path
                d="
                  M 36,128
                  C 32,90 48,46 80,36
                  C 112,25 135,46 131,80
                  C 127,108 108,122 88,116
                  C 68,110 63,90 73,74
                  C 80,62 100,60 113,70
                  C 120,76 125,72 133,77
                  C 143,84 145,100 136,110
                  C 127,120 113,116 111,102
                  C 109,88 120,76 134,79
                  C 141,81 145,94 140,105
                  C 137,113 140,121 148,121
                  C 153,113 161,104 168,104
                  C 176,104 180,114 178,123
                  C 176,130 170,132 168,124
                  C 165,116 170,107 179,104
                  C 186,101 190,92 192,80
                  C 195,59 197,34 205,22
                  C 208,15 216,17 216,31
                  C 216,54 211,84 202,105
                  C 211,96 223,92 232,101
                  C 241,110 241,126 233,133
                  C 225,140 212,137 210,123
                  C 208,109 219,96 232,101
                  C 239,104 243,95 249,95
                  C 253,100 253,111 248,116
                  C 243,121 237,118 237,110
                  C 237,102 244,95 251,95
                  C 256,80 259,48 265,27
                  C 268,16 275,18 274,32
                  C 273,53 268,83 261,104
                  C 268,95 280,90 290,95
                  C 300,100 302,118 294,128
                  C 286,138 272,135 269,121
                  C 267,107 278,95 291,97
                  C 300,99 302,114 295,126
                  C 290,136 296,144 308,148
                "
                {...ink}
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />

              <motion.path
                d="
                  M 330,118
                  C 322,102 326,68 346,55
                  C 365,42 382,58 375,88
                  C 369,114 345,128 331,120
                  C 321,113 324,97 336,84
                  C 346,73 365,71 375,82
                  C 382,89 385,80 388,64
                  C 392,43 395,23 402,12
                  C 405,7 412,9 412,23
                  C 412,44 407,72 398,92
                  C 407,83 419,79 428,88
                  C 437,97 437,114 429,121
                  C 421,128 408,125 406,111
                  C 404,97 415,83 428,88
                  C 435,92 439,82 445,82
                  C 449,87 449,98 444,104
                  C 439,109 433,107 433,99
                  C 433,90 440,83 447,83
                  C 454,83 459,93 457,103
                  C 455,110 449,112 447,104
                  C 444,96 449,86 458,83
                  C 465,80 469,70 471,58
                  C 473,37 476,12 483,1
                  C 486,-6 494,-4 494,11
                  C 494,34 489,63 480,82
                  C 489,73 501,69 510,78
                  C 519,87 519,104 511,111
                  C 503,118 490,115 488,101
                  C 486,87 497,73 510,78
                  C 517,82 521,72 527,72
                  C 531,77 531,88 526,93
                  C 521,98 515,96 515,88
                  C 515,79 522,72 529,72
                  C 536,72 541,82 539,92
                  C 537,99 531,101 529,93
                  C 526,85 531,75 540,72
                  C 547,69 554,76 552,88
                  C 548,104 538,127 528,147
                  C 521,160 510,171 501,167
                  C 494,163 496,151 506,139
                  C 516,127 533,109 549,97
                  C 560,80 572,90 577,102
                  C 582,114 579,130 568,137
                "
                {...ink}
                strokeWidth="2.8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 1.8, ease: "easeInOut" }}
              />

              <motion.path
                d="
                  M 568,137
                  C 595,149 540,165 460,170
                  C 380,175 290,178 200,172
                  C 110,166 50,154 28,148
                  C 16,145 10,152 8,158
                "
                {...ink}
                strokeWidth="2.4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.2, duration: 0.6, ease: "easeInOut" }}
              />

              <motion.path
                d="M 238,72 C 248,68 260,68 271,72"
                {...ink}
                strokeWidth="2.4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
              />
            </svg>
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
