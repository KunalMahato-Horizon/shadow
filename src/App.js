import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { 
  MapPin, Phone, Mail, 
  TrendingUp, Globe, Award, 
  Zap, Target, ArrowUpRight,
  Download, Sparkles,
  Shield, Clock, MessageSquare, Briefcase,
  ExternalLink, CheckCircle, Linkedin,
  Twitter, Calendar, User,
  Star, Trophy, Heart, Menu, X,
  Camera, ArrowDown, Facebook, Instagram,
  BarChart3, Users as UsersIcon
} from 'lucide-react';
import heroImage from './images/hero.jpeg';

const ModernPortfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gradientIndex, setGradientIndex] = useState(0);
  const [counters, setCounters] = useState({
    projects: 0,
    years: 0,
    satisfaction: 0,
    availability: 0
  });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = ['home', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated counters
  useEffect(() => {
    const duration = 2000;
    const values = {
      projects: 50,
      years: 2,
      satisfaction: 100,
      availability: 24
    };

    Object.keys(values).forEach(key => {
      const target = values[key];
      const stepTime = Math.abs(Math.floor(duration / target));
      let current = 0;
      
      const timer = setInterval(() => {
        current += key === 'satisfaction' ? 1 : 0.1;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepTime);
      
      return () => clearInterval(timer);
    });
  }, []);

  // Gradient rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % 3);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle navigation click
  const handleNavClick = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Gradient options
  const gradients = [
    "from-cyan-400 to-blue-400",
    "from-purple-400 to-pink-400",
    "from-teal-400 to-emerald-400"
  ];

  // Profile image URL
  const profileImageUrl = heroImage;

  const personal = {
    name: "Vishal Kumar Mahato",
    tagline: "Driving Growth Through Digital Strategy",
    role: "Digital Marketing Specialist & Trend Analyst",
    location: "Bokaro, Jharkhand",
    contact: {
      email: "contact.vishalmahato@gmail.com",
      phone: "+91 6202357182",
      linkedin: "https://www.linkedin.com/in/vishal-kumar-mahato-83ab50318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "https://x.com/IMSHADOW555182"
    },
    stats: [
      { value: `${counters.projects}+`, label: "Projects", icon: <Briefcase /> },
      { value: `${counters.years}+`, label: "Years Experience", icon: <Clock /> },
      { value: `${counters.satisfaction}%`, label: "Client Satisfaction", icon: <Heart /> },
      { value: `${counters.availability}/7`, label: "Availability", icon: <Shield /> }
    ]
  };

  const skills = [
    {
      category: "Core Expertise",
      items: [
        { name: "Facebook Ads", level: 95, icon: <Facebook size={20} /> },
        { name: "Instagram Ads", level: 90, icon: <Instagram size={20} /> },
        { name: "Google Ads", level: 85, icon: <TrendingUp size={20} /> },
        { name: "ROI Optimization", level: 92, icon: <BarChart3 size={20} /> }
      ]
    },
    {
      category: "Lead Generation",
      items: [
        { name: "LinkedIn Outreach", level: 88, icon: <Linkedin size={20} /> },
        { name: "Google Maps Scraping", level: 85, icon: <Globe size={20} /> },
        { name: "Funnel Strategy", level: 90, icon: <Sparkles size={20} /> },
        { name: "CRM Management", level: 87, icon: <UsersIcon size={20} /> }
      ]
    }
  ];

  const achievements = [
    "Increased client ROI by 300% within 3 months",
    "Generated 5000+ qualified leads in 2024",
    "Managed ₹50L+ in ad spend with 4x ROAS",
    "Built viral content with 1M+ organic reach"
  ];

  const projects = [
    {
      title: "E-commerce Growth Campaign",
      description: "Facebook & Instagram ads strategy for fashion brand",
      stats: "400% ROAS",
      tech: ["Facebook Ads", "Instagram", "Shopify"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Lead Generation System",
      description: "Automated LinkedIn outreach for B2B SaaS",
      stats: "2000+ Leads",
      tech: ["LinkedIn", "Automation", "CRM"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Brand Awareness Campaign",
      description: "Viral content strategy for tech startup",
      stats: "1M+ Reach",
      tech: ["Content", "SEO", "Analytics"],
      gradient: "from-teal-500 to-emerald-500"
    }
  ];

  const navItems = ['home', 'skills', 'projects', 'education', 'contact'];

  // Floating animation
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Background shapes animation
  const backgroundShapes = {
    animate: {
      rotate: 360,
      transition: {
        duration: 180,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Tech stack for floating chips
  const techStack = ["Facebook Ads", "Google Ads", "Instagram", "Lead Gen", "ROI"];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <ParticlesBackground />
        
        <motion.div 
          className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-cyan-400/10 rounded-full blur-3xl"
          variants={backgroundShapes}
          animate="animate"
        />
        <motion.div 
          className="absolute bottom-10 right-20 w-64 h-64 md:w-96 md:h-96 bg-purple-400/10 rounded-full blur-3xl"
          variants={backgroundShapes}
          animate="animate"
          style={{ rotate: 45 }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-5"></div>
      </div>

      {/* Scroll progress indicator */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 z-50"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2, delay: 1 }}
      />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 py-3 md:py-4 shadow-xl'
            : 'py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl overflow-hidden border-2 border-cyan-500/30">
                <img 
                  src={profileImageUrl} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-slate-950 animate-pulse"></div>
            </div>
            <span className="text-lg md:text-xl font-bold text-white tracking-tighter ml-2 hidden sm:block">
              Vishal<span className="text-cyan-400">.</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                className={`text-sm font-medium relative ${
                  activeSection === section
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(section);
                }}
                whileHover={{ y: -2 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400"
                    layoutId="underline"
                  />
                )}
              </motion.a>
            ))}
            
            <motion.a 
              href="#contact" 
              className="relative px-5 py-2.5 md:px-6 md:py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 text-sm md:text-base"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                Let's Talk 
                <MessageSquare size={16} />
              </span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white hover:bg-white/10"
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className={`md:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 ${
            mobileMenuOpen ? 'block' : 'hidden'
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`block py-3 px-4 rounded-lg font-medium transition-all ${
                  activeSection === section
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => handleNavClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            <a 
              href="#contact" 
              className="block py-3 px-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-center shadow-lg shadow-cyan-500/25"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden py-16 md:py-0">
        <div className="container mx-auto px-4 sm:px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:w-1/2 order-2 md:order-1 mt-10 md:mt-0"
          >
            <motion.p 
              className="text-cyan-400 font-mono text-base sm:text-lg mb-3 inline-flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="animate-waving-hand mr-2">👋</span> Hello, I'm
            </motion.p>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradients[gradientIndex]} transition-all duration-1000`}>
                Vishal
              </span> 
              <span className="block mt-1">Kumar Mahato</span>
            </h1>
            
            <div className="h-8 mt-2 text-lg sm:text-xl">
              <TypeAnimation
                sequence={[
                  'Digital Marketing Specialist',
                  2000,
                  'Lead Generation Expert',
                  2000,
                  'ROI Optimization Guru',
                  2000,
                  'Facebook Ads Strategist',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-cyan-400 font-semibold"
              />
            </div>
            
            <motion.p 
              className="mt-4 text-base sm:text-lg text-gray-400 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I drive <span className="font-semibold text-cyan-400">measurable growth</span> and 
              <span className="font-semibold text-purple-400"> revenue</span> through data-driven 
              digital marketing strategies that deliver real results.
            </motion.p>

            {/* Stats - Animated counters */}
            <motion.div 
              className="mt-6 flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {personal.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400 flex items-center justify-center gap-2">
                    {React.cloneElement(stat.icon, { size: 20 })}
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div 
              className="mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('projects');
                }}
                className="px-6 py-2 sm:px-8 sm:py-3 bg-cyan-400 text-slate-950 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>
              
              <motion.button
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1Q8LKuchkKqHsRlSdd6KQBsppBq4XzWPt/view?usp=drivesdk",
                    "_blank"
                  );
                }}

                className="px-6 py-2 sm:px-8 sm:py-3 border-2 border-slate-700 rounded-full text-gray-300 font-medium hover:bg-slate-800 transition-all duration-300 flex items-center group text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-2" size={16} />
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div 
              className="mt-8 flex space-x-4 sm:space-x-5 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.a
                href={`mailto:${personal.contact.email}`}
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              
              <motion.a
                href={`tel:${personal.contact.phone}`}
                className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-110"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Phone"
              >
                <Phone size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
              
              <motion.a
                href={personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content (Hero Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 md:mt-0 md:w-2/5 flex justify-center relative order-1 md:order-2"
          >
            <motion.div 
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
              variants={floatingAnimation}
              animate="animate"
            >
              {/* Tech stack floating chips */}
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech}
                  className="absolute bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-slate-700 z-30"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: Math.cos(i * 72) * 120,
                    y: Math.sin(i * 72) * 120
                  }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.2, backgroundColor: "rgba(6, 182, 212, 0.2)" }}
                >
                  {tech}
                </motion.div>
              ))}

              {/* Main profile image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-slate-700 shadow-2xl z-10">
                <img
                  src={profileImageUrl}
                  alt="Vishal Kumar Mahato"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-slate-900 border border-cyan-400 text-white p-2 sm:p-3 rounded-xl shadow-lg z-20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="relative">
                  <div className="text-xs sm:text-sm font-bold">Digital</div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-slate-900 border border-purple-400 text-white p-2 sm:p-3 rounded-xl shadow-lg z-20"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <div className="relative">
                  <div className="text-xs sm:text-sm font-bold">Ads</div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                </div>
              </motion.div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 blur-2xl -z-10 animate-pulse-slow"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse", delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 flex flex-col items-center cursor-pointer"
          onClick={() => handleNavClick('skills')}
        >
          <span className="text-xs sm:text-sm mb-1">Scroll down</span>
          <ArrowDown size={16} className="sm:w-5 sm:h-5" />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Digital <span className="text-cyan-400">Mastery</span> Matrix
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-4">
              A comprehensive toolkit of modern digital marketing skills, 
              continuously evolving with industry trends
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div 
                key={categoryIndex} 
                className="bg-slate-900/50 rounded-2xl md:rounded-3xl border border-slate-800 p-6 md:p-8 backdrop-blur-sm"
                initial={{ opacity: 0, x: categoryIndex === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                whileHover={{ y: -5, borderColor: '#06b6d4' }}
              >
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                    {React.cloneElement(categoryIndex === 0 ? <Zap className="text-cyan-400" /> : <Target className="text-purple-400" />, 
                      { size: window.innerWidth < 768 ? 24 : 32 })}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{skillCategory.category}</h3>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      className="group"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-1 md:mb-2">
                        <div className="flex items-center gap-2 md:gap-3">
                          <motion.div 
                            className="p-1.5 md:p-2 rounded-lg bg-white/5 text-gray-400"
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                          >
                            {React.cloneElement(skill.icon, { size: window.innerWidth < 768 ? 18 : 24 })}
                          </motion.div>
                          <span className="font-medium text-white text-sm md:text-base">{skill.name}</span>
                        </div>
                        <span className="font-bold text-cyan-400 text-sm md:text-base">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 md:h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <motion.div 
            className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-2xl md:rounded-3xl border border-slate-800 p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
              <Trophy className="text-yellow-400" size={window.innerWidth < 768 ? 20 : 24} /> 
              Notable Achievements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-slate-900/50 rounded-xl md:rounded-2xl border border-slate-800"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ borderColor: '#06b6d4', backgroundColor: 'rgba(255,255,255,0.07)' }}
                >
                  <motion.div 
                    className="p-1.5 md:p-2 bg-green-500/20 rounded-lg text-green-400 flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <CheckCircle size={window.innerWidth < 768 ? 16 : 20} />
                  </motion.div>
                  <p className="text-sm md:text-base text-gray-300">
                    {achievement}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Featured <span className="text-cyan-400">Campaigns</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-4">
              Real results from strategic digital marketing campaigns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl md:rounded-3xl blur-xl"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, var(${project.gradient}))`
                  }}
                />
                
                <div className="relative bg-slate-900/50 border border-slate-800 rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-sm h-full">
                  <div className={`h-2 w-16 rounded-full mb-6 bg-gradient-to-r ${project.gradient}`}></div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-6 text-sm md:text-base">{project.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white">{project.stats}</div>
                    <div className="text-gray-400 text-sm">Performance Metric</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-800 rounded-full text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="text-cyan-400" size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Details Section */}
      <section id="education" className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* Education Timeline */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8 md:mb-10">
                <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  <Award className="text-cyan-400" size={window.innerWidth < 768 ? 24 : 28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Academic Journey</h3>
              </div>
              
              <div className="space-y-6 md:space-y-8 border-l-2 border-slate-800 ml-2 md:ml-3 pl-6 md:pl-10 relative">
                {[
                  { 
                    title: "ITI - Electrician", 
                    institution: "Birsa Vikas ITI (NCVT)", 
                    score: "90%", 
                    year: "2023",
                    highlight: true 
                  },
                  { 
                    title: "12th Intermediate", 
                    institution: "FMHS Inter College", 
                    score: "58.6%", 
                    year: "2021",
                    highlight: false 
                  },
                  { 
                    title: "10th Matriculation", 
                    institution: "FMHS Kapuria", 
                    score: "80.40%", 
                    year: "2019",
                    highlight: false 
                  }
                ].map((edu, index) => (
                  <motion.div 
                    key={index} 
                    className="relative group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className={`absolute -left-[42px] md:-left-[54px] top-1 w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-slate-950 flex items-center justify-center ${
                      edu.highlight 
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-500' 
                        : 'bg-slate-800'
                    }`}>
                      {edu.highlight && <Star size={window.innerWidth < 768 ? 10 : 12} className="text-white" />}
                    </div>
                    
                    <motion.div 
                      className="bg-slate-900/50 border border-slate-800 rounded-xl md:rounded-2xl p-4 md:p-6"
                      whileHover={{ y: -3, borderColor: '#06b6d4' }}
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3 md:mb-4">
                        <h4 className="text-lg md:text-xl font-bold text-white">{edu.title}</h4>
                        <span className="px-2 py-1 sm:px-3 sm:py-1 bg-slate-800 rounded-full text-xs md:text-sm text-gray-300 self-start">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-sm md:text-base text-gray-400 mb-2">{edu.institution}</p>
                      <div className={`inline-flex items-center gap-2 px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-medium ${
                        edu.highlight 
                          ? 'bg-cyan-500/20 text-cyan-400' 
                          : 'bg-slate-800/50 text-gray-400'
                      }`}>
                        Score: {edu.score}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Personal Profile Card */}
            <motion.div 
              className="lg:sticky lg:top-32 mt-8 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="bg-slate-900/50 border border-slate-800 rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-sm h-full"
                whileHover={{ y: -5 }}
              >
                {/* Profile Image in Card */}
                <div className="flex flex-col items-center mb-6 md:mb-8">
                  <motion.div 
                    className="relative mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-lg">
                      <img 
                        src={profileImageUrl} 
                        alt="Vishal Kumar Mahato" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full border-2 border-slate-950 flex items-center justify-center">
                      <Camera size={12} className="text-white md:size-4" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-white text-center">{personal.name}</h3>
                  <p className="text-cyan-400 text-sm md:text-base text-center font-medium mt-1">{personal.role}</p>
                </div>
                
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {[
                    { icon: <User />, label: "Vishal Kumar Mahato", color: "text-cyan-400" },
                    { icon: <Calendar />, label: "24/04/2003", color: "text-purple-400" },
                    { icon: <MapPin />, label: "Bokaro, Jharkhand", color: "text-green-400" },
                    { icon: <Globe />, label: "Hindi, English (Fluent)", color: "text-yellow-400" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-slate-800/50 rounded-lg md:rounded-xl"
                      whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <div className={`p-1.5 md:p-2 rounded-lg ${item.color} bg-white/10`}>
                        {React.cloneElement(item.icon, { size: window.innerWidth < 768 ? 18 : 20 })}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs md:text-sm text-gray-400 truncate">{
                          index === 0 ? 'Full Name' : 
                          index === 1 ? 'Date of Birth' : 
                          index === 2 ? 'Location' : 'Languages'
                        }</div>
                        <div className="text-white font-medium text-sm md:text-base truncate">{item.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-6 md:pt-8 border-t border-slate-800">
                  <h4 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4">Connect With Me</h4>
                  <div className="flex gap-3 md:gap-4 justify-center md:justify-start">
                    {[
                      { icon: <Mail />, href: `mailto:${personal.contact.email}`, color: 'hover:bg-red-500/20' },
                      { icon: <Phone />, href: `tel:${personal.contact.phone}`, color: 'hover:bg-green-500/20' },
                      { icon: <Linkedin />, href: personal.contact.linkedin, color: 'hover:bg-blue-500/20' },
                      { icon: <Twitter />, href: personal.contact.twitter, color: 'hover:bg-sky-500/20' }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2.5 md:p-3 rounded-lg md:rounded-xl bg-white/5 text-gray-400 hover:text-white ${social.color}`}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                      >
                        {React.cloneElement(social.icon, { size: window.innerWidth < 768 ? 18 : 20 })}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="relative py-20 md:py-32">
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 text-xs md:text-sm font-bold uppercase mb-4 md:mb-6"
              variants={floatingAnimation}
              animate="animate"
            >
              <Sparkles size={14} className="md:size-4" />
              Ready to Collaborate
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Let's Build Something
              <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradients[gradientIndex]} transition-all duration-1000`}>
                Extraordinary
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              I'm currently available for freelance projects and full-time positions. 
              Let's discuss how we can work together to achieve your business goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20 max-w-4xl mx-auto">
            {/* Contact Cards */}
            <motion.a 
              href={`mailto:${personal.contact.email}`}
              className="group relative overflow-hidden bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-2xl md:rounded-3xl border border-cyan-500/20 p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, borderColor: '#06b6d4' }}
            >
              <div className="absolute top-3 right-3 md:top-4 md:right-4">
                <ExternalLink className="text-cyan-400/50 group-hover:text-cyan-400 transition-colors" 
                  size={window.innerWidth < 768 ? 18 : 20} />
              </div>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Mail size={window.innerWidth < 768 ? 20 : 24} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Email</h3>
                  <p className="text-xs md:text-sm text-gray-400">Quick Response</p>
                </div>
              </div>
              <p className="text-sm md:text-lg text-white font-medium break-all">{personal.contact.email}</p>
            </motion.a>

            <motion.a 
              href={`tel:${personal.contact.phone}`}
              className="group relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl md:rounded-3xl border border-purple-500/20 p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, borderColor: '#a855f7' }}
            >
              <div className="absolute top-3 right-3 md:top-4 md:right-4">
                <ExternalLink className="text-purple-400/50 group-hover:text-purple-400 transition-colors"
                  size={window.innerWidth < 768 ? 18 : 20} />
              </div>
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-purple-500/20 text-purple-400">
                  <Phone size={window.innerWidth < 768 ? 20 : 24} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Phone</h3>
                  <p className="text-xs md:text-sm text-gray-400">Direct Call</p>
                </div>
              </div>
              <p className="text-sm md:text-lg text-white font-medium">{personal.contact.phone}</p>
            </motion.a>
          </div>

          {/* Declaration */}
          <motion.div 
            className="text-center pt-8 md:pt-12 border-t border-slate-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
              I hereby declare that the information provided above is true and correct to the best of my knowledge.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              <p className="text-xs md:text-sm">© {new Date().getFullYear()} Vishal Kumar Mahato | All Rights Reserved</p>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 p-3 md:bottom-8 md:right-8 md:p-4 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-2xl shadow-cyan-500/30 z-50 ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUpRight size={20} className="md:size-6" />
      </motion.button>
    </div>
  );
};

// Particles Background Component
const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            y: [null, `calc(${Math.random() * 100}% + 100px)`],
            x: [null, `calc(${Math.random() * 100}% + ${Math.random() > 0.5 ? 50 : -50}px)`],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default ModernPortfolio;