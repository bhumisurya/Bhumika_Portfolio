import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  MessageSquare
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Hi Bhumika,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmitted(true);
    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-violet/10 dark:bg-electric-violet/20 text-electric-violet dark:text-electric-violetLight font-mono text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-charcoal-900 dark:text-white tracking-tight">
            Connect & Collaborate
          </h2>
          <p className="mt-2 text-charcoal-600 dark:text-slate-400 text-sm sm:text-base max-w-xl">
            Open to discussing AI/ML engineering roles, computer vision projects, research collaborations, or entry-level AI opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-charcoal-900 border border-charcoal-900/10 dark:border-white/10 shadow-subtle dark:shadow-card-dark">
              <h3 className="font-display font-bold text-xl text-charcoal-900 dark:text-white mb-6">
                Direct Contact Information
              </h3>

              <div className="space-y-5 text-sm">
                
                {/* Email Item with Copy */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-electric-violet/10 dark:bg-electric-violet/20 text-electric-violet dark:text-electric-violetLight flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-mono text-charcoal-500 dark:text-slate-400 block">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-charcoal-900 dark:text-white font-semibold hover:text-electric-violet dark:hover:text-electric-violetLight transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="mt-1 inline-flex items-center gap-1 text-[11px] font-mono text-electric-violet dark:text-electric-violetLight hover:underline"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-emerald-600 dark:text-emerald-400">Copied to clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy email</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-100 dark:border-emerald-800">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-charcoal-500 dark:text-slate-400 block">Telephone</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-charcoal-900 dark:text-white font-semibold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-electric-cobalt/10 dark:bg-electric-cobalt/20 text-electric-cobalt dark:text-electric-cobaltLight flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-charcoal-500 dark:text-slate-400 block">Location</span>
                    <p className="text-charcoal-900 dark:text-white font-semibold">
                      {personalInfo.location}
                    </p>
                    <span className="text-[11px] text-charcoal-500 dark:text-slate-400">Open to on-site and remote opportunities</span>
                  </div>
                </div>

              </div>

              {/* Verified Profiles */}
              <div className="mt-8 pt-6 border-t border-charcoal-900/10 dark:border-white/10">
                <span className="text-xs font-mono text-charcoal-500 dark:text-slate-400 uppercase tracking-wider block mb-3">
                  Professional Profiles
                </span>
                
                <div className="flex flex-col gap-2.5">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-cream-50 dark:bg-charcoal-800 border border-charcoal-900/5 dark:border-white/5 hover:border-electric-cobalt/40 flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-electric-cobalt dark:text-electric-cobaltLight" />
                      <div>
                        <p className="text-xs font-bold text-charcoal-900 dark:text-white group-hover:text-electric-cobalt dark:group-hover:text-electric-cobaltLight transition-colors">
                          LinkedIn
                        </p>
                        <p className="text-[11px] font-mono text-charcoal-500 dark:text-slate-400">in/bhumii8006942a5</p>
                      </div>
                    </div>
                    <span className="text-xs text-charcoal-400 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-cream-50 dark:bg-charcoal-800 border border-charcoal-900/5 dark:border-white/5 hover:border-charcoal-900/30 dark:hover:border-white/20 flex items-center justify-between group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-4 h-4 text-charcoal-900 dark:text-white" />
                      <div>
                        <p className="text-xs font-bold text-charcoal-900 dark:text-white group-hover:text-electric-violet dark:group-hover:text-electric-violetLight transition-colors">
                          GitHub
                        </p>
                        <p className="text-[11px] font-mono text-charcoal-500 dark:text-slate-400">github.com/bhumisurya</p>
                      </div>
                    </div>
                    <span className="text-xs text-charcoal-400 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Validated Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-charcoal-900 border border-charcoal-900/10 dark:border-white/10 shadow-subtle dark:shadow-card-dark">
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-charcoal-900 dark:text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-charcoal-500 dark:text-slate-400 mt-0.5">
                    Submissions open your email client via pre-filled mailto dispatch.
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-electric-violet/10 dark:bg-electric-violet/20 text-electric-violet dark:text-electric-violetLight flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Message prepared!</p>
                    <p className="text-emerald-700 dark:text-emerald-300 mt-0.5">
                      Your default mail application has been prompted with your message pre-populated. You can also email directly at <strong>{personalInfo.email}</strong>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-charcoal-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-cream-50 dark:bg-charcoal-800 text-xs text-charcoal-900 dark:text-white border transition-all ${
                        errors.name
                          ? 'border-rose-300 dark:border-rose-600 focus:ring-rose-200'
                          : 'border-charcoal-900/10 dark:border-white/10 focus:border-electric-violet focus:ring-2 focus:ring-electric-violet/20'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-charcoal-700 dark:text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-cream-50 dark:bg-charcoal-800 text-xs text-charcoal-900 dark:text-white border transition-all ${
                        errors.email
                          ? 'border-rose-300 dark:border-rose-600 focus:ring-rose-200'
                          : 'border-charcoal-900/10 dark:border-white/10 focus:border-electric-violet focus:ring-2 focus:ring-electric-violet/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-charcoal-700 dark:text-slate-300 mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. AI/ML Engineer Role at Acme Corp"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    className={`w-full px-4 py-2.5 rounded-xl bg-cream-50 dark:bg-charcoal-800 text-xs text-charcoal-900 dark:text-white border transition-all ${
                      errors.subject
                        ? 'border-rose-300 dark:border-rose-600 focus:ring-rose-200'
                        : 'border-charcoal-900/10 dark:border-white/10 focus:border-electric-violet focus:ring-2 focus:ring-electric-violet/20'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-charcoal-700 dark:text-slate-300 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your role, opportunity, or inquiry..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl bg-cream-50 dark:bg-charcoal-800 text-xs text-charcoal-900 dark:text-white border transition-all resize-none ${
                      errors.message
                        ? 'border-rose-300 dark:border-rose-600 focus:ring-rose-200'
                        : 'border-charcoal-900/10 dark:border-white/10 focus:border-electric-violet focus:ring-2 focus:ring-electric-violet/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-electric-violet to-electric-cobalt text-white font-semibold text-xs shadow-md shadow-electric-violet/25 hover:shadow-lg hover:shadow-electric-violet/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message (via Mailto)</span>
                  </button>
                </div>

                <p className="text-[11px] text-charcoal-400 dark:text-slate-500 font-mono pt-2">
                  No tracking scripts or third-party marketing cookies.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
