"use client";

import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPytorch,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiDocker,
  SiNodedotjs,
  SiFlutter,
  SiDart,
  SiGit,
  SiGithub,
  SiFramer,
  SiHtml5,
  SiCss,
  SiExpress,
  SiScikitlearn,
  SiVercel,
  SiPostgresql,
  SiLinux,
} from "react-icons/si";

export const techIconMap: Record<string, React.ElementType> = {
  "Next.js 16 (App Router)": SiNextdotjs,
  "Next.js 16": SiNextdotjs,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "React 19": SiReact,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  "HTML5/CSS3": SiHtml5,
  HTML5: SiHtml5,
  CSS3: SiCss,
  FastAPI: SiFastapi,
  Python: SiPython,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  Express: SiExpress,
  PyTorch: SiPytorch,
  "Scikit-Learn": SiScikitlearn,
  Flutter: SiFlutter,
  Dart: SiDart,
  "Git/GitHub Actions": SiGit,
  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  Vercel: SiVercel,
  PostgreSQL: SiPostgresql,
  Linux: SiLinux,
};

export function getTechIcon(name: string) {
  for (const key of Object.keys(techIconMap)) {
    if (name.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(name.toLowerCase())) {
      return techIconMap[key];
    }
  }
  return null;
}
