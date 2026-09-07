"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, CornerDownLeft, Sparkles } from "lucide-react";

interface TerminalLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

const VIRTUAL_FILES: Record<string, { name: string; type: string; size: string; content: React.ReactNode }> = {
  "about.txt": {
    name: "about.txt",
    type: "-rw-r--r--",
    size: "1.2KB",
    content: (
      <div className="space-y-2 text-zinc-300 font-sans text-xs sm:text-sm">
        <div className="text-white font-bold text-base flex items-center gap-2">
          <span>Garbita Chowdhury</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/10 text-zinc-300 border border-white/20">
            SIH 2026 Winner
          </span>
        </div>
        <div className="text-zinc-400 font-mono text-xs">Full-Stack Engineer &amp; AI Telemetry Specialist</div>
        <p className="text-zinc-300 leading-relaxed mt-2 font-light">
          Computer Science &amp; Engineering student at Kalyani Government Engineering College (KGEC).
          Winner of Smart India Hackathon 2026 (Problem Statement 26001).
          Specializing in PyTorch ML risk inference engines, Next.js 16 web architectures, and mobile hazard dashboards.
        </p>
        <div className="text-zinc-400 text-xs font-mono pt-2 space-y-1 border-t border-white/10 mt-3">
          <div>📍 Location: Kalyani / Kolkata, West Bengal, India</div>
          <div>🎓 Institution: Kalyani Government Engineering College (KGEC)</div>
          <div>🏆 WBJEE State Rank: 1102 (Top 1.5% percentile)</div>
        </div>
      </div>
    ),
  },
  "skills.json": {
    name: "skills.json",
    type: "-rw-r--r--",
    size: "2.4KB",
    content: (
      <div className="font-mono text-xs space-y-1 text-zinc-300 leading-relaxed">
        <div><span className="text-zinc-500 font-bold">&#123;</span></div>
        <div className="pl-4"><span className="text-zinc-400">"frontend"</span>: [<span className="text-zinc-200">"Next.js 16 (App Router)"</span>, <span className="text-zinc-200">"TypeScript"</span>, <span className="text-zinc-200">"React 19"</span>, <span className="text-zinc-200">"Tailwind CSS"</span>],</div>
        <div className="pl-4"><span className="text-zinc-400">"backend"</span>: [<span className="text-zinc-200">"FastAPI"</span>, <span className="text-zinc-200">"Python"</span>, <span className="text-zinc-200">"Node.js"</span>, <span className="text-zinc-200">"MongoDB"</span>, <span className="text-zinc-200">"NextAuth (JWT)"</span>],</div>
        <div className="pl-4"><span className="text-zinc-400">"ai_ml"</span>: [<span className="text-zinc-200">"PyTorch"</span>, <span className="text-zinc-200">"ISRO NRSC Telemetry"</span>, <span className="text-zinc-200">"Factor-of-Safety Mechanics"</span>, <span className="text-zinc-200">"Scikit-Learn"</span>],</div>
        <div className="pl-4"><span className="text-zinc-400">"mobile"</span>: [<span className="text-zinc-200">"Flutter"</span>, <span className="text-zinc-200">"Dart"</span>, <span className="text-zinc-200">"TextBee SMS Gateway"</span>, <span className="text-zinc-200">"Offline Telemetry Queues"</span>]</div>
        <div><span className="text-zinc-500 font-bold">&#125;</span></div>
      </div>
    ),
  },
  "projects.md": {
    name: "projects.md",
    type: "-rw-r--r--",
    size: "3.1KB",
    content: (
      <div className="space-y-3 text-zinc-300 text-xs font-mono">
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="text-white font-bold text-sm flex items-center justify-between">
            <span>1. NER-SHIELD</span>
            <span className="text-[10px] text-zinc-400">SIH 2026 Winner</span>
          </div>
          <p className="text-zinc-400 text-xs mt-1">AI Landslide Telemetry &amp; Risk Monitoring Engine built for North-Eastern Region (PS 26001). PyTorch + ISRO NRSC Telemetry + Flutter + SMS Gateway.</p>
        </div>
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="text-white font-bold text-sm">2. ShopTrend</div>
          <p className="text-zinc-400 text-xs mt-1">Full-stack Next.js 16 E-Commerce Storefront &amp; Admin Suite. JWT NextAuth, Cloudinary orphan image cleanup, Cashfree API.</p>
        </div>
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="text-white font-bold text-sm">3. WeatherTrack GIS</div>
          <p className="text-zinc-400 text-xs mt-1">Automated GIS weather telemetry data pipeline processing satellite rainfall, soil moisture, and atmospheric feeds.</p>
        </div>
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          <div className="text-white font-bold text-sm">4. DevPulse Studio</div>
          <p className="text-zinc-400 text-xs mt-1">Interactive code execution sandbox &amp; developer model preview suite built with Next.js 16.</p>
        </div>
      </div>
    ),
  },
  "contact.sh": {
    name: "contact.sh",
    type: "-rwxr-xr-x",
    size: "840B",
    content: (
      <div className="space-y-1.5 font-mono text-xs text-zinc-300">
        <div className="text-zinc-500">#!/bin/bash</div>
        <div className="text-white font-bold"># Garbita Chowdhury Direct Contact Script</div>
        <div className="pt-2">📧 Email: <a href="mailto:garbita1712@gmail.com" className="text-white underline hover:text-zinc-300">garbita1712@gmail.com</a></div>
        <div>🐙 GitHub: <a href="https://github.com/garbita1712-ops" target="_blank" rel="noreferrer" className="text-white underline hover:text-zinc-300">@garbita1712-ops</a></div>
        <div>📍 Location: Kalyani / Kolkata, West Bengal, India</div>
      </div>
    ),
  },
  "sih2026.log": {
    name: "sih2026.log",
    type: "-rw-r--r--",
    size: "512B",
    content: (
      <div className="font-mono text-xs text-zinc-400 space-y-1">
        <div><span className="text-zinc-600">[2026-09-01 09:00:00]</span> <span className="text-zinc-300">[INFO]</span> SIH Grand Finale commenced - Problem Statement ID 26001.</div>
        <div><span className="text-zinc-600">[2026-09-01 14:30:00]</span> <span className="text-white font-bold">[SUCCESS]</span> ISRO NRSC Telemetry Pipeline connected. Factor-of-safety risk model verified.</div>
        <div><span className="text-zinc-600">[2026-09-02 02:15:00]</span> <span className="text-white font-bold">[SUCCESS]</span> Flutter Mobile dashboard deployed with TextBee offline SMS queue.</div>
        <div><span className="text-zinc-600">[2026-09-02 11:45:00]</span> <span className="text-white font-bold">[WINNER]</span> 🏆 NER-SHIELD awarded 1st Place at Smart India Hackathon 2026!</div>
      </div>
    ),
  },
};

export default function CodeShowcase() {
  const [inputVal, setInputVal] = useState("");
  const [historyCmds, setHistoryCmds] = useState<string[]>([]);
  const [historyPointer, setHistoryPointer] = useState<number>(-1);
  const [logs, setLogs] = useState<TerminalLog[]>([
    {
      id: "init",
      command: "welcome",
      output: (
        <div className="space-y-2 text-zinc-300 font-mono text-xs sm:text-sm">
          <div className="text-white font-bold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-white animate-pulse" />
            <span>Garbita Chowdhury's Linux Profile Terminal v2.6</span>
          </div>
          <p className="text-zinc-400 font-light">
            Type <span className="text-white font-bold underline cursor-pointer" onClick={() => handleExec("help")}>'help'</span> to view available Linux commands, or type <span className="text-white font-bold underline cursor-pointer" onClick={() => handleExec("neofetch")}>'neofetch'</span> / <span className="text-white font-bold underline cursor-pointer" onClick={() => handleExec("ls")}>'ls'</span> to explore the environment.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleExec = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    const parts = trimmed.split(" ");
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ").toLowerCase();

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
      case "man":
        output = (
          <div className="space-y-2 font-mono text-xs text-zinc-300">
            <div className="text-white font-bold border-b border-white/10 pb-1">AVAILABLE LINUX COMMANDS:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 pt-1">
              <div><span className="text-white font-bold w-20 inline-block">ls</span> - List virtual files</div>
              <div><span className="text-white font-bold w-20 inline-block">cat &lt;file&gt;</span> - Read virtual file</div>
              <div><span className="text-white font-bold w-20 inline-block">neofetch</span> - Display system &amp; profile card</div>
              <div><span className="text-white font-bold w-20 inline-block">whoami</span> - Display user identity</div>
              <div><span className="text-white font-bold w-20 inline-block">about</span> - Biography &amp; education</div>
              <div><span className="text-white font-bold w-20 inline-block">skills</span> - Full-stack &amp; AI matrix</div>
              <div><span className="text-white font-bold w-20 inline-block">projects</span> - Production repos &amp; SIH win</div>
              <div><span className="text-white font-bold w-20 inline-block">contact</span> - Email, GitHub &amp; location</div>
              <div><span className="text-white font-bold w-20 inline-block">sih</span> - SIH 2026 hackathon details</div>
              <div><span className="text-white font-bold w-20 inline-block">pwd</span> - Print working directory</div>
              <div><span className="text-white font-bold w-20 inline-block">date</span> - Print current timestamp</div>
              <div><span className="text-white font-bold w-20 inline-block">uname -a</span> - Print kernel info</div>
              <div><span className="text-white font-bold w-20 inline-block">sudo &lt;cmd&gt;</span> - Execute with root privilege</div>
              <div><span className="text-white font-bold w-20 inline-block">clear</span> - Clear terminal screen</div>
            </div>
          </div>
        );
        break;

      case "ls":
        output = (
          <div className="font-mono text-xs space-y-1">
            {Object.values(VIRTUAL_FILES).map((file) => (
              <div key={file.name} className="flex items-center gap-4 text-zinc-300">
                <span className="text-zinc-500 font-mono w-24">{file.type}</span>
                <span className="text-zinc-500 font-mono w-16 text-right">{file.size}</span>
                <span
                  className={`font-bold cursor-pointer hover:underline ${
                    file.name.endsWith(".sh") ? "text-white" : "text-zinc-200"
                  }`}
                  onClick={() => handleExec(`cat ${file.name}`)}
                >
                  {file.name}
                </span>
              </div>
            ))}
          </div>
        );
        break;

      case "cat":
        if (!arg) {
          output = <div className="text-red-400 font-mono text-xs">Usage: cat &lt;filename&gt; (e.g. cat about.txt, cat skills.json)</div>;
        } else if (VIRTUAL_FILES[arg]) {
          output = VIRTUAL_FILES[arg].content;
        } else {
          output = <div className="text-red-400 font-mono text-xs">cat: {arg}: No such file or directory. Type 'ls' to view files.</div>;
        }
        break;

      case "neofetch":
      case "fetch":
        output = (
          <div className="font-mono text-xs text-zinc-300 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row gap-6 items-start">
            <pre className="text-white text-[10px] leading-tight select-none font-bold hidden sm:block">
{`   _____          _____  
  / ____|        / ____| 
 | |  __   __ _ | |  __  
 | | |_ | / _\` || | |_ | 
 | |__| || (_| || |__| | 
  \\______| \\__,_| \\_____| `}
            </pre>
            <div className="space-y-1.5 flex-1">
              <div className="text-white font-bold border-b border-white/10 pb-1 text-sm">garbita@linux-portfolio</div>
              <div><span className="text-zinc-500">OS:</span> Linux x86_64 Next.js 16 Edge</div>
              <div><span className="text-zinc-500">Kernel:</span> 6.1.0-garbita-portfolio</div>
              <div><span className="text-zinc-500">Uptime:</span> SIH 2026 Winner (Problem Statement 26001)</div>
              <div><span className="text-zinc-500">Education:</span> B.Tech CSE @ KGEC (WBJEE Rank 1102)</div>
              <div><span className="text-zinc-500">Shell:</span> bash 5.2.15-interactive</div>
              <div><span className="text-zinc-500">Stack:</span> Next.js 16, TypeScript, PyTorch, FastAPI, Flutter</div>
              <div><span className="text-zinc-500">GitHub:</span> github.com/garbita1712-ops</div>
              <div className="flex gap-1.5 pt-2">
                <span className="w-3 h-3 rounded-full bg-white" />
                <span className="w-3 h-3 rounded-full bg-zinc-400" />
                <span className="w-3 h-3 rounded-full bg-zinc-600" />
                <span className="w-3 h-3 rounded-full bg-zinc-800" />
              </div>
            </div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="font-mono text-xs text-white">
            garbita (Garbita Chowdhury — SIH 2026 Winner, Full-Stack &amp; AI Systems Engineer)
          </div>
        );
        break;

      case "about":
        output = VIRTUAL_FILES["about.txt"].content;
        break;

      case "skills":
        output = VIRTUAL_FILES["skills.json"].content;
        break;

      case "projects":
        output = VIRTUAL_FILES["projects.md"].content;
        break;

      case "contact":
        output = VIRTUAL_FILES["contact.sh"].content;
        break;

      case "sih":
        output = VIRTUAL_FILES["sih2026.log"].content;
        break;

      case "pwd":
        output = <div className="font-mono text-xs text-zinc-300">/home/garbita</div>;
        break;

      case "date":
        output = <div className="font-mono text-xs text-zinc-300">{new Date().toString()}</div>;
        break;

      case "uname":
        output = <div className="font-mono text-xs text-zinc-300">Linux portfolio 6.1.0-garbita-x86_64 #1 SMP PREEMPT_DYNAMIC GNU/Linux</div>;
        break;

      case "sudo":
        output = (
          <div className="font-mono text-xs space-y-1">
            <div className="text-zinc-400">[sudo] password for garbita: ********</div>
            <div className="text-white font-bold">[ACCESS GRANTED] You are running as root administrator of Garbita's repository!</div>
          </div>
        );
        break;

      case "clear":
        setLogs([]);
        return;

      case "history":
        output = (
          <div className="font-mono text-xs text-zinc-300 space-y-1">
            {historyCmds.map((h, i) => (
              <div key={i}><span className="text-zinc-500 w-8 inline-block">{i + 1}</span> {h}</div>
            ))}
          </div>
        );
        break;

      default:
        output = (
          <div className="font-mono text-xs text-red-400">
            command not found: <span className="text-white font-bold">{trimmed}</span>. Type <span className="text-white font-bold underline cursor-pointer" onClick={() => handleExec("help")}>'help'</span> for available commands.
          </div>
        );
        break;
    }

    setLogs((prev) => [...prev, { id: Math.random().toString(), command: trimmed, output }]);
    setHistoryCmds((prev) => [...prev, trimmed]);
    setHistoryPointer(-1);
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleExec(inputVal);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyCmds.length === 0) return;
      const nextIdx = historyPointer === -1 ? historyCmds.length - 1 : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextIdx);
      setInputVal(historyCmds[nextIdx] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyPointer === -1) return;
      const nextIdx = historyPointer + 1;
      if (nextIdx >= historyCmds.length) {
        setHistoryPointer(-1);
        setInputVal("");
      } else {
        setHistoryPointer(nextIdx);
        setInputVal("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const trimmed = inputVal.trim().toLowerCase();
      const allSuggestions = [
        "help", "neofetch", "ls", "about", "skills", "projects", "contact", "sih",
        "cat about.txt", "cat skills.json", "cat projects.md", "cat contact.sh", "cat sih2026.log",
        "whoami", "clear", "pwd", "date", "uname -a", "sudo"
      ];
      const match = allSuggestions.find((s) => s.startsWith(trimmed));
      if (match) {
        setInputVal(match);
      }
    }
  };

  return (
    <section id="code" className="py-28 px-6 sm:px-12 relative">
      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="text-6xl sm:text-8xl font-signature text-white tracking-wide signature-glow">
            Code Studio
          </h2>
          <p className="text-zinc-300 text-lg max-w-lg leading-relaxed font-light">
            Interactive Linux developer terminal &amp; production routines.
          </p>
        </motion.div>

        {/* Terminal Window Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "#0a0a0d",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.03)",
          }}
        >
          {/* Top Title Bar */}
          <div
            className="flex items-center justify-between px-5 py-3.5"
            style={{ background: "#0e0e12", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-zinc-700" />
                <span className="w-3 h-3 rounded-full bg-zinc-700" />
                <span className="w-3 h-3 rounded-full bg-zinc-600" />
              </div>
              <span className="font-mono text-xs text-zinc-400 font-semibold ml-2">
                garbita@linux-studio: ~
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 text-zinc-400 font-mono text-[11px]">
                <Terminal className="w-3 h-3 text-white" />
                <span>bash</span>
              </div>
            </div>
          </div>

          {/* Interactive Linux Terminal CLI Body */}
          <div className="p-6 font-mono space-y-4">
            {/* Quick Action Command Chips */}
            <div className="flex overflow-x-auto whitespace-nowrap items-center gap-2 pb-3 border-b border-white/10 text-xs no-scrollbar">
              <span className="text-zinc-500 font-mono text-[11px] mr-1">Quick commands:</span>
              {["help", "neofetch", "ls", "cat about.txt", "cat skills.json", "cat projects.md", "contact", "clear"].map(
                (cmd) => (
                  <button
                    key={cmd}
                    onClick={() => handleExec(cmd)}
                    className="px-2.5 py-1 rounded bg-white/5 hover:bg-white hover:text-black text-zinc-300 text-[11px] border border-white/10 transition-colors font-mono"
                  >
                    {cmd}
                  </button>
                )
              )}
            </div>

            {/* Logs Screen */}
            <div className="min-h-[300px] max-h-[440px] overflow-y-auto space-y-4 pr-2">
              {logs.map((log) => (
                <div key={log.id} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-white font-bold">garbita@linux-portfolio</span>
                    <span className="text-zinc-600">:</span>
                    <span className="text-zinc-400">~</span>
                    <span className="text-white font-bold">$</span>
                    <span className="text-zinc-200 font-semibold">{log.command}</span>
                  </div>
                  <div className="pl-4 border-l border-white/10 pt-0.5">{log.output}</div>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Input Bar */}
            <form onSubmit={onFormSubmit} className="pt-3 border-t border-white/10 flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-mono select-none">
                <span className="text-white font-bold">garbita@linux</span>
                <span className="text-zinc-500">:</span>
                <span className="text-zinc-400">~</span>
                <span className="text-white font-bold">$</span>
              </div>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help', 'neofetch', 'ls', 'cat about.txt'..."
                className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs sm:text-sm placeholder:text-zinc-600"
                autoFocus
              />
              <button
                type="submit"
                className="p-1.5 rounded-md bg-white/10 text-white hover:bg-white hover:text-black transition-colors"
                title="Execute command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
