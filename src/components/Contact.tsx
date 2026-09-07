"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, Sparkles, MessageSquare } from "lucide-react";
import Github from "./GithubIcon";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00f0ff", "#a855f7", "#38bdf8"],
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/90 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Interested in building high-impact full-stack applications, hackathon collaborations, or technical roles? Let's talk!
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Card */}
          <div className="lg:col-span-5 glass-card p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Feel free to reach out via email or connect directly on GitHub for code discussions, technical queries, or project inquiries.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono">Direct Email</div>
                    <a href="mailto:garbita1712@gmail.com" className="text-sm font-bold text-white hover:text-cyan-400">
                      garbita1712@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono">GitHub Profile</div>
                    <a
                      href="https://github.com/garbita1712-ops"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-white hover:text-purple-400"
                    >
                      github.com/garbita1712-ops
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-mono">Location</div>
                    <div className="text-sm font-bold text-white">Kalyani / Kolkata, West Bengal, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature Badge */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400 font-mono">Full Handwritten Signature</div>
                <div className="text-sm font-bold text-gray-200">Garbita Chowdhury</div>
              </div>
              <img
                src="/assets/signature_dark.svg"
                alt="Signature"
                className="h-10 opacity-90 invert-0"
              />
            </div>
          </div>

          {/* Direct Inquiry Form */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-center">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto border border-cyan-500/40">
                  <CheckCircle2 className="w-8 h-8 animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-gray-400 text-sm max-w-md mx-auto">
                  Thank you for reaching out, <span className="text-cyan-300 font-semibold">{formState.name}</span>. Garbita will get back to you shortly!
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", message: "" });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl glass-card text-xs font-mono text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-white">Send a Direct Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-300">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 text-sm font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-300">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 text-sm font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hi Garbita, I saw your NER-SHIELD project and would like to connect..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 text-sm font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-base shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] transition-all flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <span className="font-mono text-sm animate-pulse">Transmitting message...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
