import React from "react";
import { FaRocket, FaUsers, FaAward, FaLightbulb, FaChartLine } from "react-icons/fa";

const AboutSection = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      avatar: "AC",
      color: "from-[#6366f1] to-[#8b5cf6]",
    },
    {
      name: "Sarah Martinez",
      role: "CTO",
      avatar: "SM",
      color: "from-[#10b981] to-[#3dd6b8]",
    },
    {
      name: "James Wilson",
      role: "Lead Designer",
      avatar: "JW",
      color: "from-[#f59e0b] to-[#fbbf24]",
    },
    {
      name: "Maya Patel",
      role: "AI Specialist",
      avatar: "MP",
      color: "from-[#ec4899] to-[#f973ab]",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to revolutionize digital solutions",
      icon: <FaRocket className="w-4 h-4" />,
    },
    {
      year: "2021",
      title: "First Major Client",
      description: "Secured partnership with Fortune 500 company",
      icon: <FaUsers className="w-4 h-4" />,
    },
    {
      year: "2022",
      title: "AI Division Launch",
      description: "Expanded into artificial intelligence services",
      icon: <FaLightbulb className="w-4 h-4" />,
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Awarded 'Innovation Leader' in tech sector",
      icon: <FaAward className="w-4 h-4" />,
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Opened offices in 3 new countries",
      icon: <FaChartLine className="w-4 h-4" />,
    },
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#120427] via-[#2a1140] to-[#3b0b47] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-sm text-[#f3e9ff] backdrop-blur-sm mb-6">
            <FaUsers className="w-3 h-3 text-[#ffd6f6]" />
            <span>Our Story & Vision</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e9e6ff]/80 mb-6">
            Building the Future of <span className="bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">Digital Innovation</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#e9e6ff]">Our Journey</h3>
              <p className="text-lg text-[#dcd6ff]/80 leading-relaxed">
                Founded in 2020, we began as a small team of passionate developers and designers 
                with a shared vision: to create digital solutions that not only solve problems but 
                also inspire innovation and drive meaningful change.
              </p>
              <p className="text-lg text-[#dcd6ff]/80 leading-relaxed">
                Today, we've grown into a full-service digital agency, but our core philosophy 
                remains the same - combining cutting-edge technology with human-centered design 
                to deliver exceptional results for our clients worldwide.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mb-4">
                  <FaRocket className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Our Mission</h4>
                <p className="text-[#dcd6ff]/80">
                  To empower businesses with innovative digital solutions that drive growth, 
                  enhance user experiences, and create lasting impact in an ever-evolving technological landscape.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4899] to-[#f973ab] flex items-center justify-center mb-4">
                  <FaLightbulb className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Our Vision</h4>
                <p className="text-[#dcd6ff]/80">
                  To be the leading force in digital transformation, shaping the future of technology 
                  while maintaining our commitment to excellence, innovation, and client success.
                </p>
              </div>
            </div>
          </div>

          {/* Team Avatars */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                >
                  <div className="relative mb-4">
                    <div
                      className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.color} mx-auto flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {member.avatar}
                    </div>
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{member.name}</h4>
                  <p className="text-sm text-[#dcd6ff]/70">{member.role}</p>
                </div>
              ))}
            </div>
            
            {/* Team Description */}
            <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-white mb-3">Meet Our Team</h4>
              <p className="text-[#dcd6ff]/80">
                Our diverse team of experts brings together decades of experience in AI, 
                development, design, and strategy to deliver comprehensive digital solutions 
                tailored to your unique needs.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#e9e6ff]/80 mb-4">
              Our <span className="bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">Growth Journey</span>
            </h3>
            <p className="text-lg text-[#dcd6ff]/80">
              Milestones that mark our path to innovation and excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#6366f1] to-[#ec4899] rounded-full" />
            
            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-white">
                          {milestone.icon}
                        </div>
                        <span className="text-lg font-semibold text-white">{milestone.year}</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">{milestone.title}</h4>
                      <p className="text-[#dcd6ff]/80">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-[#6366f1] to-[#ec4899] rounded-full border-4 border-[#120427] z-10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;