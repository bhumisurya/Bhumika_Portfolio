import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-900 dark:bg-charcoal-950 text-white pt-16 pb-12 border-t border-charcoal-800 dark:border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-12 border-b border-charcoal-800 dark:border-white/10">
          
          {/* Identity & Tagline (6 cols) */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-electric-violet flex items-center justify-center font-display font-bold text-xs text-white">
                BD
              </div>
              <span className="font-display font-bold text-lg text-white">
                Bhumika Devendra Suryawanshi
              </span>
            </div>
            
            <p className="text-xs text-charcoal-400 dark:text-slate-400 font-mono max-w-md">
              AI/ML Engineer specializing in Machine Learning, Deep Learning, Computer Vision, and Generative AI systems.
            </p>
          </div>

          {/* Socials & Back to Top (6 cols) */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-4">
            
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-charcoal-800 dark:bg-charcoal-900 hover:bg-electric-violet text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-charcoal-800 dark:bg-charcoal-900 hover:bg-electric-cobalt text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-full bg-charcoal-800 dark:bg-charcoal-900 hover:bg-electric-violet text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-charcoal-800 dark:bg-charcoal-900 hover:bg-charcoal-700 dark:hover:bg-charcoal-800 text-xs font-mono font-medium text-white transition-all hover:-translate-y-0.5 active:translate-y-0 border border-transparent dark:border-white/10"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-electric-violet" />
            </button>

          </div>

        </div>

        {/* Bottom Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-charcoal-400 dark:text-slate-500">
          <div>
            &copy; {currentYear} Bhumika Devendra Suryawanshi. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Designed & Engineered for AI/ML Impact</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

      </div>
    </footer>
  );
};
