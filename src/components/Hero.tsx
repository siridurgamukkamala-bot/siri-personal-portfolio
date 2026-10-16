import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'java' | 'python' | 'shell'>('java');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[#F7F5F0] bg-grid-pattern"
    >
      {/* Subtle atmospheric warm tones */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#426B50]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-20 w-80 h-80 bg-[#C98268]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Small introductory label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#FFFFFF] border border-[#D9E0D7] text-xs font-mono tracking-wider uppercase text-[#292D29] soft-card-shadow">
              <span className="w-2 h-2 rounded-full bg-[#426B50]" aria-hidden="true" />
              <span>{PERSONAL_INFO.heroIntro}</span>
              <span className="text-[#C98268] font-bold" aria-hidden="true">
                /
              </span>
              <span className="text-[#6B716B]">2nd Year</span>
            </div>

            {/* Main Heading & Subheading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#292D29] leading-[1.1]">
                Hi, I'm <span className="text-[#426B50]">Siri</span>
                <span className="text-[#C98268]">.</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#292D29] leading-snug">
                Aspiring <span className="text-[#426B50]">Software Developer</span>
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#6B716B] leading-relaxed max-w-2xl">
              {PERSONAL_INFO.heroText}
            </p>

            {/* Status Label */}
            <div className="w-full sm:w-auto p-3.5 rounded-md bg-[#FFFFFF] border border-[#D9E0D7] flex items-center gap-3 soft-card-shadow">
              <span className="w-2 h-2 rounded-full bg-[#426B50] shrink-0" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-mono text-[#292D29] tracking-wide">
                <span className="text-[#426B50] font-semibold">Currently Learning:</span>{' '}
                <span className="text-[#6B716B]">Java</span> ·{' '}
                <span className="text-[#6B716B]">Python</span> ·{' '}
                <span className="text-[#6B716B]">Advanced Data Structures (ADS)</span> ·{' '}
                <span className="text-[#6B716B]">AI/ML</span>
              </p>
            </div>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#426B50] rounded-md hover:bg-[#365741] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#426B50] shadow-sm"
              >
                Explore My Projects
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#292D29] bg-[#FFFFFF] border border-[#D9E0D7] hover:border-[#426B50] hover:bg-[#F7F5F0] rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#426B50] soft-card-shadow"
              >
                Contact Me
                <Mail className="w-4 h-4 text-[#6B716B]" />
              </a>
            </div>

            {/* Quick Context Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl text-xs text-[#6B716B]">
              <div className="border-t border-[#D9E0D7] pt-2">
                <span className="block text-[#292D29] font-semibold">B.Tech CSM</span>
                <span>Sasi Tech, Tadepalligudem</span>
              </div>
              <div className="border-t border-[#D9E0D7] pt-2">
                <span className="block text-[#426B50] font-semibold">2 Live Web Apps</span>
                <span>Active projects built</span>
              </div>
              <div className="border-t border-[#D9E0D7] pt-2 col-span-2 sm:col-span-1">
                <span className="block text-[#292D29] font-semibold">Focus Areas</span>
                <span>DSA, AI/ML & Web</span>
              </div>
            </div>
          </div>

          {/* Right Column: Developer Terminal Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="w-full max-w-lg bg-[#FFFFFF] border border-[#D9E0D7] hover:border-[#426B50]/40 transition-colors rounded-xl soft-card-shadow overflow-hidden">
              {/* Window Header */}
              <div className="bg-[#E8EDE5] px-4 py-3 border-b border-[#D9E0D7] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#C98268]" title="Terracotta Window Dot" />
                  <span className="w-3 h-3 rounded-full bg-[#E5B887]" title="Warm Amber Dot" />
                  <span className="w-3 h-3 rounded-full bg-[#426B50]" title="Forest Green Dot" />
                </div>

                {/* Tab Switchers */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('java')}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                      activeTab === 'java'
                        ? 'bg-[#FFFFFF] text-[#426B50] font-semibold border border-[#D9E0D7]'
                        : 'text-[#6B716B] hover:text-[#292D29]'
                    }`}
                  >
                    Siri.java
                  </button>
                  <button
                    onClick={() => setActiveTab('python')}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                      activeTab === 'python'
                        ? 'bg-[#FFFFFF] text-[#426B50] font-semibold border border-[#D9E0D7]'
                        : 'text-[#6B716B] hover:text-[#292D29]'
                    }`}
                  >
                    profile.py
                  </button>
                  <button
                    onClick={() => setActiveTab('shell')}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                      activeTab === 'shell'
                        ? 'bg-[#FFFFFF] text-[#426B50] font-semibold border border-[#D9E0D7]'
                        : 'text-[#6B716B] hover:text-[#292D29]'
                    }`}
                  >
                    bash
                  </button>
                </div>

                <div className="text-[11px] font-mono text-[#6B716B] hidden sm:block">
                  v2.026
                </div>
              </div>

              {/* Terminal Code View */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[310px] bg-[#FAF8F5]">
                {activeTab === 'java' && (
                  <div className="space-y-1">
                    <p className="text-[#6B716B]">// Student Profile & Learning Roadmap</p>
                    <p className="text-[#C98268]">
                      public class <span className="text-[#292D29] font-semibold">SiriJourney</span> &#123;
                    </p>
                    <p className="pl-4 text-[#6B716B]">
                      <span className="text-[#426B50] font-semibold">String</span> student ={' '}
                      <span className="text-[#292D29]">"Siri"</span>;
                    </p>
                    <p className="pl-4 text-[#6B716B]">
                      <span className="text-[#426B50] font-semibold">String</span> degree ={' '}
                      <span className="text-[#292D29]">"B.Tech (2nd Year)"</span>;
                    </p>
                    <p className="pl-4 text-[#6B716B]">
                      <span className="text-[#426B50] font-semibold">String</span> branch ={' '}
                      <span className="text-[#292D29]">"CSM @ Sasi Tech"</span>;
                    </p>
                    <p className="pl-4 text-[#6B716B]">
                      <span className="text-[#426B50] font-semibold">String</span> careerGoal ={' '}
                      <span className="text-[#292D29]">"Aspiring Software Developer"</span>;
                    </p>
                    <p className="pl-4 text-[#6B716B]">
                      <span className="text-[#426B50] font-semibold">String[]</span> learning = &#123;
                    </p>
                    <p className="pl-8 text-[#292D29]">
                      "Java", "Python", "Advanced Data Structures", "AI & ML"
                    </p>
                    <p className="pl-4 text-[#6B716B]">&#125;;</p>
                    <p className="pl-4 text-[#C98268]">
                      void <span className="text-[#426B50] font-semibold">dailyRoutine</span>() &#123;
                    </p>
                    <p className="pl-8 text-[#6B716B]">
                      practiceFundamentals();
                    </p>
                    <p className="pl-8 text-[#6B716B]">
                      buildPracticalWebProjects();
                    </p>
                    <p className="pl-4 text-[#C98268]">&#125;</p>
                    <p className="text-[#C98268]">&#125;</p>
                  </div>
                )}

                {activeTab === 'python' && (
                  <div className="space-y-1">
                    <p className="text-[#6B716B]"># Python Exploration & Foundations</p>
                    <p className="text-[#292D29]">
                      <span className="text-[#426B50] font-semibold">def</span>{' '}
                      <span className="text-[#292D29] font-semibold">get_developer_snapshot</span>():
                    </p>
                    <p className="pl-4 text-[#6B716B]">
                      <span className="text-[#C98268]">return</span> &#123;
                    </p>
                    <p className="pl-8 text-[#6B716B]">
                      <span className="text-[#426B50]">"name"</span>: "Siri",
                    </p>
                    <p className="pl-8 text-[#6B716B]">
                      <span className="text-[#426B50]">"institution"</span>: "Sasi Institute of Tech & Engg",
                    </p>
                    <p className="pl-8 text-[#6B716B]">
                      <span className="text-[#426B50]">"branch"</span>: "Computer Science & Machine Learning",
                    </p>
                    <p className="pl-8 text-[#6B716B]">
                      <span className="text-[#426B50]">"status"</span>: "Motivated Learner",
                    </p>
                    <p className="pl-8 text-[#6B716B]">
                      <span className="text-[#426B50]">"current_stack"</span>: ["Python", "Java", "ADS", "AI/ML"],
                    </p>
                    <p className="pl-8 text-[#6B716B]">
                      <span className="text-[#426B50]">"mindset"</span>: "Learn by building real projects"
                    </p>
                    <p className="pl-4 text-[#6B716B]">&#125;</p>
                    <p className="pt-2 text-[#426B50] font-semibold">print(get_developer_snapshot())</p>
                  </div>
                )}

                {activeTab === 'shell' && (
                  <div className="space-y-2 text-[#292D29]">
                    <div className="flex items-center gap-2 text-[#6B716B]">
                      <span className="text-[#426B50] font-semibold">siri@portfolio</span>
                      <span className="text-[#C98268]">:</span>
                      <span>~</span>
                      <span className="text-[#426B50]">$</span>
                      <span className="text-[#292D29]">whoami</span>
                    </div>
                    <div className="pl-4 text-[#426B50] font-medium">
                      Siri — 2nd Year B.Tech (CSM) Student & Aspiring Software Developer
                    </div>

                    <div className="flex items-center gap-2 text-[#6B716B] pt-2">
                      <span className="text-[#426B50] font-semibold">siri@portfolio</span>
                      <span className="text-[#C98268]">:</span>
                      <span>~</span>
                      <span className="text-[#426B50]">$</span>
                      <span className="text-[#292D29]">cat current_learning.txt</span>
                    </div>
                    <div className="pl-4 text-[#6B716B] space-y-1">
                      <p>• Java & Object-Oriented Fundamentals</p>
                      <p>• Python Programming & Scripts</p>
                      <p>• Advanced Data Structures (ADS)</p>
                      <p>• AI and Machine Learning Concepts</p>
                    </div>

                    <div className="flex items-center gap-2 text-[#6B716B] pt-2">
                      <span className="text-[#426B50] font-semibold">siri@portfolio</span>
                      <span className="text-[#C98268]">:</span>
                      <span>~</span>
                      <span className="text-[#426B50]">$</span>
                      <span className="inline-block w-2 h-4 bg-[#426B50] animate-pulse" />
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="bg-[#E8EDE5] px-4 py-2.5 border-t border-[#D9E0D7] flex items-center justify-between text-xs font-mono text-[#6B716B]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#426B50]" />
                  <span className="text-[#292D29]">Interactive Terminal</span>
                </div>
                <div className="flex items-center gap-1 text-[11px]">
                  <span>UTF-8</span>
                  <span className="text-[#C98268]">·</span>
                  <span>Sasi Institute, Tadepalligudem</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
