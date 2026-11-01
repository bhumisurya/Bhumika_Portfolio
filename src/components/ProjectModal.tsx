import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Cpu, 
  Camera, 
  GitMerge, 
  Brain, 
  Video, 
  Activity, 
  Binary, 
  Bell, 
  CloudRain, 
  Filter, 
  Zap,
  Sparkles,
  ShieldAlert,
  Sliders
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const iconMap: Record<string, React.ElementType> = {
    Camera,
    Cpu,
    GitMerge,
    Brain,
    CheckCircle2,
    Video,
    Activity,
    Binary,
    Bell,
    CloudRain,
    Filter,
    Zap
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 md:p-8">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-charcoal-950/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white dark:bg-charcoal-900 rounded-2xl shadow-2xl border border-charcoal-900/10 dark:border-white/10 z-10 text-charcoal-900 dark:text-slate-100"
        >
          {/* Header Bar */}
          <div className="sticky top-0 bg-white/95 dark:bg-charcoal-900/95 backdrop-blur-md px-6 py-4 border-b border-charcoal-900/10 dark:border-white/10 flex items-center justify-between z-20">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase bg-electric-violet/10 dark:bg-electric-violet/20 text-electric-violet dark:text-electric-violetLight">
                {project.category}
              </span>
              {project.metrics && (
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  {project.metrics}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-charcoal-400 dark:text-slate-400 hover:text-charcoal-900 dark:hover:text-white hover:bg-cream-100 dark:hover:bg-charcoal-800 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Title & Overview */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-charcoal-900 dark:text-white tracking-tight leading-snug mb-3">
                {project.title}
              </h2>
              <p className="text-base text-charcoal-700 dark:text-slate-300 leading-relaxed">
                {project.fullOverview}
              </p>
            </div>

            {/* Architecture Pipeline Visualization */}
            {project.architectureDiagram && (
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-cream-100 to-cream-50 dark:from-charcoal-850 dark:to-charcoal-800 border border-charcoal-900/10 dark:border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-charcoal-700 dark:text-slate-300 uppercase tracking-wider">
                    <Sliders className="w-4 h-4 text-electric-violet dark:text-electric-violetLight" />
                    <span>Technical Architecture & Processing Pipeline</span>
                  </div>
                  <span className="text-[10px] font-mono text-charcoal-500 dark:text-slate-400 bg-white dark:bg-charcoal-900 px-2 py-0.5 rounded border border-charcoal-900/10 dark:border-white/10">
                    System Architecture
                  </span>
                </div>

                {/* Pipeline Flow Steps */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
                  {project.architectureDiagram.steps.map((step) => {
                    const Icon = iconMap[step.icon] || Cpu;
                    return (
                      <div
                        key={step.title}
                        className="p-4 rounded-xl bg-white dark:bg-charcoal-900 border border-charcoal-900/10 dark:border-white/10 shadow-xs flex flex-col justify-between relative group hover:border-electric-violet/40 transition-colors"
                      >
                        <div>
                          <div className="w-8 h-8 rounded-lg bg-electric-violet/10 dark:bg-electric-violet/20 text-electric-violet dark:text-electric-violetLight flex items-center justify-center mb-2.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h4 className="text-xs font-display font-bold text-charcoal-900 dark:text-white mb-1 leading-tight">
                            {step.title}
                          </h4>
                          <p className="text-[11px] text-charcoal-600 dark:text-slate-400 leading-normal mb-3">
                            {step.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-1 mt-auto">
                          {step.tags.map((t) => (
                            <span
                              key={t}
                              className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-cream-100 dark:bg-charcoal-800 text-charcoal-700 dark:text-slate-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Interactive Simulation / Mock Output Preview depending on type */}
                {project.architectureDiagram.type === 'cognitive' && (
                  <div className="mt-4 p-4 rounded-xl bg-white dark:bg-charcoal-900 border border-charcoal-900/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-charcoal-600 dark:text-slate-300">
                      <strong className="text-charcoal-900 dark:text-white">Multimodal Output Classes:</strong> Evaluated into 3 discrete cognitive load tiers:
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        Low Load (0.15)
                      </span>
                      <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                        Medium Load (0.58)
                      </span>
                      <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                        High Load (0.89)
                      </span>
                    </div>
                  </div>
                )}

                {project.architectureDiagram.type === 'pose' && (
                  <div className="mt-4 p-4 rounded-xl bg-white dark:bg-charcoal-900 border border-charcoal-900/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-charcoal-600 dark:text-slate-300">
                      <strong className="text-charcoal-900 dark:text-white">Live Posture Inference & Alerts:</strong> MediaPipe 33-point skeletal landmarking with multithreaded triggers:
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        Normal Posture (30 FPS)
                      </span>
                      <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 flex items-center gap-1">
                        <Bell className="w-3 h-3 text-rose-600" />
                        Abnormal Alert Triggered
                      </span>
                    </div>
                  </div>
                )}

                {project.architectureDiagram.type === 'weather' && (
                  <div className="mt-4 p-4 rounded-xl bg-white dark:bg-charcoal-900 border border-charcoal-900/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-charcoal-600 dark:text-slate-300">
                      <strong className="text-charcoal-900 dark:text-white">REST API Benchmark:</strong> FastAPI microservice with Pydantic request models:
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                        POST /predict &lt;20ms
                      </span>
                      <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        Accuracy: 96%+
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-white dark:bg-charcoal-850 border border-charcoal-900/10 dark:border-white/10 shadow-xs">
                <h3 className="text-xs font-mono font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span>The Problem</span>
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-700 dark:text-slate-300 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white dark:bg-charcoal-850 border border-charcoal-900/10 dark:border-white/10 shadow-xs">
                <h3 className="text-xs font-mono font-bold text-electric-violet dark:text-electric-violetLight uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-electric-violet dark:text-electric-violetLight" />
                  <span>The Solution Architecture</span>
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-700 dark:text-slate-300 leading-relaxed">
                  {project.solutionOverview}
                </p>
              </div>
            </div>

            {/* Key Implementation Details */}
            <div>
              <h3 className="text-sm font-display font-bold text-charcoal-900 dark:text-white mb-3 flex items-center gap-2">
                <span>Key Implementation Details</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyImplementations.map((impl, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-cream-50 dark:bg-charcoal-800 border border-charcoal-900/5 dark:border-white/5 text-xs text-charcoal-700 dark:text-slate-300 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-electric-violet dark:text-electric-violetLight shrink-0 mt-0.5" />
                    <span>{impl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* My Contributions */}
            <div>
              <h3 className="text-sm font-display font-bold text-charcoal-900 dark:text-white mb-3">
                My Documented Contributions
              </h3>
              <ul className="space-y-2">
                {project.myContributions.map((contrib, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-charcoal-700 dark:text-slate-300 flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-cobalt dark:bg-electric-cobaltLight mt-2 shrink-0" />
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verified Results */}
            <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/80">
              <h4 className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Verified Results</span>
              </h4>
              <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed">
                {project.verifiedResults}
              </p>
            </div>

            {/* Future Improvement Ideas (Clearly marked as proposed) */}
            <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/80">
              <h4 className="text-xs font-mono font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Future Improvement Ideas (Proposed Work)</span>
              </h4>
              <ul className="space-y-1.5">
                {project.futureImprovements.map((idea, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-600 dark:bg-amber-400 mt-1.5 shrink-0" />
                    <span>{idea}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-xs font-mono font-bold text-charcoal-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white dark:bg-charcoal-800 text-charcoal-800 dark:text-slate-200 border border-charcoal-900/10 dark:border-white/10 shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-charcoal-900/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal-900 dark:bg-white text-white dark:text-charcoal-950 text-xs font-semibold hover:bg-charcoal-800 dark:hover:bg-slate-200 transition-colors shadow-xs"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>

                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-electric-violet text-white text-xs font-semibold hover:bg-electric-violet/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-charcoal-900/20 dark:border-white/20 text-xs font-semibold text-charcoal-700 dark:text-slate-300 hover:bg-cream-100 dark:hover:bg-charcoal-800 transition-colors"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
