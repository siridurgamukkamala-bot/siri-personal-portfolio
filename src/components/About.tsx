import React from 'react';
import { User, GraduationCap, MapPin, Target, Brain, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#E8EDE5] border-t border-[#D9E0D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-[#426B50]">
            <span>01</span>
            <span className="text-[#C98268]" aria-hidden="true">
              /
            </span>
            <span>Background & Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#292D29]">
            A Little <span className="text-[#426B50]">About Me</span>
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Authentic Paragraph & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-[#FFFFFF] border border-[#D9E0D7] soft-card-shadow relative">
              <p className="text-base sm:text-lg text-[#292D29] leading-relaxed">
                {PERSONAL_INFO.aboutText}
              </p>

              <div className="mt-6 pt-6 border-t border-[#D9E0D7] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="block text-[#426B50] font-semibold mb-1">Learning First</span>
                  <span className="text-[#6B716B]">Committed to mastering core algorithms and object-oriented principles.</span>
                </div>
                <div>
                  <span className="block text-[#426B50] font-semibold mb-1">Hands-on Projects</span>
                  <span className="text-[#6B716B]">Gaining practical experience through live deployed college websites.</span>
                </div>
                <div>
                  <span className="block text-[#426B50] font-semibold mb-1">Motivated Outlook</span>
                  <span className="text-[#6B716B]">Eager to grow step-by-step into a well-rounded software developer.</span>
                </div>
              </div>
            </div>

            {/* Current Mindset Statement */}
            <div className="p-5 rounded-lg bg-[#FFFFFF] border border-[#D9E0D7] soft-card-shadow flex items-start gap-4">
              <div className="p-2.5 rounded bg-[#E8EDE5] text-[#426B50] shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-[#292D29]">My Engineering Philosophy</h4>
                <p className="text-xs sm:text-sm text-[#6B716B] leading-relaxed">
                  As a second-year undergraduate, I believe in being open and honest about my current level while pushing daily to expand what I know. Every problem solved in Java, Python, or web design is a foundation stone for the engineer I aim to become.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Personal Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFFFF] border border-[#D9E0D7] hover:border-[#426B50]/40 transition-colors rounded-xl p-6 sm:p-8 space-y-6 soft-card-shadow relative overflow-hidden">
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#426B50] via-[#C98268] to-[#426B50]/30" />

              <div className="flex items-center justify-between pb-4 border-b border-[#D9E0D7]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6B716B]">Candidate Profile</span>
                  <h3 className="text-2xl font-bold text-[#292D29] flex items-center gap-2">
                    {PERSONAL_INFO.name}
                    <span className="w-2 h-2 rounded-full bg-[#426B50]" />
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-lg bg-[#E8EDE5] border border-[#D9E0D7] flex items-center justify-center text-[#426B50] font-mono text-lg font-bold">
                  S
                </div>
              </div>

              {/* Profile Details List */}
              <div className="space-y-4 text-sm">
                <div className="flex items-start justify-between py-2 border-b border-[#D9E0D7]/60">
                  <span className="text-[#6B716B] flex items-center gap-2">
                    <User className="w-4 h-4 text-[#426B50]" />
                    Name
                  </span>
                  <span className="text-[#292D29] font-medium text-right">{PERSONAL_INFO.name}</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-[#D9E0D7]/60">
                  <span className="text-[#6B716B] flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#426B50]" />
                    Education
                  </span>
                  <span className="text-[#292D29] font-medium text-right">{PERSONAL_INFO.educationSummary}</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-[#D9E0D7]/60">
                  <span className="text-[#6B716B] flex items-center gap-2">
                    <Brain className="w-4 h-4 text-[#426B50]" />
                    Branch
                  </span>
                  <span className="text-[#292D29] font-medium text-right">{PERSONAL_INFO.branchShort}</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-[#D9E0D7]/60">
                  <span className="text-[#6B716B] flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#426B50]" />
                    Focus
                  </span>
                  <span className="text-[#292D29] font-medium text-right">Software Dev & AI/ML</span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-[#D9E0D7]/60">
                  <span className="text-[#6B716B] flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#C98268]" />
                    Goal
                  </span>
                  <span className="text-[#426B50] font-semibold text-right">Become a Software Engineer</span>
                </div>

                <div className="flex items-start justify-between py-2">
                  <span className="text-[#6B716B] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#426B50]" />
                    Institution
                  </span>
                  <span className="text-[#292D29] font-medium text-right text-xs max-w-[200px]">
                    Sasi Institute of Tech & Engg, Tadepalligudem
                  </span>
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-2">
                <div className="p-3 rounded-md bg-[#E8EDE5] border border-[#D9E0D7] text-xs text-[#6B716B]">
                  <span className="text-[#426B50] font-semibold">Active Status:</span> Undergrad Student exploring programming & building projects.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
