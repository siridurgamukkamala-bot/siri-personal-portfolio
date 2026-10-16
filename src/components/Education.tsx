import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#F7F5F0] bg-grid-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-[#426B50]">
            <span>04</span>
            <span className="text-[#C98268]" aria-hidden="true">
              /
            </span>
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#292D29]">
            My <span className="text-[#426B50]">Education</span>
          </h2>
          <p className="mt-4 text-base text-[#6B716B] leading-relaxed">
            Formal engineering studies supporting my practical exploration in software and computer science.
          </p>
        </div>

        {/* Education Timeline / Structured Card */}
        <div className="max-w-3xl">
          <div className="relative pl-6 sm:pl-8 border-l border-[#D9E0D7] space-y-8">
            {/* Timeline node */}
            <div className="relative">
              <span
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#FFFFFF] border-2 border-[#426B50] shadow-sm"
                aria-hidden="true"
              />

              <div className="bg-[#FFFFFF] border border-[#D9E0D7] hover:border-[#426B50]/60 transition-colors rounded-xl p-6 sm:p-8 space-y-5 soft-card-shadow">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#D9E0D7]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#E8EDE5] text-[#426B50]">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#292D29]">
                        Bachelor of Technology (B.Tech)
                      </h3>
                      <p className="text-sm font-semibold text-[#426B50] mt-0.5">
                        {PERSONAL_INFO.branch}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#292D29] bg-[#E8EDE5] px-3 py-1.5 rounded border border-[#D9E0D7]">
                    <Calendar className="w-3.5 h-3.5 text-[#426B50]" />
                    <span>2nd Year Undergrad</span>
                  </div>
                </div>

                {/* Institution & Location */}
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 text-sm text-[#292D29]">
                    <span className="text-[#426B50] font-mono mt-0.5">•</span>
                    <div>
                      <span className="font-semibold text-base block">{PERSONAL_INFO.college}</span>
                      <span className="text-[#6B716B] flex items-center gap-1.5 text-xs mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-[#C98268]" />
                        {PERSONAL_INFO.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#6B716B] leading-relaxed pt-2">
                    {PERSONAL_INFO.educationDescription}
                  </p>
                </div>

                {/* Curriculum Pillars Highlight */}
                <div className="pt-4 border-t border-[#D9E0D7] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-2.5 rounded bg-[#F7F5F0] border border-[#D9E0D7]">
                    <span className="text-[#426B50] block font-semibold mb-0.5">Coursework</span>
                    <span className="text-[#6B716B]">Data Structures, Java, Python</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#F7F5F0] border border-[#D9E0D7]">
                    <span className="text-[#426B50] block font-semibold mb-0.5">Department</span>
                    <span className="text-[#6B716B]">CSM Specialization</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#F7F5F0] border border-[#D9E0D7]">
                    <span className="text-[#426B50] block font-semibold mb-0.5">Status</span>
                    <span className="text-[#6B716B]">Currently Enrolled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
