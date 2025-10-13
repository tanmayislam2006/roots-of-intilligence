import React from "react";
import { FaRobot, FaMobile, FaRocket, FaLaptopCode, FaPaintBrush } from "react-icons/fa";

const ExploreCategories = () => {
  const features = [
    {
      icon: <FaRobot className="w-6 h-6 text-white" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by advanced AI algorithms for automation and data-driven insights.",
      color: "from-[#6366f1] to-[#8b5cf6]",
    },
    {
      icon: <FaLaptopCode className="w-6 h-6 text-white" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
      color: "from-[#10b981] to-[#3dd6b8]",
    },
    {
      icon: <FaMobile className="w-6 h-6 text-white" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      color: "from-[#f59e0b] to-[#fbbf24]",
    },
    {
      icon: <FaPaintBrush className="w-6 h-6 text-white" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance engagement and drive conversions.",
      color: "from-[#ec4899] to-[#f973ab]",
    },
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#3b0b47] via-[#2a1140] to-[#120427] ">
      {/* small pill badge top-right */}
      <div className="absolute top-6 right-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/10 text-xs text-[#f3e9ff] backdrop-blur-sm">
          <FaRocket className="w-3 h-3 text-[#ffd6f6]" />
          <span>Premium Digital Services</span>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-4xl  text-[#e9e6ff]/80 font-semibold">
            Our Core Services
          </h2>
          <p className="mt-3 text-lg text-[#dcd6ff]/70">
            We deliver cutting-edge digital solutions that drive growth and transform businesses through innovation and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden px-6 py-8 rounded-2xl bg-white/6 border border-white/10 backdrop-blur-md hover:shadow-[0_12px_40px_rgba(139,92,246,0.12)] transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${feature.color} shadow-md`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-md text-[#e8e7ff]/75 leading-relaxed">
                {feature.description}
              </p>
              {/* light decorative border */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;