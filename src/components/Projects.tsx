import React, { useState } from 'react';
import { ExternalLink, Github, Info, X, CheckCircle2, Globe, Layout } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#E8EDE5] border-t border-[#D9E0D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-[#426B50]">
            <span>03</span>
            <span className="text-[#C98268]" aria-hidden="true">
              /
            </span>
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#292D29]">
            Things I've <span className="text-[#426B50]">Built</span>
          </h2>
          <p className="mt-4 text-base text-[#6B716B] leading-relaxed">
            Here are some website projects I've worked on while exploring web development and AI-assisted development.
          </p>
        </div>

        {/* 2 Featured Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {PROJECTS.map((project) => {
            const hasError = failedImages[project.id];
            const imageSrc = hasError ? project.fallbackImage : project.previewImage;

            return (
              <div
                key={project.id}
                className="bg-[#FFFFFF] border border-[#D9E0D7] hover:border-[#426B50]/60 transition-all duration-300 rounded-xl overflow-hidden flex flex-col justify-between soft-card-shadow group"
              >
                <div>
                  {/* Browser Chrome Header */}
                  <div className="bg-[#F7F5F0] border-b border-[#D9E0D7] px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C98268]" title="Terracotta Window Dot" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#E5B887]" title="Warm Amber Dot" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#426B50]" title="Forest Green Dot" />
                      <span className="ml-2 text-xs font-mono text-[#6B716B] truncate max-w-[200px] sm:max-w-xs">
                        {project.liveUrl.replace('https://', '')}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#426B50] font-semibold bg-[#E8EDE5] px-2.5 py-0.5 rounded border border-[#D9E0D7]">
                      LIVE DEMO
                    </span>
                  </div>

                  {/* Website Preview Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[#F7F5F0] border-b border-[#D9E0D7]">
                    <img
                      src={imageSrc}
                      alt={`${project.title} live website preview`}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(project.id)}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>

                  {/* Project Details Below Preview Image */}
                  <div className="p-6 sm:p-7 space-y-4">
                    {/* Category and Deployment Tag */}
                    <div className="flex items-center gap-2 text-xs font-mono text-[#6B716B]">
                      <span className="text-[#426B50] font-semibold">{project.type}</span>
                      <span aria-hidden="true" className="text-[#C98268]">·</span>
                      <span>Vercel Deployment</span>
                    </div>

                    {/* Project Name Prominently Below Preview */}
                    <h3 className="text-2xl font-bold text-[#292D29] group-hover:text-[#426B50] transition-colors">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-sm text-[#6B716B] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Verified Features Box */}
                    <div className="p-4 rounded-lg bg-[#F7F5F0] border border-[#D9E0D7] text-xs font-mono">
                      <div className="flex items-center justify-between pb-2 border-b border-[#D9E0D7] text-[11px]">
                        <span className="text-[#292D29] font-semibold">Key Highlights</span>
                        <span className="text-[#426B50]">Verified Implementation</span>
                      </div>
                      <div className="pt-2.5 space-y-1.5 text-[12px] text-[#292D29]">
                        {project.features.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#426B50] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#6B716B] block mb-2">
                        Technical Tags
                      </span>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#292D29]">
                        {project.tags.map((tag, idx) => (
                          <span key={tag} className="flex items-center gap-2 font-mono">
                            {idx > 0 && <span className="text-[#C98268]" aria-hidden="true">/</span>}
                            <span>{tag}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 sm:p-7 pt-0">
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#D9E0D7]">
                    {/* Live Demo Button */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#426B50] hover:bg-[#365741] rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#426B50] shadow-sm"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white" />
                    </a>

                    {/* GitHub Button (only when repository URL is verified and available) */}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#292D29] bg-[#E8EDE5] border border-[#D9E0D7] hover:border-[#426B50] hover:bg-[#D9E0D7] rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#426B50]"
                        title="View GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5 text-[#292D29]" />
                        <span>GitHub</span>
                      </a>
                    ) : null}

                    {/* Quick details modal button */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="p-2.5 text-[#6B716B] hover:text-[#292D29] bg-[#F7F5F0] border border-[#D9E0D7] hover:border-[#426B50] rounded-md transition-colors"
                      title={`View details for ${project.title}`}
                      aria-label={`View details for ${project.title}`}
                    >
                      <Info className="w-4 h-4 text-[#426B50]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Context & Honesty Note */}
        <div className="mt-10 p-5 rounded-xl bg-[#FFFFFF] border border-[#D9E0D7] text-xs text-[#6B716B] flex items-start gap-3 soft-card-shadow">
          <span className="text-[#C98268] font-mono text-sm leading-none mt-0.5" aria-hidden="true">
            *
          </span>
          <p className="leading-relaxed">
            <strong className="text-[#292D29]">Transparency note:</strong> These are college and vibe-coding projects created during my undergraduate exploration. I present them honestly as live frontend demonstrations of my ongoing technical learning, modern layout experiments, and website design exploration.
          </p>
        </div>
      </div>

      {/* Modal for full project details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-[#FFFFFF] border border-[#D9E0D7] rounded-xl max-w-lg w-full p-6 sm:p-7 relative shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-1.5 text-[#6B716B] hover:text-[#292D29] rounded-md hover:bg-[#E8EDE5] transition-colors focus:outline-none focus:ring-2 focus:ring-[#426B50]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#426B50] mb-2">
              <span>{selectedProject.type}</span>
              <span className="text-[#C98268]">/</span>
              <span>Project Snapshot</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#292D29] mb-2">
              {selectedProject.title}
            </h3>

            {/* Preview image inside modal */}
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-[#D9E0D7] mb-4 bg-[#F7F5F0]">
              <img
                src={failedImages[selectedProject.id] ? selectedProject.fallbackImage : selectedProject.previewImage}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                onError={() => handleImageError(selectedProject.id)}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <p className="text-sm text-[#6B716B] leading-relaxed mb-4">
              {selectedProject.description}
            </p>

            <div className="space-y-3 mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#292D29] block">
                Features & Highlights
              </span>
              <div className="space-y-2">
                {selectedProject.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#6B716B]">
                    <CheckCircle2 className="w-4 h-4 text-[#426B50] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#D9E0D7]">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#426B50] hover:bg-[#365741] rounded-md transition-colors"
              >
                <span>Launch Live Site</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </a>

              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#292D29] bg-[#E8EDE5] border border-[#D9E0D7] hover:border-[#426B50] rounded-md transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#292D29]" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
