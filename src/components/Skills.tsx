import React from 'react';
import { Terminal, Brain, Code2, Globe, Sparkles, BookOpen } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming':
        return <Terminal className="w-5 h-5 text-[#426B50]" />;
      case 'Computer Science':
        return <Brain className="w-5 h-5 text-[#426B50]" />;
      case 'AI and Emerging Technology':
        return <Sparkles className="w-5 h-5 text-[#426B50]" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-[#426B50]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#426B50]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#F7F5F0] bg-grid-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-[#426B50]">
            <span>02</span>
            <span className="text-[#C98268]" aria-hidden="true">
              /
            </span>
            <span>Technical Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#292D29]">
            Skills & <span className="text-[#426B50]">What I'm Learning</span>
          </h2>
          <p className="mt-4 text-base text-[#6B716B] leading-relaxed">
            These represent my active learning areas and developing competencies as a 2nd-year B.Tech CSM student. I focus on core fundamentals and applying them through projects rather than superficial claims.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="bg-[#FFFFFF] border border-[#D9E0D7] hover:border-[#426B50]/60 transition-all duration-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between group soft-card-shadow"
            >
              <div>
                {/* Header of Category Card */}
                <div className="flex items-center justify-between pb-4 border-b border-[#D9E0D7]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#E8EDE5] group-hover:bg-[#E8EDE5]/80 transition-colors">
                      {getCategoryIcon(category.title)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#292D29] group-hover:text-[#426B50] transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[#6B716B]">{category.subtitle}</p>
                    </div>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C98268]" aria-hidden="true" />
                </div>

                {/* Items in Category */}
                <div className="mt-5 space-y-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-3.5 rounded-lg bg-[#F7F5F0] border border-[#D9E0D7] hover:border-[#426B50]/40 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#292D29] font-mono">
                          {item.name}
                        </span>
                        <span className="text-[11px] font-mono text-[#426B50] font-medium">
                          Active Focus
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs text-[#6B716B] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer indicator */}
              <div className="mt-6 pt-4 border-t border-[#D9E0D7] flex items-center justify-between text-[11px] font-mono text-[#6B716B]">
                <span>Status: Currently Exploring</span>
                <span className="text-[#426B50] font-semibold">In Progress</span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Ethos callout banner */}
        <div className="mt-10 p-5 rounded-xl bg-[#E8EDE5] border border-[#D9E0D7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#FFFFFF] text-[#426B50] shadow-xs">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#292D29]">Honest Learning Commitment</p>
              <p className="text-xs text-[#6B716B]">
                No inflated progress percentages or fake certifications. Just genuine dedication to understanding programming concepts deeply.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-[#426B50] font-semibold whitespace-nowrap shrink-0">
            CSM Curriculum + Self-Study
          </span>
        </div>
      </div>
    </section>
  );
};
