"use client"
import React, { useState, useEffect } from "react";
import { 
  FaSearch, 
  FaChess, 
  FaPalette, 
  FaCode, 
  FaRocket, 
  FaHeadset,
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaChartLine
} from "react-icons/fa";

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const processSteps = [
    {
      id: 1,
      title: "Discovery",
      description: "We dive deep into your business goals, target audience, and technical requirements to understand your vision completely.",
      icon: <FaSearch className="w-6 h-6" />,
      color: "from-[#6366f1] to-[#8b5cf6]",
      deliverables: ["Requirements Analysis", "Competitor Research", "User Personas", "Project Scope"],
      duration: "1-2 weeks",
      activities: ["Stakeholder Interviews", "Market Research", "Technical Assessment", "Goal Setting"]
    },
    {
      id: 2,
      title: "Strategy & Planning",
      description: "Creating a comprehensive roadmap with clear milestones, technology stack decisions, and project architecture.",
      icon: <FaChess className="w-6 h-6" />,
      color: "from-[#10b981] to-[#3dd6b8]",
      deliverables: ["Project Roadmap", "Technical Specification", "Timeline", "Budget Estimate"],
      duration: "2-3 weeks",
      activities: ["Architecture Planning", "Technology Selection", "Milestone Mapping", "Risk Assessment"]
    },
    {
      id: 3,
      title: "Design",
      description: "Crafting intuitive user experiences and beautiful interfaces that align with your brand and user needs.",
      icon: <FaPalette className="w-6 h-6" />,
      color: "from-[#f59e0b] to-[#fbbf24]",
      deliverables: ["Wireframes", "UI Designs", "Prototypes", "Design System"],
      duration: "3-4 weeks",
      activities: ["User Flows", "Visual Design", "Interaction Design", "Usability Testing"]
    },
    {
      id: 4,
      title: "Development",
      description: "Building robust, scalable solutions using cutting-edge technologies and best development practices.",
      icon: <FaCode className="w-6 h-6" />,
      color: "from-[#ec4899] to-[#f973ab]",
      deliverables: ["Functional Product", "Code Repository", "API Documentation", "Admin Panel"],
      duration: "6-12 weeks",
      activities: ["Agile Development", "Code Reviews", "Integration Testing", "Performance Optimization"]
    },
    {
      id: 5,
      title: "QA & Launch",
      description: "Rigorous testing across all devices and platforms followed by seamless deployment to production.",
      icon: <FaRocket className="w-6 h-6" />,
      color: "from-[#06b6d4] to-[#67e8f9]",
      deliverables: ["Test Reports", "Deployed Application", "Launch Plan", "User Training"],
      duration: "2-3 weeks",
      activities: ["Automated Testing", "User Acceptance Testing", "Security Audit", "Deployment"]
    },
    {
      id: 6,
      title: "Support & Scale",
      description: "Ongoing maintenance, performance monitoring, and scaling solutions as your business grows.",
      icon: <FaHeadset className="w-6 h-6" />,
      color: "from-[#8b5cf6] to-[#c4b5fd]",
      deliverables: ["Support Plan", "Analytics Dashboard", "Scaling Strategy", "Regular Updates"],
      duration: "Ongoing",
      activities: ["Performance Monitoring", "Feature Updates", "Security Patches", "Scalability Planning"]
    }
  ];

  const stats = [
    { number: "98%", label: "Projects Delivered on Time" },
    { number: "50+", label: "Successful Launches" },
    { number: "4.9/5", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
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
            <span>Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e9e6ff]/80 mb-6">
            How We <span className="bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-[#dcd6ff]/80 leading-relaxed">
            A proven, transparent process that ensures your project's success from concept to launch and beyond.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#e9e6ff] to-[#dcd6ff] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-[#dcd6ff]/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Process Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-20 bottom-20 w-0.5 bg-gradient-to-b from-[#6366f1] via-[#ec4899] to-[#8b5cf6] rounded-full hidden lg:block" />
            
            {/* Steps */}
            <div className="space-y-8 lg:space-y-12">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  className={`relative flex flex-col lg:flex-row items-start gap-8 group cursor-pointer ${
                    activeStep === index ? 'scale-105' : 'scale-100'
                  } transition-transform duration-500`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Number & Icon */}
                  <div className="flex items-center gap-6 lg:w-48 lg:justify-end">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg relative z-10 transition-all duration-300 ${
                      activeStep === index ? 'ring-4 ring-white/20' : ''
                    }`}>
                      {step.icon}
                    </div>
                    <div className="lg:hidden">
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      <div className="text-sm text-[#dcd6ff]/60 mt-1">{step.duration}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="lg:flex lg:items-center lg:justify-between lg:mb-4">
                      <div className="hidden lg:block">
                        <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                        <div className="text-[#dcd6ff]/60 mt-1">{step.duration}</div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4 lg:mb-0">
                        {step.activities.map((activity, activityIndex) => (
                          <span
                            key={activityIndex}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#dcd6ff]/70"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                      {/* Description & Deliverables */}
                      <div className="space-y-4">
                        <p className="text-[#dcd6ff]/80 leading-relaxed">
                          {step.description}
                        </p>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-white mb-2">Key Deliverables:</h4>
                          <ul className="space-y-2">
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                              <li key={deliverableIndex} className="flex items-center gap-2 text-sm text-[#dcd6ff]/70">
                                <FaCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Visual Progress Bar */}
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm font-semibold text-white">Progress</span>
                          <span className="text-sm text-[#dcd6ff]/60">{step.duration}</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${step.color} rounded-full transition-all duration-1000 ${
                              activeStep === index ? 'w-full' : 'w-0'
                            }`}
                          />
                        </div>
                        
                        {/* Step Status */}
                        <div className="flex items-center gap-2 mt-4">
                          <div className={`w-2 h-2 rounded-full ${
                            activeStep === index ? 'bg-green-400 animate-pulse' : 
                            activeStep > index ? 'bg-green-400' : 'bg-white/30'
                          }`} />
                          <span className="text-sm text-[#dcd6ff]/70">
                            {activeStep === index ? 'In Progress' : 
                             activeStep > index ? 'Completed' : 'Upcoming'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step Navigation */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              {processSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row gap-6 items-center p-8 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-sm max-w-2xl mx-auto">
              <div className="text-left flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to start your journey?</h3>
                <p className="text-[#dcd6ff]/80">
                  Let's begin with discovery and turn your vision into reality.
                </p>
              </div>
              <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl text-white font-semibold hover:shadow-xl transition-all duration-300">
                Start Discovery Phase
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;