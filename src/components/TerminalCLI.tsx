"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, RefreshCw } from "lucide-react";

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export default function TerminalCLI() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-cyan-300">
          <div>🚀 Welcome to Garbita Chowdhury's Interactive Profile Terminal v2.5</div>
          <div>Type <span className="text-yellow-400 font-bold">'help'</span> to see available commands or click quick action buttons below.</div>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    let res: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        res = (
          <div className="space-y-1 text-gray-300">
            <div className="text-cyan-400 font-bold">Available Commands:</div>
            <div><span className="text-yellow-400 w-24 inline-block font-mono">about</span> - Executive profile & biography</div>
            <div><span className="text-yellow-400 w-24 inline-block font-mono">skills</span> - Full-stack & AI skills matrix</div>
            <div><span className="text-yellow-400 w-24 inline-block font-mono">projects</span> - Production repos & SIH hackathon winner</div>
            <div><span className="text-yellow-400 w-24 inline-block font-mono">education</span> - KGEC academic degree & WBJEE merit rank</div>
            <div><span className="text-yellow-400 w-24 inline-block font-mono">contact</span> - Email, GitHub & LinkedIn links</div>
            <div><span className="text-yellow-400 w-24 inline-block font-mono">clear</span> - Clear terminal buffer</div>
          </div>
        );
        break;

      case "about":
        res = (
          <div className="text-gray-300 leading-relaxed">
            <span className="text-cyan-400 font-bold">Garbita Chowdhury</span> - Computer Science Student at Kalyani Govt. Engineering College (KGEC). Specialized in Next.js, FastAPI telemetry, PyTorch risk modeling, and JWT authentication architectures.
          </div>
        );
        break;

      case "skills":
        res = (
          <div className="space-y-1 text-gray-300">
            <div><strong className="text-cyan-400">Frontend:</strong> TypeScript, Next.js 16, React, Tailwind CSS, HTML5, CSS3</div>
            <div><strong className="text-purple-400">Backend:</strong> Node.js, Express, FastAPI, NextAuth (JWT), MongoDB, MySQL</div>
            <div><strong className="text-amber-400">AI / ML:</strong> Python, PyTorch, Generative AI, NumPy, Pandas, Scikit-learn</div>
            <div><strong className="text-blue-400">DevOps & Media:</strong> Docker, Git, Vercel, Photoshop, Premiere Pro</div>
          </div>
        );
        break;

      case "projects":
        res = (
          <div className="space-y-2 text-gray-300">
            <div>🏆 <strong className="text-amber-300">NER-SHIELD:</strong> AI-Based Landslide Risk System (SIH 2026 Winner)</div>
            <div>🛍️ <strong className="text-cyan-300">ShopTrend:</strong> Next.js 16 E-Commerce Storefront & Admin Portal</div>
            <div>🌤️ <strong className="text-purple-300">WeatherTrack:</strong> GIS Weather Telemetry & Schedule Engine</div>
          </div>
        );
        break;

      case "education":
        res = (
          <div className="space-y-1 text-gray-300">
            <div>🎓 <strong className="text-white">B.Tech Computer Science & Engineering</strong> @ Kalyani Govt. Engineering College (KGEC)</div>
            <div>🏆 <strong className="text-yellow-400">WBJEE State Rank:</strong> 1102 (Top 1.5% percentile)</div>
          </div>
        );
        break;

      case "contact":
        res = (
          <div className="space-y-1 text-gray-300">
            <div>📧 Email: <a href="#contact" className="text-cyan-400 underline">garbita1712@gmail.com</a></div>
            <div>🐙 GitHub: <a href="https://github.com/garbita1712-ops" target="_blank" className="text-cyan-400 underline">github.com/garbita1712-ops</a></div>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        return;

      default:
        res = (
          <div className="text-red-400">
            Command not recognized: <span className="text-white font-bold">{trimmed}</span>. Type <span className="text-yellow-400 font-bold">'help'</span> for available options.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: res }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
  };

  return (
    <section id="terminal" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive Developer Shell</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Profile <span className="text-gradient">CLI Terminal</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Type commands to query Garbita's background, achievements, and technical stack.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="glass-card rounded-3xl border border-cyan-500/30 overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.15)] font-mono text-sm">
          
          {/* Header Bar */}
          <div className="bg-slate-900/90 px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
              <div className="w-3.5 h-3.5 rounded-full bg-green-500/80" />
              <span className="text-xs text-gray-400 ml-3">garbita@kgec-terminal: ~</span>
            </div>

            <div className="flex items-center space-x-2">
              {["help", "about", "skills", "projects", "education"].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="px-2.5 py-1 rounded bg-white/5 hover:bg-cyan-500/20 text-gray-300 hover:text-cyan-300 text-[11px] border border-white/10 transition-colors"
                >
                  {cmd}
                </button>
              ))}
              <button
                onClick={() => setHistory([])}
                className="p-1 rounded bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-colors"
                title="Clear"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Screen Body */}
          <div className="p-6 bg-slate-950/95 min-h-[320px] max-h-[420px] overflow-y-auto space-y-4">
            {history.map((item, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <span className="text-purple-400">garbita@kgec</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-cyan-300">~</span>
                  <span className="text-gray-400">$</span>
                  <span className="text-white font-bold">{item.command}</span>
                </div>
                <div className="pl-4 border-l-2 border-cyan-500/30 text-gray-300">
                  {item.output}
                </div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Form */}
          <form onSubmit={onSubmit} className="bg-slate-900/90 px-6 py-4 border-t border-white/10 flex items-center space-x-3">
            <span className="text-cyan-400 font-bold">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'help', 'about', 'skills', 'projects'..."
              className="flex-1 bg-transparent text-white focus:outline-none font-mono text-sm placeholder-gray-600"
            />
            <button
              type="submit"
              className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 transition-colors"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
