import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  CheckCircle2, 
  Languages, 
  Calendar, 
  Eye, 
  Search, 
  Filter
} from 'lucide-react';
import { certificationsData, languagesData } from '../data/portfolioData';
import { CertificationItem } from '../types';
import { CertificateModal } from './CertificateModal';

export const Certifications: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCertificate, setActiveCertificate] = useState<CertificationItem | null>(null);

  const categories = ['All', 'AI & Data Science', 'Core Engineering', 'Cloud & Web', 'Industry & Foundational'];

  const filteredCertificates = useMemo(() => {
    return certificationsData.filter((cert) => {
      if (selectedCategory !== 'All' && cert.category !== selectedCategory) {
        return false;
      }
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchTitle = cert.title.toLowerCase().includes(q);
      const matchIssuer = cert.issuer.toLowerCase().includes(q);
      const matchSkills = cert.skills?.some((s) => s.toLowerCase().includes(q));
      const matchDetails = cert.details?.toLowerCase().includes(q);

      return matchTitle || matchIssuer || matchSkills || matchDetails;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-violet/10 dark:bg-electric-violet/20 text-electric-violet dark:text-electric-violetLight font-mono text-xs font-semibold mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>CONTINUOUS LEARNING & CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal-900 dark:text-white tracking-tight">
              Verified Certifications ({certificationsData.length})
            </h2>
            <p className="mt-2 text-charcoal-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
              All credentials verified with authentic documents, government endorsements, and institutional verification records.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-cream-50 dark:bg-charcoal-800 rounded-xl border border-charcoal-900/10 dark:border-white/10 text-xs font-mono text-charcoal-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span><strong>{certificationsData.length}</strong> Certificates Documented</span>
          </div>
        </div>

        {/* Filter Pills & Search */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-charcoal-900/10 dark:border-white/10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((category) => {
              const count = category === 'All' 
                ? certificationsData.length 
                : certificationsData.filter((c) => c.category === category).length;
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-charcoal-900 dark:bg-white text-white dark:text-charcoal-950 shadow-xs font-semibold'
                      : 'bg-white dark:bg-charcoal-800 text-charcoal-600 dark:text-slate-300 hover:text-charcoal-900 dark:hover:text-white hover:bg-cream-100 dark:hover:bg-charcoal-700 border border-charcoal-900/10 dark:border-white/10'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-charcoal-400 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search certificates or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-charcoal-800 rounded-full text-xs text-charcoal-900 dark:text-white placeholder-charcoal-400 dark:placeholder-slate-500 border border-charcoal-900/15 dark:border-white/15 focus:outline-none focus:ring-2 focus:ring-electric-violet/30 focus:border-electric-violet transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-charcoal-400 hover:text-charcoal-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredCertificates.length > 0 ? (
              filteredCertificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-charcoal-900/10 dark:border-white/10 shadow-subtle dark:shadow-card-dark hover:shadow-card hover:border-electric-violet/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Badge & Year */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold uppercase bg-cream-50 dark:bg-charcoal-800 text-charcoal-700 dark:text-slate-300 border border-charcoal-900/5 dark:border-white/5">
                        {cert.badge || cert.category}
                      </span>
                      <span className="text-xs font-mono text-charcoal-500 dark:text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-electric-violet dark:text-electric-violetLight" />
                        {cert.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-base text-charcoal-900 dark:text-white mb-1.5 group-hover:text-electric-violet dark:group-hover:text-electric-violetLight transition-colors leading-snug">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <p className="text-xs font-semibold text-electric-cobalt dark:text-electric-cobaltLight mb-3">
                      {cert.issuer}
                    </p>

                    {/* Details */}
                    {cert.details && (
                      <p className="text-xs text-charcoal-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                        {cert.details}
                      </p>
                    )}

                    {/* Skills pills */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {cert.skills.slice(0, 3).map((s) => (
                          <span
                            key={s}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-cream-100 dark:bg-charcoal-800 text-charcoal-700 dark:text-slate-300 border border-charcoal-900/5 dark:border-white/5"
                          >
                            {s}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-cream-50 dark:bg-charcoal-800 text-charcoal-400">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Bottom Row: Score / Actions */}
                  <div className="pt-3 border-t border-charcoal-900/5 dark:border-white/5 flex items-center justify-between text-xs">
                    {cert.score ? (
                      <span className="font-mono font-bold text-[11px] text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                        {cert.score}
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-charcoal-500 dark:text-slate-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        Verified
                      </span>
                    )}

                    {/* View Button */}
                    <button
                      onClick={() => setActiveCertificate(cert)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-electric-violet/10 hover:bg-electric-violet text-electric-violet hover:text-white dark:bg-electric-violet/20 dark:hover:bg-electric-violet transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-charcoal-500 dark:text-slate-400">
                <Filter className="w-8 h-8 mx-auto mb-2 text-charcoal-400 opacity-60" />
                <p className="font-medium text-sm">No certificates found matching &ldquo;{searchQuery}&rdquo;</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="mt-3 text-xs text-electric-violet dark:text-electric-violetLight hover:underline font-mono"
                >
                  Reset filters
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Languages Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cream-100 to-cream-50 dark:from-charcoal-900 dark:to-charcoal-850 border border-charcoal-900/10 dark:border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-electric-violet/10 dark:bg-electric-violet/20 text-electric-violet dark:text-electric-violetLight flex items-center justify-center">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-charcoal-900 dark:text-white">
                  Language Proficiencies
                </h3>
                <p className="text-xs text-charcoal-500 dark:text-slate-400">Documented communication fluency</p>
              </div>
            </div>
            <span className="text-xs font-mono text-charcoal-500 dark:text-slate-400">
              Multilingual Engineering Communication
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {languagesData.map((lang) => (
              <div
                key={lang.language}
                className="p-4 rounded-xl bg-white dark:bg-charcoal-800 border border-charcoal-900/5 dark:border-white/5 shadow-xs"
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-display font-bold text-sm text-charcoal-900 dark:text-white">
                    {lang.language}
                  </h4>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs text-charcoal-600 dark:text-slate-400 font-mono">
                  {lang.proficiency}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      <CertificateModal
        certificate={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />
    </section>
  );
};
