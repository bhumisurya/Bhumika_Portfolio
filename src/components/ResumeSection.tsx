import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  ExternalLink,
  FileCheck2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="py-20 lg:py-28 bg-white/70 dark:bg-charcoal-900/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Call to Action Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-charcoal-900 via-charcoal-850 to-charcoal-900 dark:from-charcoal-950 dark:via-charcoal-900 dark:to-charcoal-950 text-white shadow-2xl border border-charcoal-900/10 dark:border-white/10 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-electric-violet/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric-cobalt/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-electric-violetLight border border-white/15 text-xs font-mono font-semibold mb-6">
              <FileCheck2 className="w-3.5 h-3.5 text-white" />
              <span className="text-white">VERIFIED CURRICULUM VITAE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-4">
              Review Full Professional Resume
            </h2>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8 max-w-xl">
              Includes complete educational records, technical stack details, project architectures, and certified credentials. Ready for recruitment and technical evaluation.
            </p>

            {/* Quick Summary Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mb-8 text-left">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <span className="text-[10px] font-mono text-white/50 block">SPECIALIZATION</span>
                <span className="text-xs font-bold text-white block mt-0.5">AI/ML Engineering</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <span className="text-[10px] font-mono text-white/50 block">EDUCATION</span>
                <span className="text-xs font-bold text-white block mt-0.5">C-DAC & SPPU CS</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <span className="text-[10px] font-mono text-white/50 block">PROJECTS</span>
                <span className="text-xs font-bold text-white block mt-0.5">3 End-to-End</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <span className="text-[10px] font-mono text-white/50 block">LOCATION</span>
                <span className="text-xs font-bold text-white block mt-0.5">Nashik, India</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href={personalInfo.resumePath}
                download="Bhumika_Devendra_Suryawanshi_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-electric-violet to-electric-cobalt text-white font-semibold text-sm shadow-lg shadow-electric-violet/30 hover:shadow-electric-violet/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                onClick={() => setShowPreview(!showPreview)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/15 transition-all duration-200"
              >
                {showPreview ? (
                  <>
                    <EyeOff className="w-4 h-4" />
                    <span>Hide PDF Preview</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4" />
                    <span>View PDF Inline</span>
                  </>
                )}
              </button>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-transparent text-white/80 hover:text-white text-xs font-semibold hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in New Tab</span>
              </a>
            </div>

            {/* Verification Note */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-white/50">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct verified document: Bhumika_AIML_resume.pdf</span>
            </div>

          </div>

          {/* Toggleable Inline PDF Viewer */}
          {showPreview && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 pt-6 border-t border-white/15 w-full"
            >
              <div className="w-full rounded-2xl overflow-hidden bg-white dark:bg-charcoal-900 shadow-2xl border border-white/20">
                <div className="bg-charcoal-800 dark:bg-charcoal-950 text-white px-4 py-2 flex items-center justify-between text-xs font-mono">
                  <span>PDF Viewer: Bhumika_Devendra_Suryawanshi_Resume.pdf</span>
                  <a
                    href={personalInfo.resumePath}
                    download="Bhumika_Devendra_Suryawanshi_Resume.pdf"
                    className="text-electric-violetLight hover:underline flex items-center gap-1 font-sans font-semibold"
                  >
                    <Download className="w-3 h-3" />
                    Download
                  </a>
                </div>
                <iframe
                  src={`${personalInfo.resumePath}#toolbar=1&navpanes=0`}
                  title="Bhumika Suryawanshi Resume Preview"
                  className="w-full h-[650px] sm:h-[800px] border-none"
                />
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
