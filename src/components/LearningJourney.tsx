import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LEARNING_GOALS } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  return (
    <section id="journey" className="py-20 md:py-28 bg-[#E8EDE5] border-t border-[#D9E0D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-[#426B50]">
            <span>05</span>
            <span className="text-[#C98268]" aria-hidden="true">
              /
            </span>
            <span>Growth Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#292D29]">
            Currently Growing, <span className="text-[#426B50]">Always Learning</span>
          </h2>
          <p className="mt-4 text-base text-[#6B716B] leading-relaxed">
            A transparent overview of the engineering priorities and foundational milestones I am actively working on throughout my college journey.
          </p>
        </div>

        {/* Goals Grid / Vertical Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNING_GOALS.map((goal) => (
            <div
              key={goal.step}
              className="bg-[#FFFFFF] border border-[#D9E0D7] hover:border-[#426B50]/60 transition-all duration-200 rounded-xl p-6 flex flex-col justify-between group soft-card-shadow"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#D9E0D7]">
                  <span className="font-mono text-sm font-bold text-[#426B50]">
                    {goal.step}
                  </span>
                  <span className="text-[11px] font-mono text-[#6B716B]">In Progress</span>
                </div>

                <h3 className="mt-4 text-base font-bold text-[#292D29] group-hover:text-[#426B50] transition-colors leading-snug">
                  {goal.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#6B716B] leading-relaxed">
                  {goal.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#D9E0D7]/60 flex items-center justify-between text-xs text-[#6B716B]">
                <span className="flex items-center gap-1.5 font-mono text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#426B50]" />
                  Active Focus Area
                </span>
                <span className="text-[#C98268] font-mono">2026</span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Motto Banner */}
        <div className="mt-12 p-6 rounded-xl bg-[#FFFFFF] border border-[#D9E0D7] flex flex-col sm:flex-row items-center justify-between gap-6 soft-card-shadow">
          <div className="space-y-1">
            <h4 className="text-base font-semibold text-[#292D29] flex items-center gap-2">
              <span className="text-[#426B50]">Step-by-step</span> continuous improvement
              <span className="w-1.5 h-1.5 rounded-full bg-[#C98268]" />
            </h4>
            <p className="text-xs sm:text-sm text-[#6B716B]">
              Combining classroom theory at Sasi Institute with self-paced coding and real web development projects.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#426B50] rounded-md hover:bg-[#365741] transition-colors shrink-0 shadow-sm"
          >
            Connect With Me
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};
