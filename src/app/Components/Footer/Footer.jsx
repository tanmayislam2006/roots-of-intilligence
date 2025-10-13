import React from "react";
import { 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaDribbble, 
  FaInstagram,
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaRocket,
  FaAward,
  FaShieldAlt,
  FaHeart
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "#" },
        { name: "Mobile Apps", href: "#" },
        { name: "AI Solutions", href: "#" },
        { name: "UI/UX Design", href: "#" },
        { name: "Consulting", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Process", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "SLA", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    {
      name: "Twitter",
      icon: <FaTwitter className="w-4 h-4" />,
      href: "#",
      color: "hover:text-[#1DA1F2]"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-4 h-4" />,
      href: "#",
      color: "hover:text-[#0077B5]"
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-4 h-4" />,
      href: "#",
      color: "hover:text-[#333]"
    },
    {
      name: "Dribbble",
      icon: <FaDribbble className="w-4 h-4" />,
      href: "#",
      color: "hover:text-[#EA4C89]"
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="w-4 h-4" />,
      href: "#",
      color: "hover:text-[#E4405F]"
    }
  ];

  const awards = [
    {
      name: "Top Development Agency 2024",
      provider: "Tech Awards",
      icon: <FaAward className="w-4 h-4 text-yellow-400" />
    },
    {
      name: "Best AI Solutions",
      provider: "Innovation Summit",
      icon: <FaRocket className="w-4 h-4 text-purple-400" />
    },
    {
      name: "Security Excellence",
      provider: "CyberSafe",
      icon: <FaShieldAlt className="w-4 h-4 text-blue-400" />
    }
  ];

  const partners = [
    { name: "Google Partner", logo: "GP" },
    { name: "AWS Advanced", logo: "AWS" },
    { name: "Microsoft Gold", logo: "MS" },
    { name: "Shopify Expert", logo: "SH" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0a041a] to-[#120427] border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Brand & Contact Section */}
            <div className="space-y-6">
              {/* Brand */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-white font-bold">
                  D
                </div>
                <span className="text-2xl font-bold text-white">DigitalCraft</span>
              </div>

              <p className="text-lg text-[#dcd6ff]/80 max-w-md leading-relaxed">
                We craft digital experiences that drive growth and transform businesses 
                through innovative technology and strategic design.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#dcd6ff]/80">
                  <FaEnvelope className="w-4 h-4 text-[#8b5cf6]" />
                  <span>hello@digitalcraft.com</span>
                </div>
                <div className="flex items-center gap-3 text-[#dcd6ff]/80">
                  <FaPhone className="w-4 h-4 text-[#8b5cf6]" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-[#dcd6ff]/80">
                  <FaMapMarkerAlt className="w-4 h-4 text-[#8b5cf6]" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 rounded-xl bg-white/5 border border-white/10 text-[#dcd6ff]/70 transition-all duration-300 ${social.color} hover:bg-white/10 hover:border-white/20 hover:scale-110`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {quickLinks.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="group flex items-center gap-2 text-[#dcd6ff]/70 hover:text-white transition-all duration-300"
                        >
                          <FaArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                          <span>{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Partners Section */}
          <div className="grid lg:grid-cols-2 gap-8 pt-12 border-t border-white/10">
            {/* Awards */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white mb-4">Awards & Recognition</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex justify-center mb-2">
                      {award.icon}
                    </div>
                    <div className="text-sm font-semibold text-white mb-1">
                      {award.name}
                    </div>
                    <div className="text-xs text-[#dcd6ff]/60">
                      {award.provider}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partners */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white mb-4">Our Partners</h3>
              <div className="grid grid-cols-4 gap-4">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold text-white mb-1">
                        {partner.logo}
                      </div>
                      <div className="text-[10px] text-[#dcd6ff]/60 leading-tight">
                        {partner.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-[#dcd6ff]/60 text-sm">
              <span>© {currentYear} DigitalCraft. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <FaHeart className="w-3 h-3 text-red-400 hidden sm:inline" />
              <span className="hidden sm:inline">by our team</span>
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-[#dcd6ff]/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#dcd6ff]/60 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-[#dcd6ff]/60 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup - Optional Additional Section */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10 backdrop-blur-sm">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold text-white mb-2">
                Stay Updated with Our Latest Projects
              </h3>
              <p className="text-[#dcd6ff]/80">
                Get insights on technology trends and case studies delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#dcd6ff]/50 focus:outline-none focus:border-[#8b5cf6] transition-colors flex-1 min-w-64"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;