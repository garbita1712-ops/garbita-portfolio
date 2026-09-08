"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Award,
  Sparkles,
  GraduationCap,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Building2,
  Mic,
  BookOpen,
} from "lucide-react";

interface Milestone {
  id: string;
  year: string;
  date: string;
  title: string;
  organization: string;
  category: "hackathon" | "academic" | "leadership";
  categoryLabel: string;
  badge: string;
  icon: React.ElementType;
  description: string;
  impactMetrics: string[];
  tags: string[];
  link?: string;
  linkText?: string;
}

const MILESTONES: Milestone[] = [
  {
    id: "class-x-2023",
    year: "2023",
    date: "2023",
    title: "Secondary Examination (Class X) — 1st Division (Grade A)",
    organization: "Bidya Bharati School",
    category: "academic",
    categoryLabel: "Secondary Board",
    badge: "1st Division (Grade A)",
    icon: GraduationCap,
    description:
      "Successfully passed the Secondary (Class X) Board Examination with 1st Division (Grade A) honors from Bidya Bharati School, demonstrating consistent academic rigor across all disciplines.",
    impactMetrics: [
      "Awarded Grade 'A' (1st Division) Honors",
      "Top Academic Distinction across Core Subjects",
    ],
    tags: ["Class X", "Grade A", "1st Division", "Bidya Bharati School"],
  },
  {
    id: "wbjee-2023",
    year: "2023",
    date: "2023",
    title: "WBJEE State Merit Rank 1102 (Top 1.1% Percentile)",
    organization: "West Bengal Joint Entrance Examinations Board",
    category: "academic",
    categoryLabel: "Competitive Examination",
    badge: "State Rank 1102",
    icon: Award,
    description:
      "Secured top State Merit Rank 1102 among over 100,000+ engineering aspirants across West Bengal in the WBJEE examination. Earned merit admission into the Computer Science & Engineering department at Kalyani Government Engineering College (KGEC).",
    impactMetrics: [
      "State Merit Rank 1102 out of 100,000+ Candidates",
      "Top 1.1% Percentile in Physics, Chemistry & Mathematics",
      "Merit-Based Seat Allocation at KGEC CSE",
    ],
    tags: ["WBJEE", "State Rank 1102", "Top 1.1%", "Mathematics", "Physics"],
  },
  {
    id: "class-xii-2025",
    year: "2023 – 2025",
    date: "2023 – 2025",
    title: "Higher Secondary (Class XII - Science) — 1st Division (Grade A)",
    organization: "Bidya Bharati Girls' High School",
    category: "academic",
    categoryLabel: "Higher Secondary",
    badge: "1st Division (Grade A)",
    icon: GraduationCap,
    description:
      "Graduated Higher Secondary (Class XII - Science stream) with 1st Division (Grade A) distinction from Bidya Bharati Girls' High School, building deep foundations in Mathematics, Physical Sciences, and Computer Applications.",
    impactMetrics: [
      "Awarded Grade 'A' (1st Division) Distinction",
      "Rigorous Analytical Training in Science & Advanced Mathematics",
      "Active Academic Honor Contributor",
    ],
    tags: ["Class XII Science", "Grade A", "1st Division", "Bidya Bharati Girls High School"],
  },
  {
    id: "shuats-talent-search-2025",
    year: "2025",
    date: "Early August '25",
    title: "SHUATS National Talent Search Quiz",
    organization: "Sam Higginbottom University of Agriculture, Technology and Sciences (SHUATS)",
    category: "academic",
    categoryLabel: "National Competition",
    badge: "1st Position All-India",
    icon: Trophy,
    description:
      "Bagged 1st Position in all over India along with some cash prize and a 60% concession scholarship in the SHUATS National Talent Search Quiz.",
    impactMetrics: [
      "Bagged 1st Position in all over India across competing institutions nationwide",
      "Awarded Cash Prize & 60% Concession Scholarship",
      "Recognized for exceptional scientific aptitude and analytical problem solving",
    ],
    tags: ["National Quiz", "1st Position", "All-India Rank", "Cash Prize", "Scholarship"],
  },
  {
    id: "genai-mastermind-aug-2025",
    year: "2025",
    date: "Mid August '25",
    title: "2-Day Generative AI Mastermind",
    organization: "Generative AI Mastermind Program",
    category: "hackathon",
    categoryLabel: "AI & Mastermind",
    badge: "Extensive Certificate",
    icon: Sparkles,
    description:
      "Extensive Course Completion Certificate in intensive 2-Day Generative AI Mastermind bootcamp, covering prompt engineering, LLM integration, and generative pipelines.",
    impactMetrics: [
      "Extensive Course Completion Certificate in Hands-on Generative AI",
      "Hands-on training in LLMs, prompt design, and AI-assisted workflows",
      "Prototyping production-ready AI tools and autonomous agents",
    ],
    tags: ["Generative AI", "LLMs", "Prompt Engineering", "AI Mastermind", "Certifications"],
  },
  {
    id: "genai-mastermind-dec-2025",
    year: "2025",
    date: "Mid December '25",
    title: "2-Day Generative AI Mastermind",
    organization: "Generative AI Mastermind Program",
    category: "hackathon",
    categoryLabel: "AI & Mastermind",
    badge: "Course Completion Certificate",
    icon: Award,
    description:
      "Course Completion Certificate in advanced Generative AI application engineering, model orchestration, and practical AI system architectures.",
    impactMetrics: [
      "Course Completion Certificate in Advanced Generative AI Engineering",
      "Model orchestration, RAG architectures, and multimodal integrations",
      "Full-stack AI deployment pipelines and real-time generation workflows",
    ],
    tags: ["Generative AI", "AI Architecture", "Model Orchestration", "Certification"],
  },
  {
    id: "sih-2026",
    year: "2026",
    date: "2026",
    title: "Winner, SIH Internal Campus Hackathon (SIH 2026)",
    organization: "Smart India Hackathon · Ministry of Education / AICTE",
    category: "hackathon",
    categoryLabel: "National Hackathon",
    badge: "1st Place (Team SiXfinity)",
    icon: Trophy,
    description:
      "Secured 1st Place with Team SiXfinity for developing NER-SHIELD (Problem Statement 26001), an AI/ML Landslide Early Warning System. Engineered a Random Forest classifier trained on 34 telemetry parameters (9,866 in-situ records), delivering 98.33% risk prediction accuracy and 6–24-hour advance hazard warnings. Built an interactive Leaflet GIS Web App (React, Next.js, Tailwind) and cross-platform Flutter mobile app with offline SQLite storage, paired with FastAPI and TextBee SMS emergency gateway for zero-internet alert dispatch.",
    impactMetrics: [
      "1st Place Winner with Team SiXfinity (Problem Statement 26001)",
      "98.33% Risk Prediction Accuracy across 34 Telemetry Parameters (9,866 in-situ records)",
      "6–24 Hour Advance Landslide Hazard Warning System",
      "FastAPI + TextBee SMS Emergency Gateway for Zero-Internet Alert Dispatch",
    ],
    tags: [
      "Python",
      "Machine Learning",
      "Random Forest",
      "TypeScript",
      "Next.js",
      "Flutter",
      "SQLite",
      "Tailwind CSS",
      "Leaflet.js",
      "FastAPI",
      "TextBee SMS",
    ],
    link: "https://github.com/garbita1712-ops",
    linkText: "View NER-SHIELD on GitHub",
  },
  {
    id: "vigyan-abhijan-2026",
    year: "2026",
    date: "2026",
    title: "Vigyan Abhijan 2026 — Event Coordinator & Public Speaker",
    organization: "Campus Technology Competitions & Science Symposium",
    category: "leadership",
    categoryLabel: "Technical Leadership",
    badge: "Event Coordinator & Speaker",
    icon: Mic,
    description:
      "Active event coordinator, public speaker, and video editing contributor in campus technology competitions and the Vigyan Abhijan symposium. Drove student engagement, technical demonstrations, creative audio-visual presentations, and live platform walk-throughs.",
    impactMetrics: [
      "Event Coordinator & Public Speaker for Technology Competitions",
      "Produced High-Impact Multimedia Video Editing & Visual Presentations",
      "Mentored Participant Teams across Presentation & Pitch Formats",
    ],
    tags: ["Public Speaking", "Event Coordination", "Video Editing", "Canva", "Premiere Pro", "UI/UX"],
  },
  {
    id: "kgec-btech",
    year: "2026 – Present",
    date: "2026 – Present",
    title: "B.Tech in Computer Science & Engineering (Semester 3)",
    organization: "Kalyani Government Engineering College (KGEC)",
    category: "academic",
    categoryLabel: "Undergraduate Degree",
    badge: "YGPA: 8.16",
    icon: BookOpen,
    description:
      "Pursuing Bachelor of Technology in Computer Science & Engineering at Kalyani Government Engineering College (KGEC). Maintaining a stellar YGPA of 8.16, specializing in full-stack web architecture, data structures, algorithms, machine learning, and operating systems.",
    impactMetrics: [
      "Outstanding Academic YGPA: 8.16 in B.Tech CSE",
      "Core Specialization: Full-Stack Web, DSA, Next.js, NextAuth (JWT), Python",
      "State Merit Admission at Premier Institute (KGEC)",
    ],
    tags: ["KGEC", "B.Tech CSE", "YGPA: 8.16", "Full-Stack Development", "DSA", "DBMS"],
  },
];

const CATEGORIES = [
  { id: "all", label: "All Milestones" },
  { id: "hackathon", label: "Hackathons & AI" },
  { id: "academic", label: "Academic Honors & Degrees" },
  { id: "leadership", label: "Leadership & Speaking" },
] as const;

export default function AchievementsTimeline() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredMilestones =
    selectedCategory === "all"
      ? MILESTONES
      : MILESTONES.filter((m) => m.category === selectedCategory);

  return (
    <section id="achievements" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 relative overflow-hidden bg-[#070709]">
      {/* Background ambient lighting */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-signature text-white tracking-wide signature-glow">
            Achievements
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-light">
            Verified chronological timeline of honors, degrees, national hackathons, and certifications ordered from 2023 to present.
          </p>
        </motion.div>

        {/* Highlights Metric Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-white/10 backdrop-blur-md space-y-1 hover:border-white/20 transition-colors">
            <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider truncate">SIH 2026 Winner</div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-mono">1st Place</div>
            <div className="text-[11px] sm:text-xs text-zinc-400 truncate">Team SiXfinity · PS 26001</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-white/10 backdrop-blur-md space-y-1 hover:border-white/20 transition-colors">
            <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider truncate">SHUATS Talent Quiz</div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-mono">1st in India</div>
            <div className="text-[11px] sm:text-xs text-zinc-400 truncate">All-India Rank + Scholarship</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-white/10 backdrop-blur-md space-y-1 hover:border-white/20 transition-colors">
            <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider truncate">WBJEE Merit</div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-mono">Rank 1102</div>
            <div className="text-[11px] sm:text-xs text-zinc-400 truncate">Top 1.1% State-wide Merit</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-white/10 backdrop-blur-md space-y-1 hover:border-white/20 transition-colors">
            <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider truncate">KGEC B.Tech CSE</div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-mono">YGPA 8.16</div>
            <div className="text-[11px] sm:text-xs text-zinc-400 truncate">Semester 3 Computer Science</div>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex overflow-x-auto whitespace-nowrap items-center gap-2 border-b border-white/10 pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 border select-none whitespace-nowrap flex-shrink-0 ${
                  active
                    ? "bg-white text-black font-bold border-white shadow-[0_0_15px_rgba(255,255,255,0.25)]"
                    : "bg-zinc-900/60 text-zinc-400 border-white/5 hover:text-white hover:border-white/15"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Timeline Container */}
        <div className="relative pt-6 pb-6">
          {/* Central glowing vertical timeline spine (Desktop: center, Mobile: left-5) */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/35 via-white/15 to-transparent -translate-x-1/2 pointer-events-none" />

          <div className="space-y-8 sm:space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredMilestones.map((item, index) => {
                const isEven = index % 2 === 0;
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center"
                  >
                    {/* Timeline Node Marker */}
                    <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 top-6 sm:top-8 z-20 flex items-center justify-center">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-zinc-950 border-2 border-white/60 shadow-[0_0_16px_rgba(255,255,255,0.35)] flex items-center justify-center text-white flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>

                    {/* Card Placed on Left or Right depending on index on desktop; always right of line on mobile */}
                    <div
                      className={`pl-12 sm:pl-0 w-full ${
                        isEven
                          ? "sm:pr-10 lg:pr-12"
                          : "sm:col-start-2 sm:pl-10 lg:pl-12"
                      }`}
                    >
                      {/* Milestone Card */}
                      <div className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-white/25 transition-all duration-300 space-y-4 text-left shadow-2xl backdrop-blur-xl group hover:bg-zinc-900/80">
                        {/* Year & Badge Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-3">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white text-black font-mono font-bold text-xs whitespace-nowrap">
                              {item.year}
                            </span>
                            <span className="text-xs font-mono text-zinc-400 flex items-center gap-1 whitespace-nowrap">
                              <Calendar className="w-3 h-3 text-zinc-500 flex-shrink-0" />
                              {item.date}
                            </span>
                          </div>

                          <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-white font-medium whitespace-nowrap">
                            {item.badge}
                          </span>
                        </div>

                        {/* Title & Organization */}
                        <div className="space-y-1">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-zinc-100 transition-colors leading-snug">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                            <Building2 className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                            <span className="line-clamp-1 sm:line-clamp-none">{item.organization}</span>
                          </div>
                        </div>

                        {/* Narrative Description */}
                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                          {item.description}
                        </p>

                        {/* Key Metric Highlights */}
                        <div className="space-y-2 pt-1 border-t border-white/5">
                          {item.impactMetrics.map((metric, mi) => (
                            <div
                              key={mi}
                              className="flex items-start gap-2 text-xs font-mono text-zinc-300"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0 mt-0.5" />
                              <span className="leading-snug">{metric}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technology Tags & External Link */}
                        <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-white/5 border border-white/5 text-[10px] sm:text-[11px] font-mono text-zinc-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-mono text-white hover:text-zinc-300 transition-colors group/link whitespace-nowrap"
                            >
                              <span>{item.linkText || "View Project"}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Empty column for alternating layout on desktop */}
                    <div className="hidden sm:block" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
