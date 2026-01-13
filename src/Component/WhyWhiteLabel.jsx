import React from "react";
import {
  Target,
  Send,
  DollarSign,
  Gem,
  CheckCircle,
  BarChart3,
} from "lucide-react";

export default function WhyWhiteLabel() {
  const features = [
    {
      icon: <Target size={28} />,
      title: "Tailored Solutions",
      desc: "Personalized solutions designed to meet your specific goals.",
    },
    {
      icon: <Send size={28} />,
      title: "Comprehensive Support",
      desc: "Leveraging expertise to navigate challenges & maximize success.",
    },
    {
      icon: <DollarSign size={28} />,
      title: "Liquidity and Technology",
      desc: "For competitive pricing and efficient trade execution.",
    },
    {
      icon: <Gem size={28} />,
      title: "Branding Opportunities",
      desc: "Establish your own brand identity with a fully branded solution.",
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Customizability Conditions",
      desc: "Align with your business strategies & client preferences.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Established & Trusted Brand",
      desc: "Enhancing your firm's credibility and client confidence.",
    },
  ];

  return (
    <section className="relative bg-[#050617] py-28 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1c1f5f,transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <h2 className="text-center text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-16">
          Why Choose our{" "}
          <span className="text-emerald-400">White Label Solution</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl bg-gradient-to-b from-indigo-500/40 to-indigo-700/40
                         border border-white/10 backdrop-blur-xl p-8
                         transition-all duration-300 hover:-translate-y-2
                         hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.6)]"
            >
              {/* ICON */}
              <div className="w-12 h-12 mb-6 rounded-xl border border-white/20
                              flex items-center justify-center text-white">
                {item.icon}
              </div>

              {/* TEXT */}
              <h3 className="text-lg font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
