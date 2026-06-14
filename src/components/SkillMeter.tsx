import { motion } from 'motion/react';
import { SkillCategory } from '../types';

interface SkillMeterProps {
  category: SkillCategory;
}

export default function SkillMeter({ category }: SkillMeterProps) {
  return (
    <div className="glass-panel overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]/50 h-full flex flex-col">
      {/* Container Header - Technical Spec Style */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 bg-[var(--accent-violet)] shadow-[0_0_8px_var(--accent-violet)]" />
          <h3 className="font-display text-lg font-semibold tracking-tight text-[var(--color-text-primary)]">
            {category.title}
          </h3>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span className="font-mono text-[8px] text-[var(--color-text-muted)] tracking-widest uppercase">
            SPEC_0{Math.floor(Math.random() * 9) + 1}
          </span>
        </div>
      </div>

      {/* Skills Grid inside Container - Optimized for breathing room */}
      <div className="p-6 md:p-8 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {category.skills.map((skill, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
              >
                <div
                  className="flex items-center justify-between px-4 py-3.5 rounded-sm border border-[var(--color-border)] bg-[var(--color-base)]/30 hover:border-[var(--accent-gold)]/30 hover:bg-[var(--color-base)] transition-all duration-300 group"
                >
                  <span className="font-sans text-xs font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors truncate pr-2">
                    {skill.name}
                  </span>
                  
                  {/* Subtle technical indicator */}
                  <div className="flex gap-1 shrink-0">
                    {[1, 2, 3].map((dot) => (
                      <div 
                        key={dot}
                        className={`w-1 h-1 rounded-full ${
                          dot <= 2 ? 'bg-[var(--accent-violet)]/30 group-hover:bg-[var(--accent-gold)]' : 'bg-[var(--color-border)]'
                        } transition-colors duration-300`} 
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Container Footer - Decorative metadata */}
      <div className="px-6 py-2.5 bg-[var(--color-base)]/50 border-t border-[var(--color-border)] flex items-center justify-between mt-auto">
        <span className="font-mono text-[7px] text-[var(--color-text-muted)] tracking-widest uppercase">
          Status: Optimized // System_Active
        </span>
        <div className="flex gap-2">
          <div className="w-0.5 h-0.5 bg-[var(--accent-gold)] rounded-full animate-pulse" />
          <div className="w-0.5 h-0.5 bg-[var(--color-text-muted)] rounded-full" />
        </div>
      </div>
    </div>
  );
}
