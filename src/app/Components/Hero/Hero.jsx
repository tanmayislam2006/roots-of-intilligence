"use client"
import React, { useState, useEffect } from "react";
import { FaPlay, FaArrowRight, FaRocket, FaPause } from "react-icons/fa";

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const clientLogos = ["Google", "Microsoft", "Apple", "Amazon", "Meta", "Netflix"];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-[#120427] via-[#2a1140] to-[#3b0b47] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23120427'/%3E%3Cstop offset='50%25' stop-color='%232a1140'/%3E%3Cstop offset='100%25' stop-color='%233b0b47'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad)'/%3E%3C/svg%3E"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <source src="/videos/hero-background.webm" type="video/webm" />
          {/* Fallback gradient background if video doesn't load */}
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#120427]/80 via-[#2a1140]/70 to-[#3b0b47]/90" />
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-1">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-sm text-[#f3e9ff] backdrop-blur-sm mb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <FaRocket className="w-3 h-3 text-[#ffd6f6] animate-pulse" />
            <span>Transforming Ideas into Digital Reality</span>
          </div>

          {/* Main Heading with Stagger Animation */}
          <div className="overflow-hidden">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className={`block bg-gradient-to-r from-[#e9e6ff] via-[#dcd6ff] to-[#c4b5fd] bg-clip-text text-transparent transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                Digital Innovation
              </span>
              <span className={`block bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent transform transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                That Drives Growth
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p className={`text-xl md:text-2xl text-[#e9e6ff]/80 mb-8 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            We craft cutting-edge digital solutions powered by AI, modern development, 
            and strategic design to transform your business and accelerate success.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl font-semibold text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Let's Talk
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Button Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </button>
            
            <button className="group px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:border-white/30 transition-all duration-300 flex items-center gap-3 hover:scale-105">
              <FaPlay className="w-4 h-4" />
              See Our Work
            </button>
          </div>

          {/* Video Control */}
          <div className="flex justify-center mb-8">
            <button
              onClick={toggleVideo}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
            >
              {isVideoPlaying ? <FaPause className="w-3 h-3" /> : <FaPlay className="w-3 h-3" />}
              {isVideoPlaying ? 'Pause Background' : 'Play Background'}
            </button>
          </div>

          {/* Client Logos with Enhanced Animation */}
          <div className="relative">
            <p className="text-[#dcd6ff]/60 text-sm mb-6 transform transition-all duration-1000 delay-1000">
              Trusted by innovative companies worldwide
            </p>
            
            {/* Double Marquee for Seamless Loop */}
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center px-8 py-4 mx-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm text-[#e9e6ff]/70 font-medium hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
                  >
                    <span className="group-hover:text-white transition-colors">{logo}</span>
                    <div className="w-1 h-1 rounded-full bg-[#8b5cf6] ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center">
          <span className="text-[#dcd6ff]/60 text-sm mb-2 animate-pulse">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group cursor-pointer hover:border-white/50 transition-colors">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce group-hover:bg-white/70 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;