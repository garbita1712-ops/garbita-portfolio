"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function NivoraFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What services are offered?",
      a: "We design and build modern, high-performing web platforms using Next.js 16, TypeScript, PyTorch ML models, and custom backend API services.",
    },
    {
      q: "Who is this portfolio for?",
      a: "Ideal for tech founders, engineering recruiters, hackathon teams, and organizations seeking full-stack web & AI capabilities.",
    },
    {
      q: "What is Garbita's academic background?",
      a: "B.Tech Computer Science & Engineering student at Kalyani Govt. Engineering College (KGEC) with state merit rank 1102 in WBJEE.",
    },
    {
      q: "What is the NER-SHIELD project?",
      a: "Winner of the SIH Internal Hackathon, NER-SHIELD is an AI-based early warning & landslide risk monitoring system for the North-Eastern Region.",
    },
    {
      q: "Can project components be customized?",
      a: "Everything is fully modular and customizable, including database schemas, authentication providers, design systems, and cloud deployments.",
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 sm:px-8 bg-zinc-950/60 border-t border-white/10">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-xs uppercase font-mono tracking-widest text-zinc-500">
            FAQ / Common Questions
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            This is different we get that, you may have questions, here are some answers.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="nivora-card rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-white text-base sm:text-lg focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
