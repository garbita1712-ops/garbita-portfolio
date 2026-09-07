"use client";

import { useState } from "react";

export default function YannickHero() {
  const asciiArt = `
  ,,,,,,,,,,,,,,..,,,,,,..................................................,+++,++++++++
  ,,,,,,,,,,,,,,,.,,,..,,,...................................++++++++++,++++++++++,+++
  ,,,,,,,,,,,,,,,,.,.,,.....................................+++++++++++++++++++++++++++
  ,,.           ,,                        ,,,,,,,,,,,,,,,,.............................
  +++++,++,       ==c==+,,.                .,,,,,,,,,,,,,,,,...........................
  +++++++,++,      cccc=c+,..               ,,,,,,,,,,,,,,,,...........................
  +++++++,+++++     +cx//c==c,.              .,,,,,,,.,,,,..,,,,.......................
  ++++++++++++++++   .=/x/c==c++,.            ,,,,,,,,,,,,,.,,,,,......................
  ++++++++++++++++    +=////==c+,.             ,,,,,,,,,,,,,,,.,,......................
  ++++++++++++++++.   .,c///c==+..              .,,,,,,,,,,,,,,,.,.....................
  +++++++++++++++++    .,c////=.                 ,,,,,,,,,,,,,,,.,,....................
  ++++++++++++++++++   ..c///c.                  .,,,,,,,,,,,.,,,.,,...................
  +++++++++++++++++++   ,///c,..         ,,       ,,,,,,,,,,,,,,,,,,,,............,....
  ++++++++++++++++++++  =x/c=+.          ==       ,,,,,,,,,,,,,,,,,,,,,,,,,....,,,,....
  ++++++++++++++++++++ ,xx/c+..+.       ,cc,      ,,,,,,,,,,,,,,,,,,,,.......,,,,,,....
  +++++++++++++++++++++///c+++c,.    ,cc==+       ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.,...,
  +++++++++++++++++++++c///=+,.     ,ccc=,        ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ++++++++++++++++++++c///=c+...     /c=.        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ++++++++++++++++++++c//cc=+,     ,   .        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  +++++++++++++++++++ccccc=+.     .+.          .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  +++++++++++++++++++,,cc=c,,    . .            ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  +++++++++++++++++++....++++,...               ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  +++++++++++++++++++++....+,                   .,,,,,,,,,+,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  +++++++++++++++++++++++                     ,,,+++++++,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
  ++++++++++++++++++++++++                  .+++++,++++,,,,,,,,,+,,,,,,,,,,,,,,,,,,,,,,
  +++++++++++++++++++++++++               ,+,,++++++++++++,,,++,,,,,,,,,,,,,,,,,,,,,,,,
  ++++++++++++++++++++++++++            ,++++++++++++++++,,++++,+,,,,,+,,,,,,,,,,,,,,,,
  +++++++++++++++++++++++++++          ,+++++++++++++++++++++++,+,,,,,,,,,,,,,,,,,,,,,,
  ++++++++++++++++++++++++++++        ,++++++++++++++++++,++++++++,,,,,,,,,,,,,,,,,,,,,
  +++++++++++++++++++++++++++++      +++++++++++++++++++,++++++++,+,,,,,,,,,,,,,,,,,,,,
  ++++++++++++++++++++++++++++++    ,++++++++++++++++++++,+++++++++++,,,+++,+,,,,,,,,,,
  +++++++++++++++++++++++++++++++  +++++++++++++++++++++++++++++++++,+++++++,,,,,,,,,,,
  `;

  return (
    <section id="biography" className="w-full py-12 px-4 sm:px-8 border-b border-current font-mono">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: ASCII Art Representation */}
        <div className="lg:col-span-6 overflow-x-auto">
          <pre className="text-[9px] sm:text-[11px] leading-[1.05] tracking-[1px] select-none font-mono opacity-90 font-bold text-accent">
            {asciiArt}
          </pre>
        </div>

        {/* Right Column: Creative Developer Statement & Biography */}
        <div className="lg:col-span-6 space-y-6 pt-2">
          
          <div className="space-y-2 border-b border-current pb-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider">
              / FULL-STACK ARCHITECT & CREATIVE DEVELOPER
            </h2>
            <div className="text-sm opacity-80">
              Kalyani / Kolkata, West Bengal, India
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base leading-relaxed">
            <p className="font-bold text-accent">
              Calm over chaos • Experimental over predictable • Learning over consuming
            </p>
            
            <p>
              B.Tech Computer Science & Engineering student at <strong>Kalyani Govt. Engineering College (KGEC)</strong> with expertise across Full-Stack Web development including TypeScript, Next.js 16, NextAuth (JWT), React, Docker, Tailwind CSS, MongoDB, Vercel, HTML5, Node.js, and Python.
            </p>

            <p>
              Winner of the <strong>SIH Internal Hackathon</strong> for leading the development of <strong>NER-SHIELD</strong>, an AI-based early warning & landslide risk monitoring system for the North-Eastern Region.
            </p>

            <p className="opacity-90">
              Pairs with innovative teams to build handcrafted web platforms, GIS telemetric warning engines, and high-performance full-stack architectures.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-current text-center font-mono">
            <div className="ascii-box p-3">
              <div className="text-xl font-bold text-accent">1102</div>
              <div className="text-[11px] opacity-70 uppercase">WBJEE Rank</div>
            </div>
            <div className="ascii-box p-3">
              <div className="text-xl font-bold text-accent">SIH '26</div>
              <div className="text-[11px] opacity-70 uppercase">Hackathon Winner</div>
            </div>
            <div className="ascii-box p-3">
              <div className="text-xl font-bold text-accent">KGEC</div>
              <div className="text-[11px] opacity-70 uppercase">B.Tech CSE</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
