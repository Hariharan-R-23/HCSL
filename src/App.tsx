/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  BookOpen,
  HeartHandshake,
  Award,
  Sparkles,
  Menu,
  X,
  Mail,
  Instagram,
  ArrowUp,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Compass,
  GraduationCap
} from 'lucide-react';

import { Logo } from './components/Logo';
import { SessionSection } from './components/SessionSection';
import { BoardSection } from './components/BoardSection';
import { CORE_VALUES } from './data';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track scroll position for sticky header style & active highlight
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Determine active section
      const sections = ['hero', 'about', 'session', 'board', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Helper to map icon name to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-brand-red" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-brand-red" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-brand-red" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-brand-red" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-red" />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-red/30 selection:text-white relative">
      
      {/* BRAND HEADER LOGO ON VERY TOP */}
      <div className="bg-brand-black border-b border-zinc-950 py-3 relative z-30 text-center">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
          <Logo className="h-14 sm:h-16" showTagline={true} />
        </div>
      </div>

      {/* STICKY INTERACTIVE NAVIGATION */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrollY > 40
            ? 'bg-brand-black/90 backdrop-blur-md border-b border-zinc-900/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-4'
            : 'bg-brand-black border-b border-zinc-950/20 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Quick Logo or text */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <span className="font-display font-bold text-lg tracking-wider text-white">HCSL</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-red/10 border border-brand-red/20 text-brand-red font-medium">UNIT</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About', id: 'about' },
                { label: 'Upcoming Session', id: 'session' },
                { label: 'Executive Board', id: 'board' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs font-mono font-semibold tracking-wider uppercase transition-colors relative py-1 ${
                    activeSection === item.id ? 'text-brand-red' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Explore HCSL Action Button (Points directly to Instagram as requested) */}
            <div className="hidden sm:block">
              <a
                href="https://www.instagram.com/streetcause.humancapital/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-red hover:bg-brand-red-hover text-white font-mono font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_4px_15px_rgba(200,16,46,0.3)] hover:shadow-[0_4px_25px_rgba(200,16,46,0.5)] scale-95 hover:scale-100"
              >
                <span>Explore HCSL</span>
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Slide-Out menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-zinc-950 border-b border-zinc-900 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {[
                  { label: 'Home', id: 'hero' },
                  { label: 'About', id: 'about' },
                  { label: 'Upcoming Session', id: 'session' },
                  { label: 'Executive Board', id: 'board' },
                  { label: 'Contact', id: 'contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-2 text-sm font-mono font-semibold tracking-wider uppercase ${
                      activeSection === item.id ? 'text-brand-red' : 'text-zinc-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

                <div className="pt-4 border-t border-zinc-900">
                  <a
                    href="https://www.instagram.com/streetcause.humancapital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white font-mono font-semibold text-xs tracking-wider uppercase transition-all"
                  >
                    <span>Explore HCSL</span>
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <header id="hero" className="relative min-h-[80vh] flex items-center justify-center bg-brand-black overflow-hidden py-16">
        {/* Abstract grids and red glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#141416_1px,transparent_1px),linear-gradient(to_bottom,#141416_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-zinc-900/40 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-xs font-mono text-zinc-400 font-semibold tracking-wide">STREET CAUSE CEB EXTENSION</span>
          </div>

          {/* Subtitle brand header */}
          <p className="font-display text-sm sm:text-base text-brand-red tracking-[0.2em] font-semibold uppercase mb-4">
            Human Capital, Skills & Leadership Unit
          </p>

          {/* Majestic Hero Title */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none mb-8">
            Shaping the <span className="text-brand-red italic block sm:inline">Leaders</span> of Tomorrow
          </h1>

          {/* Logo tagline motto with high styling */}
          <div className="max-w-2xl mx-auto mb-10">
            <p className="font-display text-lg sm:text-xl font-medium tracking-wide text-brand-light-grey italic opacity-95">
              &ldquo;A life without a cause is a life without an effect&rdquo;
            </p>
          </div>

          {/* Mission Objective block */}
          <div className="max-w-3xl mx-auto p-5 sm:p-6 bg-zinc-950/50 backdrop-blur-sm border border-zinc-900 rounded-3xl mb-10 shadow-lg">
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
              The unit intends to turn volunteers into leaders through career advancement initiatives, tailored resources, and dedicated support, shaping them into skilled leaders for meaningful change!
            </p>
          </div>

          {/* Interactive touch-friendly CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => scrollToSection('session')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white font-mono font-semibold text-xs tracking-widest uppercase transition-all shadow-[0_4px_25px_rgba(200,16,46,0.25)] hover:shadow-[0_4px_30px_rgba(200,16,46,0.4)] cursor-pointer"
            >
              <span>Upcoming Webinar</span>
              <GraduationCap className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={() => scrollToSection('board')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-800 text-zinc-400 hover:text-white font-mono font-semibold text-xs tracking-widest uppercase transition-all cursor-pointer"
            >
              <span>Executive Board</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </header>

      {/* ABOUT / PILLARS OF HCSL SECTION */}
      <section id="about" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-brand-red uppercase font-semibold">OUR CORE MANDATE</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mt-3 mb-4">
              Our Vision and Objectives
            </h2>
            <p className="text-sm text-zinc-500 max-w-xl mx-auto font-sans leading-relaxed">
              We leverage direct career guidance, application tools, and alumni support systems to nurture Street Cause volunteers into modern social champions.
            </p>
          </div>

          {/* Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((pillar, idx) => (
              <div
                key={idx}
                className="group p-6 bg-brand-card hover:bg-brand-card-hover border border-zinc-900 hover:border-zinc-800 rounded-3xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:bg-brand-red/10 transition-colors">
                    {getIcon(pillar.iconName)}
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-brand-red transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-900/40 flex items-center gap-2 text-[10px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  <span>Authorized Unit Activity</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Beautiful block quotes from poster */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-brand-black border border-zinc-900 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/5 rounded-full blur-2xl" />
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
              &ldquo;A life without a cause is a life without an effect.&rdquo;
            </h3>
            <p className="text-xs text-brand-red font-mono font-semibold uppercase tracking-widest">
              VISION 2030 STREET CAUSE • REGISTERED NGO
            </p>
          </div>

        </div>
      </section>

      {/* UPCOMING WEBINEAR SECTION */}
      <SessionSection />

      {/* EXECUTIVE ROSTER SECTION */}
      <BoardSection />

      {/* FAQ & INTERACTIVE VOLUNTEER RESOURCE ZONE */}
      <section id="contact" className="py-24 bg-brand-black relative border-t border-zinc-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Column 1: Unit details and objective */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono tracking-widest text-brand-red uppercase font-semibold">GET IN TOUCH</span>
              
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Empower Your <span className="text-brand-red">Career</span> Journey
              </h2>

              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                Whether you have questions about Sree Charith&apos;s upcoming &ldquo;Masters in Abroad&rdquo; session, want to submit study-abroad portfolios for review, or are a volunteer seeking leadership materials, our HCSL Board is ready to assist.
              </p>

              {/* Verified Contact Methods */}
              <div className="space-y-4 pt-4">
                <a
                  href="mailto:streetcause@gmail.com"
                  className="flex items-center gap-4 p-4 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 rounded-2xl transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Official Email</p>
                    <p className="text-sm font-semibold text-white">streetcause@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/streetcause.humancapital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 rounded-2xl transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center">
                    <Instagram className="w-4 h-4 text-brand-red" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Instagram Handler</p>
                    <p className="text-sm font-semibold text-white">@streetcause.humancapital</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Column 2: Interactive contact form (stored in state for realistic demonstration) */}
            <div className="lg:col-span-7 bg-zinc-950 border border-zinc-900 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 to-brand-red" />
              
              <h3 className="font-display text-xl font-bold text-white mb-2">Connect with HCSL</h3>
              <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                Submit an inquiry directly to the HCSL leadership board. We monitor entries daily to route support.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you! Your message was received locally. We will follow up via your email.');
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sree Charith Alumnus"
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-red transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="volunteer@streetcause.org"
                      className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-red transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Topic of Interest</label>
                  <select className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-red transition-all">
                    <option>Higher Study Abroad (GRE/TOEFL)</option>
                    <option>Leadership Development Workshops</option>
                    <option>Corporate Partnerships & Career Portals</option>
                    <option>Creative/Media volunteering</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">Your Message</label>
                  <textarea
                    required
                    placeholder="Describe how HCSL can support your academic or professional journey..."
                    className="w-full h-28 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white text-sm focus:outline-none focus:border-brand-red transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-[0_4px_15px_rgba(200,16,46,0.3)]"
                >
                  Submit Inquiry to HCSL Unit
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 border-t border-zinc-900/60 py-12 text-center text-xs text-zinc-500 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-center">
            <Logo className="h-10" showTagline={false} />
          </div>

          <p className="max-w-md mx-auto text-zinc-500 font-sans leading-relaxed">
            Street Cause is India’s largest student NGO, dedicated to youth mobilization, active leadership support, and social welfare programs since inception.
          </p>

          <div className="flex items-center justify-center gap-6 text-xs font-mono">
            <a href="mailto:streetcause@gmail.com" className="hover:text-white transition-colors">
              streetcause@gmail.com
            </a>
            <span className="text-zinc-800">|</span>
            <a
              href="https://www.instagram.com/streetcause.humancapital/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              streetcause.humancapital
            </a>
          </div>

          <div className="pt-6 border-t border-zinc-900 text-[10px] text-zinc-600 space-y-1">
            <p>© 2026-2027 Street Cause. All Rights Reserved.</p>
            <p>HCSL Division - Shaping Volunteers into Skilled Leaders for Meaningful Change.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
