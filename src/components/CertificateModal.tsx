import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Download, 
  Calendar, 
  ShieldCheck, 
  FileText
} from 'lucide-react';
import { CertificationItem } from '../types';

interface CertificateModalProps {
  certificate: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  const isImage = certificate.fileUrl?.endsWith('.png') || certificate.fileUrl?.endsWith('.jpeg') || certificate.fileUrl?.endsWith('.jpg');

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
                {certificate.category}
              </span>
              {certificate.score && (
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold uppercase bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  {certificate.score}
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-charcoal-400 dark:text-slate-400 hover:text-charcoal-900 dark:hover:text-white hover:bg-cream-100 dark:hover:bg-charcoal-800 transition-colors"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Title & Organization */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-charcoal-500 dark:text-slate-400 mb-2">
                <Calendar className="w-3.5 h-3.5 text-electric-violet dark:text-electric-violetLight" />
                <span>{certificate.year}</span>
                <span>•</span>
                <span>{certificate.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-charcoal-900 dark:text-white tracking-tight leading-snug">
                {certificate.title}
              </h2>
              <p className="text-base font-semibold text-electric-cobalt dark:text-electric-cobaltLight mt-1">
                {certificate.issuer}
              </p>
              {certificate.credentialId && (
                <p className="text-xs font-mono text-charcoal-500 dark:text-slate-400 mt-1">
                  Credential ID: <span className="font-semibold text-charcoal-800 dark:text-slate-200">{certificate.credentialId}</span>
                </p>
              )}
            </div>

            {/* Description */}
            {certificate.details && (
              <p className="text-sm text-charcoal-700 dark:text-slate-300 leading-relaxed">
                {certificate.details}
              </p>
            )}

            {/* Skills */}
            {certificate.skills && certificate.skills.length > 0 && (
              <div>
                <h4 className="text-xs font-mono font-bold text-charcoal-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Skills & Competencies Verified
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-cream-50 dark:bg-charcoal-800 text-charcoal-800 dark:text-slate-200 border border-charcoal-900/5 dark:border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Document Viewer Frame */}
            {certificate.fileUrl && (
              <div className="rounded-xl overflow-hidden border border-charcoal-900/10 dark:border-white/10 bg-cream-100 dark:bg-charcoal-950 p-2 sm:p-4">
                <div className="flex items-center justify-between text-xs font-mono text-charcoal-600 dark:text-slate-400 pb-3 border-b border-charcoal-900/10 dark:border-white/10 mb-3">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <FileText className="w-4 h-4 text-electric-violet" />
                    Verified Certificate Document
                  </span>
                  <a
                    href={certificate.fileUrl}
                    download
                    className="inline-flex items-center gap-1 text-electric-violet hover:underline font-sans font-semibold"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>

                <div className="flex justify-center items-center bg-white dark:bg-charcoal-900 rounded-lg p-2 min-h-[300px] overflow-hidden">
                  {isImage ? (
                    <img
                      src={certificate.fileUrl}
                      alt={certificate.title}
                      className="max-h-[500px] w-auto object-contain rounded shadow-xs"
                    />
                  ) : (
                    <iframe
                      src={`${certificate.fileUrl}#toolbar=0&navpanes=0`}
                      title={certificate.title}
                      className="w-full h-[450px] sm:h-[550px] border-none rounded"
                    />
                  )}
                </div>
              </div>
            )}

            {/* Action Bar */}
            <div className="pt-4 border-t border-charcoal-900/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {certificate.fileUrl && (
                  <a
                    href={certificate.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-electric-violet text-white text-xs font-semibold hover:bg-electric-violet/90 transition-colors shadow-xs"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Full Document</span>
                  </a>
                )}

                {certificate.verificationUrl && (
                  <a
                    href={certificate.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-charcoal-900/20 dark:border-white/20 text-xs font-semibold text-charcoal-700 dark:text-slate-200 hover:bg-cream-100 dark:hover:bg-charcoal-800 transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Verify with Issuer</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-charcoal-900/20 dark:border-white/20 text-xs font-semibold text-charcoal-700 dark:text-slate-300 hover:bg-cream-100 dark:hover:bg-charcoal-800 transition-colors"
              >
                Close Preview
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
