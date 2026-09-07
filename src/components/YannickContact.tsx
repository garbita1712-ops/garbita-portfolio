"use client";

import { useState } from "react";
import confetti from "canvas-confetti";

export default function YannickContact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#00ff66", "#ffffff", "#008833"],
    });
  };

  return (
    <section id="contact" className="w-full py-16 px-4 sm:px-8 font-mono border-b border-current">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Direct Links & Cursive Signature */}
        <div className="lg:col-span-6 space-y-6">
          <div className="border-b border-current pb-4">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-accent">
              [ /&gt; CONTACT &amp; DIRECT INQUIRIES ]
            </h2>
            <div className="text-xs opacity-70 mt-1">
              Garbita Chowdhury © 2026
            </div>
          </div>

          <div className="space-y-3 text-base sm:text-lg font-mono">
            <div>
              📧 EMAIL:{" "}
              <a href="mailto:garbita1712@gmail.com" className="underline font-bold text-accent hover:opacity-80">
                garbita1712@gmail.com
              </a>
            </div>
            <div>
              🐙 GITHUB:{" "}
              <a
                href="https://github.com/garbita1712-ops"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-bold text-accent hover:opacity-80"
              >
                @garbita1712-ops
              </a>
            </div>
            <div>
              📍 LOCATION:{" "}
              <span className="font-bold">Kalyani / Kolkata, West Bengal, India</span>
            </div>
          </div>

          {/* Handwritten Signature Block */}
          <div className="pt-6 border-t border-current flex items-center justify-between">
            <div>
              <div className="text-xs opacity-70">OFFICIAL SIGNATURE</div>
              <div className="text-sm font-bold">Garbita Chowdhury</div>
            </div>
            <img
              src="/assets/signature_dark.svg"
              alt="Signature"
              className="h-12 invert-0 opacity-90"
            />
          </div>
        </div>

        {/* Right Column: Terminal Style Message Input */}
        <div className="lg:col-span-6 ascii-box p-6 sm:p-8 space-y-6">
          <div className="text-xs opacity-70 border-b border-current pb-2">
            [ /&gt; DIRECT TERMINAL MESSAGE ]
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="text-xl font-bold text-accent">[ TRANSMISSION CONFIRMED ]</div>
              <p className="text-sm opacity-90">
                Thank you, <strong>{formState.name}</strong>. Garbita will respond to <strong>{formState.email}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormState({ name: "", email: "", message: "" });
                }}
                className="mt-4 px-4 py-2 text-xs font-bold uppercase underline text-accent"
              >
                SEND ANOTHER MESSAGE →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-sm">
              <div>
                <label className="block text-xs uppercase opacity-70 mb-1">&gt; NAME:</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full p-2.5 bg-transparent border border-current focus:outline-none focus:border-accent text-current"
                />
              </div>

              <div>
                <label className="block text-xs uppercase opacity-70 mb-1">&gt; EMAIL:</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="your.email@domain.com"
                  className="w-full p-2.5 bg-transparent border border-current focus:outline-none focus:border-accent text-current"
                />
              </div>

              <div>
                <label className="block text-xs uppercase opacity-70 mb-1">&gt; MESSAGE:</label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Write your message..."
                  className="w-full p-2.5 bg-transparent border border-current focus:outline-none focus:border-accent text-current"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-accent text-black font-extrabold uppercase hover:opacity-90 transition-opacity"
              >
                TRANSMIT MESSAGE ⮐
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
