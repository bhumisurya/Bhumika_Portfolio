import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Brain, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Compass 
} from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      title: "Machine Learning & Modeling",
      description: "End-to-end predictive systems, feature engineering, classification, regression, and model evaluation with Scikit-learn and XGBoost.",
      icon: Brain,
      badge: "Core Engineering"
    },
    {
      title: "Computer Vision & Pose",
      description: "Real-time stream analysis using OpenCV and MediaPipe for skeletal landmark tracking, abnormal posture detection, and facial feature extraction.",
      icon: Cpu,
      badge: "Visual Analytics"
    },
    {
      title: "Generative AI & LLMs",
      description: "Exploring RAG pipelines, LangChain, embeddings, vector databases, and agentic workflows to build context-aware intelligent applications.",
      icon: Sparkles,
      badge: "Emerging Tech"
    },
    {
      title: "Responsible & Practical AI",
      description: "Designing explainable, transparent AI that addresses human-AI collaboration dynamics and user cognitive safety.",
      icon: ShieldCheck,
      badge: "Ethical AI"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-violet/10 dark:bg-electric-violet/20 text-electric-violet dark:text-electric-violetLight font-mono text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal-900 dark:text-white tracking-tight">
            Background & Engineering Philosophy
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-600 dark:text-slate-400 max-w-2xl">
            A grounded approach to building intelligent systems combining academic rigor with hands-on computer vision and machine learning engineering.
          </p>
        </div>

        {/* Narrative & Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-white dark:bg-charcoal-900 border border-charcoal-900/10 dark:border-white/10 shadow-subtle dark:shadow-card-dark relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-electric-violet/5 to-transparent rounded-bl-full pointer-events-none" />
              
              <h3 className="text-xl font-display font-bold text-charcoal-900 dark:text-white mb-4 flex items-center gap-2">
                <span>Passionate about Applied AI & Real-World Impact</span>
              </h3>

              <div className="space-y-4 text-charcoal-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I hold a <strong>Bachelor of Engineering in Computer Science</strong> from{' '}
                  <span className="text-charcoal-900 dark:text-white font-medium">Savitribai Phule Pune University (SPPU)</span> with a CGPA of <strong>7.84</strong>, and completed the intensive{' '}
                  <strong>Post Graduate Certificate Programme in Artificial Intelligence</strong> from{' '}
                  <span className="text-charcoal-900 dark:text-white font-medium">C-DAC Mumbai</span> with <strong>79%</strong>.
                </p>

                <p>
                  My work centers on practical, end-to-end AI application development. Rather than treating machine learning as a theoretical black box, I focus on the full lifecycle: from collecting and cleaning raw sensory feeds (computer vision, eye tracking, mouse dynamics, and meteorological indicators) to feature engineering, training robust classifiers, and deploying responsive microservices using Flask and FastAPI.
                </p>

                <p>
                  I am particularly fascinated by <strong>Multimodal AI</strong> and <strong>Responsible Human-AI Collaboration</strong>. In my capstone project, I investigated how physiological and behavioral signals can quantify user cognitive load to make intelligent interfaces more supportive and adaptive.
                </p>
              </div>

              {/* Verified Key Highlights */}
              <div className="mt-6 pt-6 border-t border-charcoal-900/10 dark:border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-3 rounded-xl bg-cream-50 dark:bg-charcoal-800 border border-charcoal-900/5 dark:border-white/5">
                  <span className="text-xs font-mono text-charcoal-500 dark:text-slate-400 block mb-1">Qualification</span>
                  <span className="text-sm font-bold text-charcoal-900 dark:text-white block">PGCAI (C-DAC)</span>
                  <span className="text-xs text-electric-violet dark:text-electric-violetLight font-semibold">79% Distinction</span>
                </div>

                <div className="p-3 rounded-xl bg-cream-50 dark:bg-charcoal-800 border border-charcoal-900/5 dark:border-white/5">
                  <span className="text-xs font-mono text-charcoal-500 dark:text-slate-400 block mb-1">Undergraduate</span>
                  <span className="text-sm font-bold text-charcoal-900 dark:text-white block">BE Computer Sci</span>
                  <span className="text-xs text-charcoal-700 dark:text-slate-300 font-semibold">CGPA 7.84 (SPPU)</span>
                </div>

                <div className="p-3 rounded-xl bg-cream-50 dark:bg-charcoal-800 border border-charcoal-900/5 dark:border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-xs font-mono text-charcoal-500 dark:text-slate-400 block mb-1">Focus Area</span>
                  <span className="text-sm font-bold text-charcoal-900 dark:text-white block">ML / CV / GenAI</span>
                  <span className="text-xs text-electric-cobalt dark:text-electric-cobaltLight font-semibold">End-to-End AI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Education Highlight Box (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-charcoal-900 to-charcoal-800 dark:from-charcoal-900 dark:to-charcoal-950 text-white shadow-card dark:shadow-card-dark border border-transparent dark:border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-electric-violet/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-electric-violet border border-white/10">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white">
                    Academic Trajectory
                  </h4>
                  <p className="text-xs text-white/60 font-mono">Formal Qualifications</p>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                {/* Item 1 */}
                <div className="relative pl-5 border-l-2 border-electric-violet/50 pb-2">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-electric-violet" />
                  <p className="text-xs font-bold text-white">C-DAC Mumbai</p>
                  <p className="text-white/80">PG Certificate in Artificial Intelligence</p>
                  <p className="text-electric-violet dark:text-electric-violetLight font-mono text-[11px] mt-0.5">Feb 2026 – Aug 2026 • 79%</p>
                </div>

                {/* Item 2 */}
                <div className="relative pl-5 border-l-2 border-electric-cobalt/50 pb-2">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-electric-cobalt" />
                  <p className="text-xs font-bold text-white">Savitribai Phule Pune University</p>
                  <p className="text-white/80">B.E. in Computer Science</p>
                  <p className="text-white/60 font-mono text-[11px] mt-0.5">2021 – 2025 • CGPA 7.84</p>
                </div>

                {/* Item 3 */}
                <div className="relative pl-5 border-l-2 border-white/20">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-white/40" />
                  <p className="text-xs font-bold text-white">Higher Secondary Certificate (HSC)</p>
                  <p className="text-white/80">ACS Junior College, Sinnar</p>
                  <p className="text-white/60 font-mono text-[11px] mt-0.5">2020 – 2021 • 90%</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/70">
                <span>Location: Nashik, India</span>
                <a href="#education" className="text-electric-violet dark:text-electric-violetLight hover:underline font-mono">
                  View Timeline &rarr;
                </a>
              </div>
            </div>

            {/* Core Values Pill Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-charcoal-900/10 dark:border-white/10 shadow-subtle dark:shadow-card-dark">
              <h4 className="text-xs font-mono font-bold text-charcoal-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                Key Professional Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Computer Vision Pipelines",
                  "Behavioral Feature Extraction",
                  "Statistical Machine Learning",
                  "FastAPI REST Endpoints",
                  "MediaPipe Skeletal Tracking",
                  "Generative AI & RAG",
                  "Multithreaded Processing",
                  "Responsible AI",
                  "Exploratory Data Analysis"
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-cream-50 dark:bg-charcoal-800 text-charcoal-700 dark:text-slate-300 text-xs font-medium border border-charcoal-900/5 dark:border-white/5 hover:border-electric-violet/30 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-charcoal-900 border border-charcoal-900/10 dark:border-white/10 shadow-subtle dark:shadow-card-dark hover:shadow-card hover:border-electric-violet/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-electric-violet/10 to-electric-cobalt/10 dark:from-electric-violet/20 dark:to-electric-cobalt/20 flex items-center justify-center text-electric-violet dark:text-electric-violetLight mb-4 group-hover:scale-105 group-hover:bg-electric-violet group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold tracking-wider uppercase bg-charcoal-900/5 dark:bg-white/10 text-charcoal-600 dark:text-slate-300 mb-2">
                  {pillar.badge}
                </div>
                <h4 className="font-display font-bold text-base text-charcoal-900 dark:text-white mb-2 group-hover:text-electric-violet dark:group-hover:text-electric-violetLight transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-600 dark:text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
