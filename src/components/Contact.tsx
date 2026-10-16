import React, { useState } from 'react';
import { Mail, Github, Copy, Check, ExternalLink, Send, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    subject || 'Connecting with Siri'
  )}&body=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F7F5F0] bg-grid-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-[#426B50]">
            <span>06</span>
            <span className="text-[#C98268]" aria-hidden="true">
              /
            </span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#292D29]">
            Let's <span className="text-[#426B50]">Connect</span>
          </h2>
          <p className="mt-4 text-base text-[#6B716B] leading-relaxed">
            {PERSONAL_INFO.contactIntro}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card */}
            <div className="bg-[#FFFFFF] border border-[#D9E0D7] hover:border-[#426B50]/60 transition-colors rounded-xl p-6 sm:p-7 soft-card-shadow relative overflow-hidden group">
              <div className="flex items-center justify-between pb-4 border-b border-[#D9E0D7]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#E8EDE5] text-[#426B50]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#292D29]">Direct Email</h3>
                    <p className="text-xs text-[#6B716B]">Best way to reach me</p>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#426B50]" />
              </div>

              <div className="mt-4 space-y-3">
                <p className="font-mono text-sm sm:text-base text-[#292D29] break-all select-all p-3 rounded bg-[#F7F5F0] border border-[#D9E0D7]">
                  {PERSONAL_INFO.email}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#426B50] hover:bg-[#365741] rounded-md transition-colors shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#292D29] bg-[#E8EDE5] border border-[#D9E0D7] hover:border-[#426B50] hover:bg-[#D9E0D7] rounded-md transition-colors"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#426B50]" />
                        <span className="text-[#426B50]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#6B716B]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="bg-[#FFFFFF] border border-[#D9E0D7] hover:border-[#426B50]/60 transition-colors rounded-xl p-6 sm:p-7 soft-card-shadow relative overflow-hidden group">
              <div className="flex items-center justify-between pb-4 border-b border-[#D9E0D7]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#E8EDE5] text-[#426B50]">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#292D29]">GitHub Profile</h3>
                    <p className="text-xs text-[#6B716B]">Repositories & code exploration</p>
                  </div>
                </div>
                <span className="w-2 h-2 rounded-full bg-[#C98268]" />
              </div>

              <div className="mt-4 space-y-3">
                <div className="p-3 rounded bg-[#F7F5F0] border border-[#D9E0D7] flex items-center justify-between">
                  <span className="font-mono text-sm text-[#292D29]">
                    {PERSONAL_INFO.githubUsername}
                  </span>
                  <span className="text-[11px] font-mono text-[#426B50] font-semibold">Public</span>
                </div>

                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#292D29] bg-[#E8EDE5] border border-[#D9E0D7] hover:border-[#426B50] hover:bg-[#D9E0D7] rounded-md transition-colors"
                >
                  <span>Open GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#426B50]" />
                </a>
              </div>
            </div>

            {/* College & Location Card */}
            <div className="p-4 rounded-lg bg-[#E8EDE5] border border-[#D9E0D7] text-xs text-[#6B716B] space-y-1">
              <div className="flex items-center gap-2 text-[#292D29] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#426B50]" />
                <span>Academic Affiliation</span>
              </div>
              <p>Sasi Institute of Technology and Engineering, Tadepalligudem</p>
              <p className="text-[#426B50] font-mono">B.Tech 2nd Year (CSM)</p>
            </div>
          </div>

          {/* Right Column: Honest Quick Mailto Drafter */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#D9E0D7] rounded-xl p-6 sm:p-8 soft-card-shadow">
              <div className="flex items-center justify-between pb-4 border-b border-[#D9E0D7] mb-6">
                <div>
                  <h3 className="text-lg font-bold text-[#292D29] flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-[#426B50]" />
                    Compose Email to Siri
                  </h3>
                  <p className="text-xs text-[#6B716B] mt-1">
                    Fill in your details below to open your preferred email client ready to send.
                  </p>
                </div>
                <span className="text-xs font-mono text-[#426B50] font-semibold bg-[#E8EDE5] px-2.5 py-1 rounded border border-[#D9E0D7]">
                  mailto client
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono uppercase tracking-wider text-[#6B716B] mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Discussing project collaboration / Mentorship / Tech chat"
                    className="w-full px-4 py-2.5 rounded-md bg-[#F7F5F0] border border-[#D9E0D7] text-[#292D29] placeholder-[#6B716B]/60 text-sm focus:outline-none focus:border-[#426B50] focus:ring-1 focus:ring-[#426B50] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono uppercase tracking-wider text-[#6B716B] mb-1.5"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Siri, I came across your portfolio website and would like to connect regarding..."
                    className="w-full px-4 py-2.5 rounded-md bg-[#F7F5F0] border border-[#D9E0D7] text-[#292D29] placeholder-[#6B716B]/60 text-sm focus:outline-none focus:border-[#426B50] focus:ring-1 focus:ring-[#426B50] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href={mailtoUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#426B50] hover:bg-[#365741] rounded-md transition-colors shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Open Email Client</span>
                  </a>

                  <span className="text-[11px] font-mono text-[#6B716B]">
                    Recipient: <strong className="text-[#292D29]">{PERSONAL_INFO.email}</strong>
                  </span>
                </div>
              </div>

              {/* Backend Notice */}
              <div className="mt-6 pt-4 border-t border-[#D9E0D7] text-[11px] text-[#6B716B] leading-relaxed">
                <span className="text-[#426B50] font-semibold">Note:</span> To guarantee privacy and prevent lost messages, this form drafts directly into your device's default mail client with zero intermediation or third-party tracking.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
