import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garbita Chowdhury | Full-Stack Developer",
  description:
    "B.Tech CSE Student at Kalyani Govt. Engineering College (KGEC), Winner of SIH Hackathon, WBJEE Rank 1102. Full-Stack Developer specializing in Next.js 16, React 19, TypeScript, Node.js, and modern web architectures.",
  keywords: [
    "Garbita Chowdhury",
    "KGEC",
    "Kalyani Government Engineering College",
    "Full-Stack Web Developer",
    "Next.js Portfolio",
    "SIH Winner",
    "NER-SHIELD",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0f17] text-gray-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
