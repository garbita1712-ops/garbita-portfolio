"use client";

export default function YannickServices() {
  const services = [
    {
      title: "### _ Full-Stack Web Development ⮐",
      description:
        "Architecting production-ready applications with Next.js 16, TypeScript, React, Node.js, and MongoDB. Custom end-to-end setups ensuring high accessibility, fast SSR page loads, and seamless REST/GraphQL APIs.",
    },
    {
      title: "### _ AI Telemetry & Risk Models ⮐",
      description:
        "Building real-time predictive data engines using Python, PyTorch, and FastAPI. Integrating multi-sensor ISRO telemetry metrics for early emergency warning systems and automated alert triggers.",
    },
    {
      title: "### _ Interactive UI & Motion Design ⮐",
      description:
        "Crafting memorable digital experiences with micro-animations, glassmorphism, retro ASCII terminal aesthetics, and dynamic canvas shaders across all desktop & mobile screen breakpoints.",
    },
    {
      title: "### _ System Architecture & Security ⮐",
      description:
        "Implementing robust JWT authentication (NextAuth), role-based admin controls, Docker containerization, Vercel deployments, and secure payment gateway integrations (Cashfree/Razorpay).",
    },
  ];

  return (
    <section id="services" className="w-full py-12 px-4 sm:px-8 border-b border-current font-mono">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-current pb-4">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-accent">
            [ /&gt; CAPABILITIES &amp; SERVICES ]
          </h2>
          <span className="text-xs opacity-70">EXECUTION MATRIX</span>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="ascii-box p-6 space-y-4 hover:border-accent transition-colors">
              <h3 className="text-lg font-bold text-accent font-mono">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-90">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
