import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { educationHistory } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 bg-white/50 dark:bg-charcoal-900/30 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-violet/10 dark:bg-electric-violet/20 text-electric-violet dark:text-electric-violetLight font-mono text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal-900 dark:text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="mt-2 text-charcoal-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            Formal technical degrees and postgraduate AI certifications.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-charcoal-900/10 dark:border-white/10 space-y-10">
          {educationHistory.map((item, idx) => {
            return (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                  item.isCurrentOrRecent 
                    ? 'bg-electric-violet border-white dark:border-charcoal-900 shadow-glow-violet' 
                    : 'bg-white dark:bg-charcoal-900 border-charcoal-400 dark:border-slate-500'
                }`} />

                <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-charcoal-900/10 dark:border-white/10 shadow-subtle dark:shadow-card-dark hover:shadow-card hover:border-electric-violet/30 transition-all">
                  
                  {/* Header: Degree & Score Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {item.isCurrentOrRecent && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-electric-violet/10 dark:bg-electric-violet/20 text-electric-violet dark:text-electric-violetLight">
                            Postgraduate Certification
                          </span>
                        )}
                        <span className="text-xs font-mono text-charcoal-500 dark:text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-electric-violet dark:text-electric-violetLight" />
                          {item.period}
                        </span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-display font-bold text-charcoal-900 dark:text-white leading-snug">
                        {item.degree}
                      </h3>
                      
                      <p className="text-sm font-medium text-charcoal-700 dark:text-slate-300 mt-0.5">
                        {item.institution}
                      </p>
                    </div>

                    {/* Score Tag */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cream-50 dark:bg-charcoal-800 border border-charcoal-900/10 dark:border-white/10 text-xs font-mono font-bold text-charcoal-900 dark:text-white shrink-0 self-start">
                      <Award className="w-4 h-4 text-electric-violet dark:text-electric-violetLight" />
                      <span>{item.scoreType}: {item.score}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="mt-4 pt-4 border-t border-charcoal-900/5 dark:border-white/5 space-y-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-xs sm:text-sm text-charcoal-600 dark:text-slate-400 flex items-start gap-2 leading-relaxed"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
