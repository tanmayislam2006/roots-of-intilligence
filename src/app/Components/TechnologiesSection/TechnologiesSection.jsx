"use client"
import React, { useState } from "react";
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaFigma, 
  FaMobile, 
  FaCloud,
  FaCode,
  FaPalette,
  FaRobot,
  FaArrowRight,
  FaStar,
  FaShieldAlt,
  FaBolt
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiFlutter, 
  SiReact, 
  SiTensorflow, 
  SiOpenai, 
  SiAdobexd,
  SiFramer,
  SiWebflow,
  SiMongodb,
  SiPostgresql,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiTypescript,
  SiJavascript,
  SiTailwindcss
} from "react-icons/si";

const TechnologiesSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const technologyCategories = [
    {
      id: "frontend",
      name: "Frontend Development",
      icon: <FaReact className="w-5 h-5" />,
      description: "Modern, responsive user interfaces built with cutting-edge frameworks",
      color: "from-[#6366f1] to-[#8b5cf6]",
      technologies: [
        {
          name: "React",
          icon: <SiReact className="w-8 h-8 text-[#61DAFB]" />,
          description: "Library for building user interfaces",
          proficiency: 95,
          projects: 45
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-8 h-8 text-white" />,
          description: "React framework for production",
          proficiency: 90,
          projects: 38
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
          description: "Typed JavaScript at any scale",
          proficiency: 88,
          projects: 32
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
          description: "Utility-first CSS framework",
          proficiency: 92,
          projects: 40
        }
      ]
    },
    {
      id: "mobile",
      name: "Mobile Development",
      icon: <FaMobile className="w-5 h-5" />,
      description: "Cross-platform mobile applications with native performance",
      color: "from-[#10b981] to-[#3dd6b8]",
      technologies: [
        {
          name: "React Native",
          icon: <SiReact className="w-8 h-8 text-[#61DAFB]" />,
          description: "Native mobile apps using React",
          proficiency: 85,
          projects: 28
        },
        {
          name: "Flutter",
          icon: <SiFlutter className="w-8 h-8 text-[#02569B]" />,
          description: "Google's UI toolkit for mobile",
          proficiency: 80,
          projects: 22
        }
      ]
    },
    {
      id: "backend",
      name: "Backend & Databases",
      icon: <FaNodeJs className="w-5 h-5" />,
      description: "Scalable server architecture and data management solutions",
      color: "from-[#f59e0b] to-[#fbbf24]",
      technologies: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-8 h-8 text-[#339933]" />,
          description: "JavaScript runtime built on Chrome's V8",
          proficiency: 90,
          projects: 42
        },
        {
          name: "Python",
          icon: <FaPython className="w-8 h-8 text-[#3776AB]" />,
          description: "Powerful programming language",
          proficiency: 87,
          projects: 35
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-8 h-8 text-[#47A248]" />,
          description: "NoSQL document database",
          proficiency: 85,
          projects: 30
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-8 h-8 text-[#336791]" />,
          description: "Powerful open-source database",
          proficiency: 82,
          projects: 25
        }
      ]
    },
    {
      id: "ai",
      name: "AI & Machine Learning",
      icon: <FaRobot className="w-5 h-5" />,
      description: "Intelligent solutions powered by advanced AI algorithms",
      color: "from-[#ec4899] to-[#f973ab]",
      technologies: [
        {
          name: "TensorFlow",
          icon: <SiTensorflow className="w-8 h-8 text-[#FF6F00]" />,
          description: "End-to-end machine learning platform",
          proficiency: 78,
          projects: 18
        },
        {
          name: "OpenAI APIs",
          icon: <SiOpenai className="w-8 h-8 text-white" />,
          description: "Advanced AI models and APIs",
          proficiency: 85,
          projects: 24
        },
        {
          name: "Python ML Stack",
          icon: <FaPython className="w-8 h-8 text-[#3776AB]" />,
          description: "Scikit-learn, Pandas, NumPy",
          proficiency: 80,
          projects: 20
        }
      ]
    },
    {
      id: "design",
      name: "Design & Prototyping",
      icon: <FaPalette className="w-5 h-5" />,
      description: "Beautiful designs and interactive prototypes",
      color: "from-[#06b6d4] to-[#67e8f9]",
      technologies: [
        {
          name: "Figma",
          icon: <FaFigma className="w-8 h-8 text-[#F24E1E]" />,
          description: "Collaborative interface design tool",
          proficiency: 92,
          projects: 48
        },
        {
          name: "Adobe XD",
          icon: <SiAdobexd className="w-8 h-8 text-[#FF61F6]" />,
          description: "Vector-based design tool",
          proficiency: 85,
          projects: 26
        },
        {
          name: "Framer",
          icon: <SiFramer className="w-8 h-8 text-white" />,
          description: "Interactive prototyping platform",
          proficiency: 80,
          projects: 22
        },
        {
          name: "Webflow",
          icon: <SiWebflow className="w-8 h-8 text-[#4353FF]" />,
          description: "No-code web design platform",
          proficiency: 75,
          projects: 18
        }
      ]
    },
    {
      id: "devops",
      name: "DevOps & Cloud",
      icon: <FaCloud className="w-5 h-5" />,
      description: "Scalable infrastructure and deployment solutions",
      color: "from-[#8b5cf6] to-[#c4b5fd]",
      technologies: [
        {
          name: "AWS",
          icon: <SiAmazon className="w-8 h-8 text-[#FF9900]" />,
          description: "Cloud computing services",
          proficiency: 83,
          projects: 32
        },
        {
          name: "Docker",
          icon: <SiDocker className="w-8 h-8 text-[#2496ED]" />,
          description: "Containerization platform",
          proficiency: 80,
          projects: 28
        },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="w-8 h-8 text-[#326CE5]" />,
          description: "Container orchestration",
          proficiency: 75,
          projects: 20
        }
      ]
    }
  ];

  const currentCategory = technologyCategories.find(cat => cat.id === activeCategory);

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
            <FaCode className="w-3 h-3 text-[#ffd6f6]" />
            <span>Technology Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e9e6ff]/80 mb-6">
            Our <span className="bg-gradient-to-r from-[#8b5cf6] to-[#ec4899] bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-xl text-[#dcd6ff]/80 leading-relaxed">
            We leverage cutting-edge technologies to build scalable, performant, 
            and future-proof digital solutions for your business.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {technologyCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                    : 'bg-white/5 border-white/10 text-[#e9e6ff] hover:bg-white/10'
                }`}
              >
                {category.icon}
                <span className="font-semibold">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Current Category Content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Category Overview */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${currentCategory.color} flex items-center justify-center text-white shadow-lg`}>
                  {currentCategory.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentCategory.name}</h3>
                  <p className="text-[#dcd6ff]/80 mt-1">{currentCategory.description}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">
                    {currentCategory.technologies.reduce((acc, tech) => acc + tech.projects, 0)}+
                  </div>
                  <div className="text-sm text-[#dcd6ff]/70">Projects Completed</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1">
                    {Math.round(currentCategory.technologies.reduce((acc, tech) => acc + tech.proficiency, 0) / currentCategory.technologies.length)}%
                  </div>
                  <div className="text-sm text-[#dcd6ff]/70">Average Proficiency</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white mb-3">Why We Excel:</h4>
                {[
                  "Industry best practices",
                  "Performance optimization",
                  "Security-first approach",
                  "Scalable architecture"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#dcd6ff]/80">
                    <FaStar className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Grid */}
            <div className="grid gap-4">
              {currentCategory.technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                        {tech.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white">{tech.name}</h4>
                        <p className="text-[#dcd6ff]/70 text-sm">{tech.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">{tech.proficiency}%</div>
                      <div className="text-xs text-[#dcd6ff]/60">Proficiency</div>
                    </div>
                  </div>

                  {/* Proficiency Bar */}
                  <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] transition-all duration-1000"
                      style={{ width: `${tech.proficiency}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-xs text-[#dcd6ff]/60">
                    <span>{tech.projects} projects</span>
                    <span>Expert Level</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Technologies Overview */}
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Complete Technology Ecosystem</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologyCategories.flatMap(category => 
                category.technologies.map(tech => (
                  <div
                    key={`${category.id}-${tech.name}`}
                    className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center text-2xl">
                      {tech.icon}
                    </div>
                    <div className="text-sm font-semibold text-white">{tech.name}</div>
                    <div className="text-xs text-[#dcd6ff]/60 mt-1">{tech.proficiency}%</div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-6 items-center p-8 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/20 backdrop-blur-sm max-w-2xl mx-auto">
              <div className="text-left flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Have a specific tech requirement?</h3>
                <p className="text-[#dcd6ff]/80">
                  We're constantly learning and adapting to new technologies to meet your unique needs.
                </p>
              </div>
              <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl text-white font-semibold hover:shadow-xl transition-all duration-300">
                Discuss Technology
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;