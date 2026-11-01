import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-100/90 dark:bg-charcoal-950/90 backdrop-blur-md shadow-subtle dark:shadow-card-dark border-b border-charcoal-900/5 dark:border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="group flex items-center gap-3 transition-transform duration-200 active:scale-95"
            aria-label="Bhumika Suryawanshi Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-electric-violet to-electric-cobalt p-0.5 shadow-md shadow-electric-violet/20 group-hover:shadow-electric-violet/40 transition-all">
              <div className="w-full h-full bg-cream-50 dark:bg-charcoal-900 rounded-[10px] flex items-center justify-center font-display font-bold text-charcoal-900 dark:text-white text-sm tracking-wider group-hover:text-electric-violet dark:group-hover:text-electric-violetLight transition-colors">
                BD
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-charcoal-900 dark:text-white group-hover:text-electric-violet dark:group-hover:text-electric-violetLight transition-colors">
                Bhumika S.
              </span>
              <span className="text-xs font-mono text-charcoal-600 dark:text-charcoal-400 tracking-wide flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                AI/ML Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 dark:bg-charcoal-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-charcoal-900/5 dark:border-white/10 shadow-subtle dark:shadow-card-dark">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-white dark:text-charcoal-950 font-semibold'
                      : 'text-charcoal-700 dark:text-slate-300 hover:text-charcoal-900 dark:hover:text-white hover:bg-charcoal-900/5 dark:hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-charcoal-900 dark:bg-white rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions (Theme Switcher + Resume) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2.5 rounded-full border border-charcoal-900/10 dark:border-white/10 bg-white/80 dark:bg-charcoal-900/80 text-charcoal-700 dark:text-slate-200 hover:text-electric-violet dark:hover:text-electric-violetLight hover:border-electric-violet/30 transition-all shadow-xs"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-electric-violet" />
              )}
            </button>

            <a
              href={personalInfo.resumePath}
              download="Bhumika_Devendra_Suryawanshi_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-electric-violet text-white hover:bg-electric-violet/90 shadow-sm shadow-electric-violet/30 hover:shadow-electric-violet/50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-full border border-charcoal-900/10 dark:border-white/10 bg-white/80 dark:bg-charcoal-900/80 text-charcoal-700 dark:text-slate-200 shadow-xs"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-electric-violet" />
              )}
            </button>

            <a
              href={personalInfo.resumePath}
              download="Bhumika_Devendra_Suryawanshi_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-electric-violet text-white shadow-sm"
              aria-label="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-charcoal-700 dark:text-slate-200 hover:text-charcoal-900 dark:hover:text-white hover:bg-charcoal-900/5 dark:hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-cream-50/98 dark:bg-charcoal-950/98 backdrop-blur-xl border-b border-charcoal-900/10 dark:border-white/10 shadow-lg px-4 pt-3 pb-6"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-electric-violet text-white font-semibold'
                        : 'text-charcoal-700 dark:text-slate-300 hover:bg-charcoal-900/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 opacity-40" />
                    )}
                  </a>
                );
              })}
              
              <div className="pt-3 mt-2 border-t border-charcoal-900/10 dark:border-white/10 flex flex-col gap-2">
                <a
                  href={personalInfo.resumePath}
                  download="Bhumika_Devendra_Suryawanshi_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-charcoal-900 dark:bg-white text-white dark:text-charcoal-950 hover:bg-charcoal-800 dark:hover:bg-slate-200 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
