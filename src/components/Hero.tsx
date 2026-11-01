import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin 
} from 'lucide-react';

import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-electric-violet/10 to-electric-cobalt/10 dark:from-electric-violet/20 dark:to-electric-cobalt/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-electric-violet/5 dark:bg-electric-violet/15 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-charcoal-900/80 border border-charcoal-900/10 dark:border-white/10 shadow-xs mb-5 backdrop-blur-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-charcoal-700 dark:text-slate-300">
                {personalInfo.availability}
              </span>
            </div>

            {/* Role Moniker */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold tracking-wider uppercase bg-electric-violet/10 dark:bg-electric-violet/20 text-electric-violet dark:text-electric-violetLight border border-electric-violet/20">
                AI / ML ENGINEER
              </span>
              <span className="text-charcoal-400 dark:text-charcoal-500 text-xs font-mono">•</span>
              <span className="text-xs font-mono text-charcoal-600 dark:text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-electric-violet dark:text-electric-violetLight" />
                {personalInfo.location}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-charcoal-900 dark:text-white tracking-tight leading-[1.08] mb-4">
              <span className="block text-charcoal-900 dark:text-white">Bhumika Devendra</span>
              <span className="bg-gradient-to-r from-electric-violet via-electric-indigo to-electric-cobalt dark:from-electric-violetLight dark:via-indigo-400 dark:to-electric-cobaltLight bg-clip-text text-transparent">
                Suryawanshi
              </span>
            </h1>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl font-display font-semibold text-charcoal-800 dark:text-slate-200 mb-5 leading-snug">
              Building intelligent solutions with AI and Machine Learning.
            </h2>

            {/* Narrative Summary */}
            <p className="text-base sm:text-lg text-charcoal-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-8">
              AI/ML Engineer with a Computer Science background and a Post Graduate Certificate in AI from{' '}
              <strong className="font-semibold text-charcoal-900 dark:text-white">C-DAC Mumbai</strong>. Hands-on experience across{' '}
              <span className="text-electric-violet dark:text-electric-violetLight font-medium">Machine Learning</span>,{' '}
              <span className="text-electric-cobalt dark:text-electric-cobaltLight font-medium">Computer Vision</span>, and{' '}
              <span className="text-electric-indigo dark:text-indigo-400 font-medium">Generative AI</span>, focused on building practical, reliable, and responsible intelligent systems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-electric-violet to-electric-cobalt text-white font-semibold text-sm shadow-md shadow-electric-violet/25 hover:shadow-lg hover:shadow-electric-violet/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Bhumika_Devendra_Suryawanshi_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-charcoal-900 text-charcoal-900 dark:text-white font-semibold text-sm border border-charcoal-900/15 dark:border-white/15 hover:border-charcoal-900/30 dark:hover:border-white/30 hover:bg-cream-50 dark:hover:bg-charcoal-800 shadow-subtle hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-electric-violet dark:text-electric-violetLight" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex items-center gap-3 pt-4 border-t border-charcoal-900/10 dark:border-white/10 w-full">
              <span className="text-xs font-mono text-charcoal-500 dark:text-slate-400 uppercase tracking-wider mr-2">
                Connect:
              </span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-charcoal-900 border border-charcoal-900/10 dark:border-white/10 text-charcoal-700 dark:text-slate-300 hover:text-charcoal-900 dark:hover:text-white hover:border-charcoal-900/30 dark:hover:border-white/30 hover:shadow-xs transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-charcoal-900 border border-charcoal-900/10 dark:border-white/10 text-charcoal-700 dark:text-slate-300 hover:text-electric-cobalt dark:hover:text-electric-cobaltLight hover:border-electric-cobalt/40 hover:shadow-xs transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-full bg-white dark:bg-charcoal-900 border border-charcoal-900/10 dark:border-white/10 text-charcoal-700 dark:text-slate-300 hover:text-electric-violet dark:hover:text-electric-violetLight hover:border-electric-violet/40 hover:shadow-xs transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <div className="hidden sm:flex items-center gap-2 ml-auto text-xs font-mono text-charcoal-500 dark:text-slate-400">
                <span className="w-2 h-2 rounded-full bg-electric-violet/70 dark:bg-electric-violetLight" />
                <span>C-DAC PGCAI • 79%</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Photo Presentation (NO clutter, NO badges, NO overlays around photo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[390px]">
              {/* Pure, clean photo presentation with subtle rounded border */}
              <div className="rounded-2xl overflow-hidden border border-charcoal-900/10 dark:border-white/15 shadow-xl shadow-charcoal-900/5 dark:shadow-2xl dark:shadow-black/60 bg-white dark:bg-charcoal-900">
                <img
                  src={personalInfo.photoPath}
                  alt="Bhumika Devendra Suryawanshi"
                  className="w-full h-auto object-cover block"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
