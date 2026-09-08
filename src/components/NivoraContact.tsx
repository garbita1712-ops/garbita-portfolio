"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";
import MagneticButton from "./MagneticButton";

export default function NivoraContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSent(true);
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.7 },
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-8"
        >
          <div className="space-y-3">
            <h2 className="text-6xl sm:text-8xl font-signature text-white tracking-wide signature-glow">
              Contact
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed font-light">
              Available for engineering roles, AI research, and technical collaborations.
            </p>
          </div>

          <div className="space-y-4 font-mono text-sm">
            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-center justify-between shadow-lg">
              <span className="text-zinc-400">EMAIL</span>
              <a href="mailto:garbita.chowdhury1712@gmail.com" className="font-bold text-white underline hover:text-zinc-300 transition-colors">
                garbita.chowdhury1712@gmail.com
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-center justify-between shadow-lg">
              <span className="text-zinc-400">LINKEDIN</span>
              <a
                href="https://www.linkedin.com/in/garbita-chowdhury-387548383?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white underline flex items-center space-x-1 hover:text-zinc-300 transition-colors"
              >
                <span>garbita-chowdhury</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-center justify-between shadow-lg">
              <span className="text-zinc-400">GITHUB</span>
              <a
                href="https://github.com/garbita1712-ops"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white underline flex items-center space-x-1 hover:text-zinc-300 transition-colors"
              >
                <span>@garbita1712-ops</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-center justify-between shadow-lg">
              <span className="text-zinc-400">PHONE</span>
              <a href="tel:+919007946673" className="font-bold text-white hover:text-zinc-300 transition-colors">
                +91 9007946673
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 flex items-center justify-between shadow-lg">
              <span className="text-zinc-400">LOCATION</span>
              <span className="font-bold text-white">Kolkata, India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column Form Box */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 nivora-card p-8 rounded-3xl space-y-6 shadow-2xl border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white">Send a Message</h3>

          {sent ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-white mx-auto" />
              <h4 className="text-xl font-bold text-white">Message Transmitted</h4>
              <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                Thank you <strong>{form.name}</strong>. Garbita will get back to <strong>{form.email}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", message: "" });
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">YOUR NAME</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">YOUR EMAIL</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">PROJECT DETAILS</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project idea or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 text-sm"
                />
              </div>

              <MagneticButton className="w-full">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </MagneticButton>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
