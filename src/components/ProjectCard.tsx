import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative group rounded-2xl overflow-hidden glass-panel flex flex-col h-full hover:bg-[var(--gradient-card-hover)]">
      <div className="p-8 sm:p-10 flex flex-col justify-between flex-1 relative z-10">
        <div>
          {/* Header - Year and Status */}
          <div className="flex items-center justify-between gap-2 mb-8">
            <span className="font-mono text-xs font-semibold text-[var(--accent-violet)] tracking-widest uppercase">
              {project.year}
            </span>
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]`}>
              <span className={`w-1.5 h-1.5 rounded-full ${
                project.status === 'Live' ? 'bg-[var(--accent-teal)] shadow-[0_0_8px_var(--accent-teal)]' : 
                project.status === 'In Progress' ? 'bg-[var(--accent-gold)]' : 'bg-[var(--color-text-muted)]'
              }`} />
              <span className="font-sans text-[10px] font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">
                {project.status}
              </span>
            </div>
          </div>

          {/* Project Title */}
          <h4 className="font-display font-semibold text-2xl text-[var(--color-text-primary)] mb-4 leading-tight">
            {project.title}
          </h4>

          {/* Project Description */}
          <p className="font-sans text-sm text-[var(--color-text-secondary)] leading-relaxed text-left mb-10">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="font-sans text-[10px] font-medium px-3 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-base)] text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center gap-6 pt-8 border-t border-[var(--color-border)] mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-[var(--color-text-muted)] hover:text-[var(--accent-gold)] transition-colors duration-300 group/link"
              title="View Source on GitHub"
            >
              <span>GITHUB</span>
              <ArrowRight size={12} className="-rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target={project.liveUrl === '#' ? '_self' : '_blank'}
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-[var(--accent-gold)] hover:text-[var(--color-text-primary)] transition-colors duration-300 group/link"
            >
              <span>LIVE DEMO</span>
              <ArrowRight size={12} className="-rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
