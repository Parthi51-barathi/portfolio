import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Sparkles, Code2, Layers, Check, Info } from 'lucide-react';
import { Project } from '../types';
import { ThemeConfig } from './ThemeSelector';

interface ProjectCardProps {
  project: Project;
  theme: ThemeConfig;
}

export default function ProjectCard({ project, theme }: ProjectCardProps) {
  const [isInspecting, setIsInspecting] = useState(false);

  return (
    <div className="relative group rounded-3xl overflow-hidden glass-panel-glow border border-white/5 transition-all duration-300 hover:border-slate-800 flex flex-col h-full shadow-2xl">
      {/* Decorative top corner gradient splash */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${project.gradientFrom} ${project.gradientTo} opacity-10 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
      
      {/* Left thin color badge strip */}
      <div className={`absolute left-0 inset-y-0 w-1 bg-gradient-to-b ${project.gradientFrom} ${project.gradientTo}`} />

      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 relative z-10">
        <div>
          {/* Header - category and active stats */}
          <div className="flex items-center justify-between gap-2 mb-3.5">
            <span className={`text-[10px] uppercase font-mono tracking-widest font-semibold text-slate-400 bg-slate-900 border border-slate-800/80 px-2.5 py-1 rounded-full`}>
              {project.category}
            </span>
            <div className="flex gap-1.5">
              {project.stats && project.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-end">
                  <span className="text-[9px] text-slate-500 font-mono tracking-wider font-semibold uppercase">{stat.label}</span>
                  <span className={`text-xs font-mono font-bold text-white`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Title */}
          <h4 className="text-xl font-display font-medium text-white mb-2.5 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-colors">
            {project.title}
          </h4>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-900 text-slate-400 hover:text-white transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Main description / Inspect Panel */}
          <div className="relative min-h-[96px] mb-6">
            <AnimatePresence mode="wait">
              {!isInspecting ? (
                <motion.p
                  key="short-desc"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-sm text-slate-400 font-sans leading-relaxed text-left"
                >
                  {project.description}
                </motion.p>
              ) : (
                <motion.div
                  key="full-inspect"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="p-3 bg-slate-950 rounded-2xl border border-slate-900 text-xs font-mono text-slate-300 space-y-1.5 text-left h-full"
                >
                  <div className="flex items-center gap-1.5 text-amber-400 border-b border-slate-900 pb-1 mb-1.5">
                    <Code2 size={12} />
                    <span>Architectural Node Specs</span>
                  </div>
                  <p className="leading-relaxed">
                    <strong className="text-white">Execution Domain:</strong> client-side application context with lightweight localized hooks.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">Design Fidelity:</strong> absolute clean spacing, balanced grids, responsive constraints, user layouts.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex justify-between items-center pt-4 border-t border-slate-900/60 mt-auto">
          {/* Inspect code button */}
          <button
            onClick={() => setIsInspecting((prev) => !prev)}
            className={`flex items-center gap-1.5 text-xs font-mono cursor-pointer transition-colors duration-200 ${
              isInspecting ? 'text-amber-400 hover:text-amber-300' : 'text-slate-500 hover:text-white'
            }`}
          >
            <Info size={12} />
            <span>{isInspecting ? 'CLOSE SPECS' : 'INSPECT ARCHITECTURE'}</span>
          </button>

          {/* Redirect links */}
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-950 border border-slate-900 text-slate-400 hover:text-white hover:border-slate-800 transition-all duration-200"
                title="View Source on GitHub"
              >
                <Github size={14} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target={project.liveUrl === '#' ? '_self' : '_blank'}
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800/80 transition-all duration-200"
              >
                <Layers size={11} className={`${project.liveUrl !== '#' ? 'animate-pulse' : ''}`} />
                <span>{project.liveUrl === '#' ? 'OFFLINE DEMO' : 'LIVE DEMO'}</span>
                <ExternalLink size={10} />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
