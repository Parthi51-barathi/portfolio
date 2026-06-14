import { motion } from 'motion/react';
import { Sliders, Sparkles } from 'lucide-react';

export interface ThemeConfig {
  id: string;
  name: string;
  primaryClass: string;          // e.g., 'text-pink-400'
  accentBg: string;              // e.g., 'bg-pink-500'
  textColor: string;             // e.g., 'text-pink-400'
  gradientText: string;          // e.g., 'from-pink-500 via-violet-500 to-indigo-500'
  glowColor: string;             // e.g., 'bg-pink-500'
  borderClass: string;           // e.g., 'border-pink-500/20'
  ringClass: string;             // e.g., 'ring-pink-500/30'
  buttonBg: string;              // e.g., 'bg-gradient-to-r from-pink-500 to-violet-600'
  badgeBg: string;               // e.g., 'bg-pink-500/10 text-pink-400 border-pink-500/20'
  bulletColor: string;           // e.g., 'bg-pink-400'
}

export const themesList: ThemeConfig[] = [
  {
    id: 'cyberpunk',
    name: 'Cyberpunk Neon',
    primaryClass: 'text-pink-400',
    accentBg: 'bg-pink-500',
    textColor: 'text-pink-400',
    gradientText: 'from-pink-500 via-violet-500 to-indigo-400',
    glowColor: 'rgba(236,72,153,0.15)',
    borderClass: 'border-pink-500/30',
    ringClass: 'ring-pink-500/30',
    buttonBg: 'bg-gradient-to-r from-pink-500 to-violet-600',
    badgeBg: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    bulletColor: 'bg-pink-400',
  },
  {
    id: 'aurora',
    name: 'Cosmic Aurora',
    primaryClass: 'text-emerald-400',
    accentBg: 'bg-emerald-500',
    textColor: 'text-emerald-400',
    gradientText: 'from-emerald-400 via-teal-500 to-cyan-400',
    glowColor: 'rgba(52,211,153,0.15)',
    borderClass: 'border-emerald-500/30',
    ringClass: 'ring-emerald-500/30',
    buttonBg: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    bulletColor: 'bg-emerald-400',
  },
  {
    id: 'sunset',
    name: 'Sunset Glow',
    primaryClass: 'text-amber-400',
    accentBg: 'bg-amber-500',
    textColor: 'text-amber-400',
    gradientText: 'from-amber-400 via-rose-500 to-purple-500',
    glowColor: 'rgba(245,158,11,0.15)',
    borderClass: 'border-amber-500/30',
    ringClass: 'ring-amber-500/30',
    buttonBg: 'bg-gradient-to-r from-amber-400 to-rose-600',
    badgeBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    bulletColor: 'bg-amber-400',
  },
  {
    id: 'nebula',
    name: 'Hyperion Deep',
    primaryClass: 'text-cyan-400',
    accentBg: 'bg-cyan-500',
    textColor: 'text-cyan-400',
    gradientText: 'from-cyan-400 via-blue-500 to-violet-500',
    glowColor: 'rgba(34,211,238,0.15)',
    borderClass: 'border-cyan-500/30',
    ringClass: 'ring-cyan-500/30',
    buttonBg: 'bg-gradient-to-r from-cyan-500 to-blue-600',
    badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    bulletColor: 'bg-cyan-400',
  }
];

interface ThemeSelectorProps {
  currentTheme: ThemeConfig;
  setTheme: (theme: ThemeConfig) => void;
}

export default function ThemeSelector({ currentTheme, setTheme }: ThemeSelectorProps) {
  return (
    <div className="flex items-center gap-2 bg-slate-900/60 p-2 rounded-2xl border border-white/5 backdrop-blur-md shadow-2xl">
      <div className="flex items-center gap-1.5 px-2 text-slate-400">
        <Sparkles size={14} className="text-amber-400 animate-pulse" />
        <span className="text-xs font-mono tracking-wider font-semibold uppercase hidden md:inline">COLOR THEME:</span>
      </div>
      <div className="flex gap-2">
        {themesList.map((t) => {
          const isActive = t.id === currentTheme.id;
          return (
            <button
              key={t.id}
              onClick={() => setTheme(t)}
              title={t.name}
              className={`relative cursor-pointer w-7 h-7 rounded-lg flex items-center justify-center p-0.5 transition-all duration-300 ${
                isActive ? 'ring-2 ring-white scale-110 shadow-lg' : 'opacity-70 hover:opacity-100 hover:scale-105'
              }`}
            >
              <div
                className={`w-full h-full rounded-md bg-gradient-to-tr ${t.gradientText}`}
              />
              {isActive && (
                <motion.div
                  layoutId="activeThemeOutline"
                  className="absolute -inset-1 rounded-xl border border-white/40 pointer-events-none"
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
