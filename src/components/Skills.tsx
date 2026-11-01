import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  BrainCircuit, 
  Layers, 
  Sparkles, 
  Eye, 
  BarChart3, 
  Server, 
  Database, 
  Wrench,
  Search,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { skillGroups } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const iconMap: Record<string, React.ElementType> = {
    Code,
    BrainCircuit,
    Layers,
    Sparkles,
    Eye,
    BarChart3,
    Server,
    Database,
    Wrench
  };

  const categories = useMemo(() => {
    return ['All', ...skillGroups.map((g) => g.category)];
  }, []);

  const filteredGroups = useMemo(() => {
    return skillGroups
      .map((group) => {
        if (selectedCategory !== 'All' && group.category !== selectedCategory) {
          return null;
        }

        if (!searchQuery.trim()) return group;

        const query = searchQuery.toLowerCase();
        const matchesCategory = group.category.toLowerCase().includes(query);
        const matchedSkills = group.skills.filter((skill) =>
          skill.toLowerCase().includes(query)
        );

        if (matchesCategory || matchedSkills.length > 0) {
          return {
            ...group,
            skills: matchesCategory ? group.skills : matchedSkills,
          };
        }
        return null;
      })
      .filter(Boolean) as typeof skillGroups;
  }, [selectedCategory, searchQuery]);

  const totalSkillCount = useMemo(() => {
    const set = new Set<string>();
    skillGroups.forEach(g => g.skills.forEach(s => set.add(s)));
    return set.size;
  }, []);

  return (
    <section id="skills" className="py-20 lg:py-28 bg-white/60 dark:bg-charcoal-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-violet/10 dark:bg-electric-violet/20 text-electric-violet dark:text-electric-violetLight font-mono text-xs font-semibold mb-3">
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>TECHNICAL COMPETENCIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal-900 dark:text-white tracking-tight">
              Verified Technical Stack & Skills
            </h2>
            <p className="mt-2 text-charcoal-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
              Categorized technologies from academic curricula, certifications, and hands-on AI/ML project implementations.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-2 px-4 py-2 bg-cream-50 dark:bg-charcoal-800 rounded-xl border border-charcoal-900/10 dark:border-white/10 text-xs font-mono text-charcoal-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-electric-violet dark:bg-electric-violetLight" />
            <span><strong>{totalSkillCount}</strong> Documented Skills & Tools</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-charcoal-900/10 dark:border-white/10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((category) => {
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
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-charcoal-400 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. OpenCV, RAG, FastAPI)..."
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

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredGroups.length > 0 ? (
              filteredGroups.map((group) => {
                const Icon = iconMap[group.icon] || Code;
                return (
                  <motion.div
                    key={group.category}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-charcoal-900/10 dark:border-white/10 shadow-subtle dark:shadow-card-dark hover:shadow-card hover:border-electric-violet/30 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-electric-violet/10 to-electric-cobalt/10 dark:from-electric-violet/20 dark:to-electric-cobalt/20 text-electric-violet dark:text-electric-violetLight flex items-center justify-center group-hover:scale-105 group-hover:bg-electric-violet group-hover:text-white transition-all">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-base text-charcoal-900 dark:text-white group-hover:text-electric-violet dark:group-hover:text-electric-violetLight transition-colors">
                              {group.category}
                            </h3>
                            <span className="text-[11px] font-mono text-charcoal-500 dark:text-slate-400">
                              {group.skills.length} skills
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-charcoal-600 dark:text-slate-400 leading-relaxed mb-4">
                        {group.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {group.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-cream-50 dark:bg-charcoal-800 text-charcoal-800 dark:text-slate-200 border border-charcoal-900/5 dark:border-white/5 hover:border-electric-violet/40 hover:bg-electric-violet/5 dark:hover:bg-electric-violet/20 hover:text-electric-violet dark:hover:text-electric-violetLight transition-all cursor-default"
                          >
                            <span className="w-1 h-1 rounded-full bg-electric-violet/50 dark:bg-electric-violetLight" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-full py-12 text-center text-charcoal-500 dark:text-slate-400">
                <Filter className="w-8 h-8 mx-auto mb-2 text-charcoal-400 opacity-60" />
                <p className="font-medium text-sm">No skills found matching &ldquo;{searchQuery}&rdquo;</p>
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

        {/* Note on Authenticity */}
        <div className="mt-12 p-4 rounded-xl bg-cream-100 dark:bg-charcoal-850 border border-charcoal-900/5 dark:border-white/10 flex items-center gap-3 text-xs text-charcoal-600 dark:text-slate-400">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>
            <strong>Authenticity Guarantee:</strong> In accordance with recruiter best practices, skill levels reflect verified competencies from academic coursework, certifications, and active project builds rather than arbitrary percentage metrics.
          </span>
        </div>

      </div>
    </section>
  );
};
