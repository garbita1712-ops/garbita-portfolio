"use client";

import { useEffect, useState } from "react";

export default function YannickHUDNav() {
  const [isInverted, setIsInverted] = useState(false);

  useEffect(() => {
    // Sync class on root document element
    const root = document.documentElement;
    if (isInverted) {
      root.classList.remove("theme-dark");
      root.classList.add("theme-inverted");
    } else {
      root.classList.remove("theme-inverted");
      root.classList.add("theme-dark");
    }
  }, [isInverted]);

  const toggleInvert = () => {
    setIsInverted((prev) => !prev);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollByAmount = (amount: number) => {
    window.scrollBy({ top: amount, behavior: "smooth" });
  };

  // Keyboard shortcut listener for Yannick Gregoire HUD shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore keypresses inside input or textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      const key = e.key.toLowerCase();
      if (key === "h") scrollToSection("header");
      else if (key === "b") scrollToSection("biography");
      else if (key === "p") scrollToSection("projects");
      else if (key === "s") scrollToSection("services");
      else if (key === "c") scrollToSection("contact");
      else if (key === "i") toggleInvert();
      else if (e.key === "ArrowUp") scrollByAmount(-300);
      else if (e.key === "ArrowDown") scrollByAmount(300);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 py-3 px-4 sm:px-8 border-t border-current bg-inherit font-mono select-none shadow-2xl backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs sm:text-sm font-bold gap-y-2">
        
        {/* Shortcut Commands */}
        <div className="flex flex-wrap items-center space-x-4 sm:space-x-8">
          <button
            onClick={() => scrollToSection("header")}
            className="hover:text-accent transition-colors flex items-center space-x-1"
          >
            <span className="opacity-60">^H</span>
            <span>HOME</span>
          </button>

          <button
            onClick={() => scrollToSection("biography")}
            className="hover:text-accent transition-colors flex items-center space-x-1"
          >
            <span className="opacity-60">^B</span>
            <span>BIOGRAPHY</span>
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-accent transition-colors flex items-center space-x-1"
          >
            <span className="opacity-60">^P</span>
            <span>PROJECTS</span>
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-accent transition-colors flex items-center space-x-1"
          >
            <span className="opacity-60">^S</span>
            <span>SERVICES</span>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-accent transition-colors flex items-center space-x-1"
          >
            <span className="opacity-60">^C</span>
            <span>CONTACT</span>
          </button>
        </div>

        {/* Scroll & Theme Invert Control */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <button
            onClick={() => scrollByAmount(-400)}
            className="hover:text-accent transition-colors flex items-center space-x-1"
          >
            <span className="opacity-60">^↑</span>
            <span>PAGE UP</span>
          </button>

          <button
            onClick={() => scrollByAmount(400)}
            className="hover:text-accent transition-colors flex items-center space-x-1"
          >
            <span className="opacity-60">^↓</span>
            <span>PAGE DOWN</span>
          </button>

          <button
            onClick={toggleInvert}
            className="px-2.5 py-1 bg-accent text-black font-extrabold uppercase hover:opacity-90 transition-opacity flex items-center space-x-1"
            title="Press 'I' on keyboard to toggle theme color inversion"
          >
            <span className="opacity-80">^I</span>
            <span>INVERT</span>
          </button>
        </div>

      </div>
    </div>
  );
}
