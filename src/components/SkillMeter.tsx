import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trophy, Lightbulb } from 'lucide-react';
import { SkillCategory } from '../types';
import { ThemeConfig } from './ThemeSelector';

interface SkillMeterProps {
  key?: any;
  category: SkillCategory;
  theme: ThemeConfig;
}

export default function SkillMeter({ category, theme }: SkillMeterProps) {
  return (
    <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/5 relative overflow-hidden h-full flex flex-col justify-between shadow-lg hover:shadow-2xl hover:border-slate-800 transition-all duration-300">
      {/* Visual background blurred blob for identity */}
      <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${category.gradientClass} opacity-5 blur-xl pointer-events-none`} />

      <div>
        {/* Category Header */}
        <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-900/40">
          <h4 className="text-base font-display font-semibold text-white tracking-wide animate-pulse-glow">
            {category.title}
          </h4>
          <span className={`text-[10px] uppercase font-mono px-2.5 py-1 rounded-full text-white bg-gradient-to-r ${category.gradientClass} shadow-md shadow-slate-950/20`}>
            Verified Skill
          </span>
        </div>

        {/* Skills Lists in a beautiful tags cloud style instead of progress bars */}
        <div className="flex flex-wrap gap-2.5">
          {category.skills.map((skill, idx) => {
            return (
              <div
                key={idx}
                className="px-4 py-2 rounded-2xl bg-slate-950/60 border border-slate-900 text-sm font-medium text-slate-200 hover:text-white hover:border-slate-800 transition-all duration-200 flex items-center justify-center gap-1.5"
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradientClass}`} />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative dynamic advice message at bottom */}
      <div className="mt-6 pt-4 border-t border-slate-900/30 flex items-center gap-2 text-[11px] text-slate-500 font-sans leading-relaxed">
        <Lightbulb size={12} className="text-amber-500/80 animate-pulse shrink-0" />
        <span>Deployed across multi-node interfaces as a developer and architect.</span>
      </div>
    </div>
  );
}
