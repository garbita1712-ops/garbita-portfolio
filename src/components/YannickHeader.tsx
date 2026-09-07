"use client";

export default function YannickHeader() {
  return (
    <header className="w-full border-b border-current py-6 px-4 sm:px-8 font-mono overflow-x-auto select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-baseline justify-between gap-4">
        {/* Giant ASCII Title Banner */}
        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter uppercase font-mono">
          GARBITA CHOWDHURY
        </div>
        <div className="text-xs sm:text-sm font-mono opacity-80 whitespace-nowrap">
          W. <span className="underline cursor-pointer">Site of the Day</span>
        </div>
      </div>
    </header>
  );
}
