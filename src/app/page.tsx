"use client";

import { useEffect, useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import CleanNavbar from "@/components/CleanNavbar";
import CleanHero from "@/components/CleanHero";
import TechMarquee from "@/components/TechMarquee";
import CleanAbout from "@/components/CleanAbout";
import CleanWork from "@/components/CleanWork";
import CodeShowcase from "@/components/CodeShowcase";
import CleanSkills from "@/components/CleanSkills";
import AchievementsTimeline from "@/components/AchievementsTimeline";
import NivoraContact from "@/components/NivoraContact";
import NivoraFooter from "@/components/NivoraFooter";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

  const handlePreloaderFinish = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
    setLoaded(true);
  };

  return (
    <>
      <Preloader onFinish={handlePreloaderFinish} />

      <main
        className="min-h-screen bg-[#070709] text-[#f4f4f5] selection:bg-white selection:text-black font-sans relative overflow-hidden"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s ease",
          pointerEvents: loaded ? "auto" : "none",
        }}
      >
        {/* Dynamic Cursor Spring Follower */}
        <CustomCursor />

        {/* Navigation Header */}
        <CleanNavbar />

        {/* 01 / Hero Section */}
        <CleanHero />

        {/* 02 / Continuous Ticker Marquee */}
        <TechMarquee />

        {/* 03 / Executive Biography */}
        <CleanAbout />

        {/* 04 / Featured Systems & Showcase */}
        <CleanWork />

        {/* 05 / Interactive Source Code Studio */}
        <CodeShowcase />

        {/* 06 / Categorized Technical Stack */}
        <CleanSkills />

        {/* 07 / Chronology of Achievements & Milestones */}
        <AchievementsTimeline />

        {/* 08 / Direct Contact */}
        <NivoraContact />

        {/* Footer */}
        <NivoraFooter />
      </main>
    </>
  );
}
