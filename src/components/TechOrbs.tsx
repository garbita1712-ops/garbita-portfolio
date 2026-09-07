"use client";

import { motion } from "framer-motion";

export default function TechOrbs() {
  const skills = [
    { name: "Next.js 16", color: "from-white to-zinc-400" },
    { name: "PyTorch ML", color: "from-emerald-400 to-teal-600" },
    { name: "TypeScript", color: "from-cyan-400 to-blue-600" },
    { name: "FastAPI", color: "from-teal-400 to-emerald-600" },
    { name: "Flutter", color: "from-blue-400 to-indigo-600" },
    { name: "MongoDB", color: "from-green-400 to-emerald-700" },
    { name: "Docker", color: "from-sky-400 to-blue-600" },
    { name: "Tailwind CSS", color: "from-cyan-300 to-teal-500" },
  ];

  return (
    <div className="py-12 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center space-y-2 mb-8">
        <div className="text-xs uppercase font-mono tracking-widest text-zinc-500">
          Core Technical Capabilities
        </div>
        <h3 className="text-2xl font-extrabold text-white">Interactive Tech Sphere</h3>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            animate={{
              y: [0, index % 2 === 0 ? -8 : 8, 0],
            }}
            /* Continuous float loop */
            style={{
              animation: `floatBob 4s ease-in-out ${index * 0.4}s infinite alternate`,
            }}
            whileHover={{ scale: 1.15, rotate: index % 2 === 0 ? 3 : -3 }}
            className="cursor-pointer px-5 py-2.5 rounded-full bg-zinc-900/90 border border-white/10 shadow-xl backdrop-blur-xl flex items-center space-x-2 text-xs font-bold text-white group hover:border-white/40 transition-colors"
          >
            <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${skill.color} group-hover:scale-125 transition-transform`} />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
