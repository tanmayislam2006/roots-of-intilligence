import React from "react";
import { FaPlay, FaArrowRight, FaRocket } from "react-icons/fa";

const Hero = () => {
  const clientLogos = [
    "Company A",
    "Company B", 
    "Company C",
    "Company D",
    "Company E"
  ];

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-[#120427] via-[#2a1140] to-[#3b0b47] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-sm text-[#f3e9ff] backdrop-blur-sm mb-8">
            <FaRocket className="w-3 h-3 text-[#ffd6f6]" />
            <span>Transforming Ideas into Digital Reality</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#e9e6ff] via-[#dcd6ff] to-[#c4b5fd] bg-clip-text text-transparent">
              Digital Innovation
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">
              That Drives Growth
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-[#e9e6ff]/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            We craft cutting-edge digital solutions powered by AI, modern development, 
            and strategic design to transform your business and accelerate success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
              Let's Talk
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold text-white backdrop-blur-sm hover:bg-white/15 transition-all duration-300 flex items-center gap-3">
              <FaPlay className="w-4 h-4" />
              See Our Work
            </button>
          </div>

          {/* Client Logos */}
          <div className="relative">
            <p className="text-[#dcd6ff]/60 text-sm mb-6">Trusted by innovative companies worldwide</p>
            
            {/* Rotating Logos Container */}
            <div className="relative overflow-hidden">
              <div className="flex space-x-12 animate-marquee whitespace-nowrap">
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center px-6 py-3 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm text-[#e9e6ff]/70 font-medium"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;