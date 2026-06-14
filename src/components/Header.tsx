import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-slate-950/70 backdrop-blur-md border-b border-slate-900 shadow-[0_10px_30px_-15px_rgba(2,6,23,0.7)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with colorful background logo mark */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 group cursor-pointer text-left"
            id="logo-btn"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-500 via-violet-600 to-cyan-400 p-0.5 shadow-lg shadow-violet-500/20 group-hover:shadow-pink-500/30 transition-all duration-300 scale-100 group-hover:scale-105">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-400 font-black text-lg tracking-wider">
                  PK
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-tight text-base group-hover:text-pink-400 transition-colors duration-200">
                {personalInfo.name}
              </span>
              <span className="text-slate-400 text-xs font-mono tracking-widest hidden sm:inline">
                DEVELOPER & DESIGNER
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5" id="desktop-nav">
            <div className="flex items-center gap-1 bg-slate-900/40 p-1.5 rounded-full border border-slate-800/50 backdrop-blur-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-${item.id}`}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-violet-500/20 border border-violet-500/30 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-slate-800 mx-3" />

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                id="header-github-link"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300"
              >
                <Github size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                id="header-linkedin-link"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-violet-400 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </nav>

          {/* Mobile Hamburguer button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-slate-950 border-b border-slate-900 overflow-hidden"
            id="mobile-drawer-menu"
          >
            <div className="max-w-7xl mx-auto px-4 pt-2 pb-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    id={`mobile-nav-${item.id}`}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold text-base transition-all duration-200 cursor-pointer ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-pink-500/10 to-violet-500/10 border border-violet-500/20 text-white shadow-sm'
                        : 'text-slate-400 hover:bg-slate-900/50 hover:text-slate-200'
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                    )}
                  </button>
                ))}
              </div>

              <div className="h-px bg-slate-900 my-1" />

              <div className="flex items-center justify-around py-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium hover:text-white"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium hover:text-white"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
