"use client"
import React, { useState } from "react";
import { 
  FaFilter, 
  FaExternalLinkAlt, 
  FaGithub, 
  FaArrowRight,
  FaStar,
  FaRegHeart,
  FaShoppingCart,
  FaMobile,
  FaCloud,
  FaChartLine,
  FaGraduationCap,
  FaHeartbeat
} from "react-icons/fa";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "saas", label: "SaaS" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "healthcare", label: "Healthcare" },
    { id: "edtech", label: "EdTech" },
    { id: "fintech", label: "Fintech" },
    { id: "mobile", label: "Mobile Apps" }
  ];

  const projects = [
    {
      id: 1,
      title: "CloudFlow CRM",
      category: ["saas", "fintech"],
      description: "AI-powered customer relationship management platform with predictive analytics",
      image: "/api/placeholder/600/400",
      techStack: ["React", "Node.js", "Python", "MongoDB", "AWS"],
      kpis: [
        { metric: "300%", label: "User Growth" },
        { metric: "45%", label: "Efficiency Gain" },
        { metric: "4.9", label: "User Rating" }
      ],
      testimonial: {
        text: "This platform transformed how we manage customer relationships. The AI insights are incredible.",
        author: "Sarah Chen, CEO at TechFlow",
        role: "Chief Executive Officer"
      },
      liveLink: "#",
      caseStudyLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "StyleCart E-commerce",
      category: ["ecommerce", "mobile"],
      description: "Modern e-commerce platform with AR try-on and personalized recommendations",
      image: "/api/placeholder/600/400",
      techStack: ["Next.js", "Stripe", "Three.js", "PostgreSQL", "Vercel"],
      kpis: [
        { metric: "85%", label: "Conversion Boost" },
        { metric: "2.3x", label: "Avg. Order Value" },
        { metric: "1.2M", label: "Monthly Users" }
      ],
      testimonial: {
        text: "The AR features increased our engagement by 300%. Absolutely game-changing!",
        author: "Mike Rodriguez, CMO at FashionHub",
        role: "Chief Marketing Officer"
      },
      liveLink: "#",
      caseStudyLink: "#",
      featured: true
    },
    {
      id: 3,
      title: "HealthConnect Pro",
      category: ["healthcare", "mobile"],
      description: "Telemedicine platform with secure video consultations and health tracking",
      image: "/api/placeholder/600/400",
      techStack: ["React Native", "WebRTC", "Firebase", "Node.js", "Redis"],
      kpis: [
        { metric: "50K+", label: "Patients Served" },
        { metric: "60%", label: "Faster Onboarding" },
        { metric: "99.9%", label: "Uptime" }
      ],
      testimonial: {
        text: "Revolutionized our patient care delivery. The platform is incredibly reliable.",
        author: "Dr. Emily Watson, Medical Director",
        role: "Healthcare Director"
      },
      liveLink: "#",
      caseStudyLink: "#",
      featured: false
    },
    {
      id: 4,
      title: "LearnSphere Academy",
      category: ["edtech"],
      description: "Interactive learning platform with gamified courses and progress tracking",
      image: "/api/placeholder/600/400",
      techStack: ["Vue.js", "Laravel", "MySQL", "WebSocket", "AWS"],
      kpis: [
        { metric: "85%", label: "Completion Rate" },
        { metric: "3.5x", label: "Engagement" },
        { metric: "50K", label: "Active Learners" }
      ],
      testimonial: {
        text: "Our students love the gamified learning experience. Engagement is through the roof!",
        author: "Prof. James Wilson, Dean",
        role: "Education Director"
      },
      liveLink: "#",
      caseStudyLink: "#",
      featured: false
    },
    {
      id: 5,
      title: "SecurePay Gateway",
      category: ["fintech"],
      description: "Enterprise payment processing system with advanced fraud detection",
      image: "/api/placeholder/600/400",
      techStack: ["Java", "Spring Boot", "Kafka", "Docker", "Kubernetes"],
      kpis: [
        { metric: "$50M+", label: "Monthly Volume" },
        { metric: "99.9%", label: "Reliability" },
        { metric: "0.01%", label: "Fraud Rate" }
      ],
      testimonial: {
        text: "The most secure and reliable payment gateway we've ever used. Exceptional performance.",
        author: "David Kim, CTO at PayTech",
        role: "Chief Technology Officer"
      },
      liveLink: "#",
      caseStudyLink: "#",
      featured: true
    },
    {
      id: 6,
      title: "QuickLaunch MVP",
      category: ["saas", "mobile"],
      description: "Rapid MVP development platform for startups and innovators",
      image: "/api/placeholder/600/400",
      techStack: ["React", "FastAPI", "MongoDB", "Docker", "DigitalOcean"],
      kpis: [
        { metric: "12", label: "Startups Funded" },
        { metric: "90%", label: "Success Rate" },
        { metric: "6 weeks", label: "Avg. Launch" }
      ],
      testimonial: {
        text: "Went from idea to funded startup in 8 weeks. The platform is incredibly efficient.",
        author: "Alex Turner, Founder at InnovateLabs",
        role: "Startup Founder"
      },
      liveLink: "#",
      caseStudyLink: "#",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'saas': return <FaCloud className="w-4 h-4" />;
      case 'ecommerce': return <FaShoppingCart className="w-4 h-4" />;
      case 'healthcare': return <FaHeartbeat className="w-4 h-4" />;
      case 'edtech': return <FaGraduationCap className="w-4 h-4" />;
      case 'fintech': return <FaChartLine className="w-4 h-4" />;
      case 'mobile': return <FaMobile className="w-4 h-4" />;
      default: return <FaStar className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#120427] via-[#2a1140] to-[#3b0b47] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/10 text-sm text-[#f3e9ff] backdrop-blur-sm mb-6">
            <FaStar className="w-3 h-3 text-[#ffd6f6]" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e9e6ff]/80 mb-6">
            Our <span className="bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-[#dcd6ff]/80 leading-relaxed">
            Explore our successful projects that demonstrate our expertise in delivering 
            innovative digital solutions across various industries.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl border transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white border-transparent shadow-lg'
                  : 'bg-white/5 border-white/10 text-[#e9e6ff] hover:bg-white/10'
              }`}
            >
              <FaFilter className="w-4 h-4" />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] text-black text-xs font-semibold">
                    <FaStar className="w-3 h-3" />
                    Featured
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#6366f1]/20 to-[#ec4899]/20 flex items-center justify-center">
                  <div className="text-4xl text-white/30">
                    {getCategoryIcon(project.category[0])}
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-between p-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex gap-3">
                    <button className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors">
                      <FaGithub className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white text-sm font-semibold hover:shadow-lg transition-all">
                    Case Study
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.category.map((cat) => (
                    <div
                      key={cat}
                      className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-[#dcd6ff]/70"
                    >
                      {getCategoryIcon(cat)}
                      {cat}
                    </div>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#e9e6ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#dcd6ff]/80 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* KPIs */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {project.kpis.map((kpi, index) => (
                    <div key={index} className="text-center p-2 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-lg font-bold text-white">{kpi.metric}</div>
                      <div className="text-xs text-[#dcd6ff]/70">{kpi.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-[#dcd6ff]/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-white text-xs font-bold">
                      {project.testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#dcd6ff]/80 italic mb-1">
                        "{project.testimonial.text}"
                      </p>
                      <div className="text-xs text-[#dcd6ff]/60">
                        <div className="font-semibold">{project.testimonial.author}</div>
                        <div>{project.testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-2xl mx-auto">
            <div className="text-left flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to start your project?</h3>
              <p className="text-[#dcd6ff]/80">
                Let's discuss how we can bring your vision to life with our expertise and innovative solutions.
              </p>
            </div>
            <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl text-white font-semibold hover:shadow-xl transition-all duration-300">
              Start Your Project
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;