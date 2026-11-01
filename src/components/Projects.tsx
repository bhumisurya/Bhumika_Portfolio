import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  ArrowRight, 
  Github, 
  Activity, 
  CloudSun, 
  Eye
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-violet/10 dark:bg-electric-violet/20 text-electric-violet dark:text-electric-violetLight font-mono text-xs font-semibold mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal-900 dark:text-white tracking-tight">
              AI & Machine Learning Projects
            </h2>
            <p className="mt-2 text-charcoal-600 dark:text-slate-400 max-w-xl text-sm sm:text-base">
              Three end-to-end engineered projects spanning Multimodal AI, Computer Vision, and Predictive Modeling.
            </p>
          </div>

          <p className="text-xs font-mono text-charcoal-500 dark:text-slate-400 bg-white dark:bg-charcoal-800 px-3 py-1.5 rounded-lg border border-charcoal-900/10 dark:border-white/10">
            Click any project to view architecture case study
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => {
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative rounded-2xl bg-white dark:bg-charcoal-900 border border-charcoal-900/10 dark:border-white/10 shadow-subtle dark:shadow-card-dark hover:shadow-card hover:border-electric-violet/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Header / Diagram Illustration */}
                <div className="relative p-6 bg-gradient-to-br from-cream-100 to-cream-50 dark:from-charcoal-850 dark:to-charcoal-800 border-b border-charcoal-900/5 dark:border-white/5 overflow-hidden">
                  
                  {/* Subtle decorative grid */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

                  {/* Top Bar with Category & Tag */}
                  <div className="flex items-center justify-between relative z-10 mb-5">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold uppercase bg-white/90 dark:bg-charcoal-900/90 text-electric-violet dark:text-electric-violetLight border border-electric-violet/20 shadow-xs">
                      {project.category}
                    </span>
                    {project.metrics && (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Visual Preview Graphic depending on project */}
                  <div className="h-40 rounded-xl bg-white/90 dark:bg-charcoal-900/90 border border-charcoal-900/5 dark:border-white/10 p-4 flex flex-col justify-between relative shadow-xs overflow-hidden">
                    {project.id === 'cognitive-load-ai' && (
                      <div className="h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between text-[11px] font-mono text-charcoal-600 dark:text-slate-300">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5 text-electric-violet dark:text-electric-violetLight" />
                            Gaze & Expression Tracking
                          </span>
                          <span className="text-[10px] bg-electric-violet/10 dark:bg-electric-violet/20 text-electric-violet dark:text-electric-violetLight px-1.5 py-0.5 rounded font-mono">
                            Multimodal
                          </span>
                        </div>
                        {/* Behavioral Wave & Tiers */}
                        <div className="space-y-2 py-2">
                          <div className="flex items-center gap-2 text-[10px] font-mono">
                            <span className="w-12 text-charcoal-400 dark:text-slate-500">Features</span>
                            <div className="flex-1 bg-cream-100 dark:bg-charcoal-800 h-2 rounded-full overflow-hidden">
                              <div className="bg-electric-violet dark:bg-electric-violetLight h-full w-4/5 rounded-full" />
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-mono">
                            <span className="w-12 text-charcoal-400 dark:text-slate-500">Class</span>
                            <div className="flex items-center gap-1.5">
                              <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800">
                                Low
                              </span>
                              <span className="px-1.5 py-0.5 rounded text-[9px] bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold border border-amber-200 dark:border-amber-800">
                                Medium
                              </span>
                              <span className="px-1.5 py-0.5 rounded text-[9px] bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-bold border border-rose-200 dark:border-rose-800">
                                High
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-[10px] font-mono text-charcoal-500 dark:text-slate-400 flex items-center justify-between border-t border-charcoal-900/5 dark:border-white/5 pt-1">
                          <span>MediaPipe + LibreFace</span>
                          <span className="text-electric-violet dark:text-electric-violetLight font-medium">3-Tier Classification</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'abnormal-activity-ai' && (
                      <div className="h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between text-[11px] font-mono text-charcoal-600 dark:text-slate-300">
                          <span className="flex items-center gap-1">
                            <Activity className="w-3.5 h-3.5 text-electric-cobalt dark:text-electric-cobaltLight" />
                            Pose Estimation (33 Landmarks)
                          </span>
                          <span className="text-[10px] bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded font-mono">
                            Real-time
                          </span>
                        </div>
                        <div className="flex items-center justify-center py-1">
                          <div className="px-4 py-2 rounded-lg bg-cream-50 dark:bg-charcoal-800 border border-charcoal-900/10 dark:border-white/10 text-center">
                            <span className="text-[11px] font-mono font-semibold text-charcoal-800 dark:text-slate-200 block">
                              KNN Spatial Classifier
                            </span>
                            <span className="text-[10px] font-mono text-rose-600 dark:text-rose-400">
                              Voice & Email Multi-Alert
                            </span>
                          </div>
                        </div>
                        <div className="text-[10px] font-mono text-charcoal-500 dark:text-slate-400 flex items-center justify-between border-t border-charcoal-900/5 dark:border-white/5 pt-1">
                          <span>MediaPipe Pose + OpenCV</span>
                          <span className="text-electric-cobalt dark:text-electric-cobaltLight font-medium">Firebase Alerts</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'weather-prediction-ml' && (
                      <div className="h-full flex flex-col justify-between">
                        <div className="flex items-center justify-between text-[11px] font-mono text-charcoal-600 dark:text-slate-300">
                          <span className="flex items-center gap-1">
                            <CloudSun className="w-3.5 h-3.5 text-amber-500" />
                            Meteorological Inference
                          </span>
                          <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.5 rounded font-mono font-bold">
                            96%+ ACCURACY
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 py-1 text-center">
                          <div className="p-1 rounded bg-cream-50 dark:bg-charcoal-800 text-[10px] font-mono">
                            <span className="text-charcoal-400 dark:text-slate-500 block text-[8px]">MODEL</span>
                            <span className="font-bold text-charcoal-800 dark:text-slate-200">XGBoost</span>
                          </div>
                          <div className="p-1 rounded bg-cream-50 dark:bg-charcoal-800 text-[10px] font-mono">
                            <span className="text-charcoal-400 dark:text-slate-500 block text-[8px]">API</span>
                            <span className="font-bold text-charcoal-800 dark:text-slate-200">FastAPI</span>
                          </div>
                          <div className="p-1 rounded bg-cream-50 dark:bg-charcoal-800 text-[10px] font-mono">
                            <span className="text-charcoal-400 dark:text-slate-500 block text-[8px]">LATENCY</span>
                            <span className="font-bold text-emerald-600 dark:text-emerald-400">&lt;20ms</span>
                          </div>
                        </div>
                        <div className="text-[10px] font-mono text-charcoal-500 dark:text-slate-400 flex items-center justify-between border-t border-charcoal-900/5 dark:border-white/5 pt-1">
                          <span>Random Forest & XGBoost</span>
                          <span className="text-emerald-700 dark:text-emerald-400 font-semibold">REST API Deployed</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-charcoal-900 dark:text-white mb-2 leading-snug group-hover:text-electric-violet dark:group-hover:text-electric-violetLight transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal-600 dark:text-slate-400 leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cream-50 dark:bg-charcoal-800 text-charcoal-700 dark:text-slate-300 border border-charcoal-900/5 dark:border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cream-100 dark:bg-charcoal-800 text-charcoal-500 dark:text-slate-400">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-charcoal-900/10 dark:border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-charcoal-900 dark:text-white group-hover:text-electric-violet dark:group-hover:text-electric-violetLight transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-charcoal-600 dark:text-slate-400 hover:text-charcoal-900 dark:hover:text-white hover:bg-cream-100 dark:hover:bg-charcoal-800 transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
