import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { 
  Send, MapPin, Phone, Mail, ChevronRight, 
  TrendingUp, Users, Globe, Award, 
  Zap, Target, Smartphone, ArrowUpRight,
  Download, Code, BarChart, Sparkles,
  Shield, Clock, MessageSquare, Briefcase,
  ExternalLink, CheckCircle, Linkedin,
  Twitter, Github, Calendar, User,
  Star, Trophy, Heart, Menu, X,
  Camera, ArrowDown
} from 'lucide-react';
import profileImage from './images/hero.jpeg'

const ModernPortfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gradientIndex, setGradientIndex] = useState(0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = ['hero', 'skills', 'education', 'contact'];
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
  const profileImageUrl = profileImage;

  const personal = {
    name: "Vishal Kumar Mahato",
    tagline: "Driving Growth Through Digital Strategy",
    role: "Digital Marketing Specialist & Trend Analyst",
    location: "Bokaro, Jharkhand",
    contact: {
      email: "contact.vishalmahato@gmail.com",
      phone: "+91 6202357182",
      linkedin: "https://linkedin.com/in/vishal-mahato",
      twitter: "https://twitter.com/vishalmahato"
    },
    stats: [
      { value: "50+", label: "Projects", icon: <Briefcase size={20} /> },
      { value: "2+", label: "Years Experience", icon: <Clock size={20} /> },
      { value: "100%", label: "Client Satisfaction", icon: <Heart size={20} /> },
      { value: "24/7", label: "Availability", icon: <Shield size={20} /> }
    ]
  };

  const skills = [
    {
      category: "Core Expertise",
      items: [
        { name: "Facebook Ads", level: 95, icon: <Target /> },
        { name: "Instagram Ads", level: 90, icon: <Smartphone /> },
        { name: "Google Ads", level: 85, icon: <TrendingUp /> },
        { name: "ROI Optimization", level: 92, icon: <BarChart /> }
      ]
    },
    {
      category: "Lead Generation",
      items: [
        { name: "LinkedIn Outreach", level: 88, icon: <Users /> },
        { name: "Google Maps Scraping", level: 85, icon: <Globe /> },
        { name: "Funnel Strategy", level: 90, icon: <Sparkles /> },
        { name: "CRM Management", level: 87, icon: <Code /> }
      ]
    }
  ];

  const achievements = [
    "Increased client ROI by 300% within 3 months",
    "Generated 5000+ qualified leads in 2024",
    "Managed ₹50L+ in ad spend with 4x ROAS",
    "Built viral content with 1M+ organic reach"
  ];

  const navItems = ['hero', 'skills', 'education', 'contact'];

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1f] to-[#0f172a] text-slate-200 font-sans overflow-x-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
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
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px),
                             linear-gradient(to bottom, #888 1px, transparent 1px)`,
            backgroundSize: 'clamp(30px, 8vw, 50px) clamp(30px, 8vw, 50px)'
          }}
        />
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
            ? 'bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/10 py-3 md:py-4 shadow-xl'
            : 'py-4 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
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
              <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-[#0f172a] animate-pulse"></div>
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
                    : 'text-slate-400 hover:text-white'
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
                <MessageSquare size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-white/10"
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div 
          className={`md:hidden absolute top-full left-0 right-0 bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/10 ${
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
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
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
      <section id="hero" className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-32 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border border-cyan-500/30 text-cyan-300 text-xs md:text-sm font-bold uppercase tracking-wider mb-6 md:mb-8"
              variants={floatingAnimation}
              animate="animate"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Open to Opportunities
              <ChevronRight size={14} className="md:size-4" />
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-6 md:mb-8">
              Digital Growth
              <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradients[gradientIndex]} transition-all duration-1000`}>
                Architect
              </span>
            </h1>

            {/* Type Animation */}
            <div className="h-8 mb-6 text-lg sm:text-xl">
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

            {/* Tagline */}
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-8 md:mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Transforming digital presence into measurable revenue. Expert in ads management, 
              lead generation, and viral content strategy with proven ROI.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {personal.stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="p-3 sm:p-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/10"
                  whileHover={{ y: -5, borderColor: '#06b6d4' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                      {React.cloneElement(stat.icon, { size: window.innerWidth < 640 ? 16 : 20 })}
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button 
                className="group relative overflow-hidden flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold shadow-lg shadow-cyan-500/20 text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} className="md:size-5" />
                Download Resume
              </motion.button>
              
              <motion.a 
                href="#contact" 
                className="flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl font-semibold border-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all text-sm md:text-base"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare size={18} className="md:size-5" />
                Schedule Call
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl"
              variants={floatingAnimation}
              animate="animate"
            >
              {/* Tech floating chips */}
              {["Facebook Ads", "Google Ads", "Instagram", "Lead Gen"].map((tech, i) => (
                <motion.div
                  key={tech}
                  className="absolute bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-slate-700 z-30"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: Math.cos(i * 90) * 100,
                    y: Math.sin(i * 90) * 100
                  }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.2, backgroundColor: "rgba(6, 182, 212, 0.2)" }}
                >
                  {tech}
                </motion.div>
              ))}

              {/* Profile Image */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                      <img 
                        src={profileImageUrl} 
                        alt="Vishal Kumar Mahato" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Online Status Badge */}
                    <motion.div 
                      className="absolute bottom-6 right-6 md:bottom-8 md:right-8"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <div className="relative">
                        <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center border-2 border-[#0f172a] shadow-lg">
                          <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20 blur-2xl -z-10 animate-pulse-slow"></div>
            </motion.div>
            
            {/* Name and Role Overlay */}
            <motion.div 
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-xs"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-2xl">
                <h3 className="text-lg md:text-xl font-bold text-white text-center">{personal.name}</h3>
                <p className="text-cyan-400 text-sm md:text-base text-center font-medium">{personal.role}</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <MapPin size={12} className="text-slate-400" />
                  <span className="text-xs text-slate-400">{personal.location}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Down indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 flex flex-col items-center cursor-pointer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse", delay: 1.5 }}
          onClick={() => handleNavClick('skills')}
        >
          <span className="text-xs sm:text-sm mb-1">Scroll down</span>
          <ArrowDown size={16} className="sm:w-5 sm:h-5" />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-16 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Digital <span className="text-cyan-400">Mastery</span> Matrix
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-3xl mx-auto px-4">
            A comprehensive toolkit of modern digital marketing skills, 
            continuously evolving with industry trends
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div 
              key={categoryIndex} 
              className="bg-gradient-to-br from-white/5 to-transparent rounded-2xl md:rounded-3xl border border-white/10 p-6 md:p-8 backdrop-blur-sm"
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
                          className="p-1.5 md:p-2 rounded-lg bg-white/5 text-slate-400"
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                        >
                          {React.cloneElement(skill.icon, { size: window.innerWidth < 768 ? 18 : 24 })}
                        </motion.div>
                        <span className="font-medium text-white text-sm md:text-base">{skill.name}</span>
                      </div>
                      <span className="font-bold text-cyan-400 text-sm md:text-base">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
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
          className="bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-2xl md:rounded-3xl border border-white/10 p-6 md:p-8"
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
                className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/10"
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
                <p className="text-sm md:text-base text-slate-300">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education & Details Section */}
      <section id="education" className="relative py-16 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
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
            
            <div className="space-y-6 md:space-y-8 border-l-2 border-white/10 ml-2 md:ml-3 pl-6 md:pl-10 relative">
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
                  <div className={`absolute -left-[42px] md:-left-[54px] top-1 w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-[#0a0f1f] flex items-center justify-center ${
                    edu.highlight 
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-500' 
                      : 'bg-slate-700'
                  }`}>
                    {edu.highlight && <Star size={window.innerWidth < 768 ? 10 : 12} className="text-white" />}
                  </div>
                  
                  <motion.div 
                    className="bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6"
                    whileHover={{ y: -3, borderColor: '#06b6d4' }}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3 md:mb-4">
                      <h4 className="text-lg md:text-xl font-bold text-white">{edu.title}</h4>
                      <span className="px-2 py-1 sm:px-3 sm:py-1 bg-white/10 rounded-full text-xs md:text-sm text-slate-300 self-start">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-slate-400 mb-2">{edu.institution}</p>
                    <div className={`inline-flex items-center gap-2 px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-medium ${
                      edu.highlight 
                        ? 'bg-cyan-500/20 text-cyan-400' 
                        : 'bg-slate-800/50 text-slate-400'
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
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl md:rounded-3xl border border-white/10 p-6 md:p-8 backdrop-blur-sm h-full"
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
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full border-2 border-[#0f172a] flex items-center justify-center">
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
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/5 rounded-lg md:rounded-xl"
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
                      <div className="text-xs md:text-sm text-slate-400 truncate">{
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
              <div className="pt-6 md:pt-8 border-t border-white/10">
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
                      className={`p-2.5 md:p-3 rounded-lg md:rounded-xl bg-white/5 text-slate-400 hover:text-white ${social.color}`}
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
      </section>

      {/* Contact Section */}
      <footer id="contact" className="relative py-16 md:py-32 px-4 sm:px-6 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
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
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto px-4">
              I'm currently available for freelance projects and full-time positions. 
              Let's discuss how we can work together to achieve your business goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
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
                  <p className="text-xs md:text-sm text-slate-400">Quick Response</p>
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
                  <p className="text-xs md:text-sm text-slate-400">Direct Call</p>
                </div>
              </div>
              <p className="text-sm md:text-lg text-white font-medium">{personal.contact.phone}</p>
            </motion.a>
          </div>

          {/* Declaration */}
          <motion.div 
            className="text-center pt-8 md:pt-12 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xs md:text-sm text-slate-400 mb-3 md:mb-4">
              I hereby declare that the information provided above is true and correct to the best of my knowledge.
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-600">
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
      {[...Array(15)].map((_, i) => (
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
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default ModernPortfolio;