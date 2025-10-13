"use client"
import React, { useState } from "react";
import { 
  FaCloud, 
  FaShoppingCart, 
  FaHeart, 
  FaGraduationCap, 
  FaChartLine, 
  FaRocket,
  FaArrowRight,
  FaExternalLinkAlt,
  FaMobile,
  FaShieldAlt,
  FaUsers,
  FaLightbulb
} from "react-icons/fa";

const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      id: 1,
      name: "SaaS",
      icon: <FaCloud className="w-6 h-6" />,
      description: "Scalable cloud solutions that drive efficiency and growth",
      color: "from-[#6366f1] to-[#8b5cf6]",
      features: ["Cloud Architecture", "Subscription Management", "API Integration", "Scalable Infrastructure"],
      caseStudy: {
        title: "CloudFlow CRM",
        result: "300% growth in user engagement",
        description: "Revolutionized customer relationship management with AI-powered automation"
      }
    },
    {
      id: 2,
      name: "E-commerce",
      icon: <FaShoppingCart className="w-6 h-6" />,
      description: "Seamless shopping experiences that convert and retain customers",
      color: "from-[#10b981] to-[#3dd6b8]",
      features: ["Payment Integration", "Inventory Management", "Personalization", "Mobile Optimization"],
      caseStudy: {
        title: "StyleCart Platform",
        result: "45% increase in conversions",
        description: "Built a personalized shopping experience with real-time recommendations"
      }
    },
    {
      id: 3,
      name: "Healthcare",
      icon: <FaHeart className="w-6 h-6" />,
      description: "Digital health solutions improving patient care and outcomes",
      color: "from-[#ec4899] to-[#f973ab]",
      features: ["HIPAA Compliance", "Telemedicine", "Patient Portals", "Data Security"],
      caseStudy: {
        title: "HealthConnect Pro",
        result: "60% faster patient onboarding",
        description: "Developed secure telemedicine platform serving 50K+ patients monthly"
      }
    },
    {
      id: 4,
      name: "EdTech",
      icon: <FaGraduationCap className="w-6 h-6" />,
      description: "Interactive learning platforms that engage and educate",
      color: "from-[#f59e0b] to-[#fbbf24]",
      features: ["LMS Integration", "Interactive Content", "Progress Tracking", "Mobile Learning"],
      caseStudy: {
        title: "LearnSphere Academy",
        result: "85% student completion rate",
        description: "Created immersive learning environment with gamified educational content"
      }
    },
    {
      id: 5,
      name: "Fintech",
      icon: <FaChartLine className="w-6 h-6" />,
      description: "Secure financial technology solutions for modern banking",
      color: "from-[#06b6d4] to-[#67e8f9]",
      features: ["Payment Processing", "Fraud Detection", "Blockchain", "Financial Analytics"],
      caseStudy: {
        title: "SecurePay Gateway",
        result: "99.9% uptime reliability",
        description: "Built enterprise-grade payment processing system handling $50M+ monthly"
      }
    },
    {
      id: 6,
      name: "Startups / MVPs",
      icon: <FaRocket className="w-6 h-6" />,
      description: "Rapid prototyping and MVP development to validate ideas",
      color: "from-[#8b5cf6] to-[#c4b5fd]",
      features: ["Rapid Development", "Market Validation", "Investor Ready", "Scalable MVP"],
      caseStudy: {
        title: "QuickLaunch Accelerator",
        result: "12 startups funded in 6 months",
        description: "Accelerated MVP development program with 90% success rate"
      }
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "3M+", label: "Users Reached" },
    { number: "15", label: "Industries Served" }
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#120427] via-[#2a1140] to-[#3b0b47] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-sm text-[#f3e9ff] backdrop-blur-sm mb-6">
            <FaLightbulb className="w-3 h-3 text-[#ffd6f6]" />
            <span>Industry Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e9e6ff]/80 mb-6">
            Solutions for <span className="bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">Every Industry</span>
          </h2>
          <p className="text-xl text-[#dcd6ff]/80 leading-relaxed">
            We specialize in delivering cutting-edge digital solutions tailored to the unique 
            challenges and opportunities of your industry.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#e9e6ff] to-[#dcd6ff] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-[#dcd6ff]/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Industry List */}
          <div className="lg:col-span-1 space-y-4">
            {industries.map((industry, index) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group ${
                  activeIndustry === index
                    ? 'bg-white/10 border-white/20 shadow-lg shadow-purple-500/20'
                    : 'bg-white/5 border-white/10 hover:bg-white/8'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-white shadow-lg`}>
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg mb-1 ${
                      activeIndustry === index ? 'text-white' : 'text-[#e9e6ff]'
                    }`}>
                      {industry.name}
                    </h3>
                    <p className="text-sm text-[#dcd6ff]/70 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                  <FaArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                    activeIndustry === index 
                      ? 'text-white transform translate-x-1' 
                      : 'text-[#dcd6ff]/50 group-hover:translate-x-1'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Case Study Details */}
          <div className="lg:col-span-2">
            <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industries[activeIndustry].color} flex items-center justify-center text-white shadow-lg`}>
                  {industries[activeIndustry].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{industries[activeIndustry].name}</h3>
                  <p className="text-[#dcd6ff]/80">{industries[activeIndustry].description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Key Solutions</h4>
                <div className="grid grid-cols-2 gap-3">
                  {industries[activeIndustry].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#ec4899]" />
                      <span className="text-sm text-[#dcd6ff]/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
                <div className="flex items-center gap-2 mb-3">
                  <FaExternalLinkAlt className="w-4 h-4 text-[#8b5cf6]" />
                  <span className="text-sm font-semibold text-white">Case Study</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {industries[activeIndustry].caseStudy.title}
                </h4>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm mb-3">
                  {industries[activeIndustry].caseStudy.result}
                </div>
                <p className="text-[#dcd6ff]/80 mb-4">
                  {industries[activeIndustry].caseStudy.description}
                </p>
                <button className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15 transition-all duration-300">
                  View Full Case Study
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#6366f1]/20 to-[#8b5cf6]/20 border border-[#6366f1]/30">
                <h4 className="text-lg font-semibold text-white mb-2">
                  Ready to transform your {industries[activeIndustry].name} business?
                </h4>
                <p className="text-[#dcd6ff]/80 mb-4">
                  Let's discuss how our expertise can drive your success.
                </p>
                <button className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300">
                  Schedule Consultation
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-2xl mx-auto">
            <div className="text-left flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">Don't see your industry?</h3>
              <p className="text-[#dcd6ff]/80">We adapt our solutions to meet your unique needs.</p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;