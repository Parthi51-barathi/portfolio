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
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-none ${
        scrolled
          ? 'py-4 bg-[var(--color-base)]/80 backdrop-blur-lg shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Bold Stylized Serif Portfolio */}
          <button
            onClick={() => handleNavClick('hero')}
            className="group cursor-pointer text-left"
            id="logo-btn"
          >
            <span className="font-display font-bold italic text-3xl tracking-tighter text-[var(--color-text-primary)] group-hover:text-[var(--accent-gold)] transition-all duration-300">
              Portfolio
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10" id="desktop-nav">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-${item.id}`}
                  className={`relative py-1 text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer pl-2 ${
                    activeSection === item.id
                      ? 'text-[var(--color-text-primary)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute left-0 top-0 bottom-0 w-0.5 bg-[var(--accent-gold)] rounded-r-full shadow-[0_0_8px_var(--accent-gold)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="w-px h-4 bg-[var(--color-border)] mx-2" />

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                id="header-github-link"
                className="text-[var(--color-text-secondary)] hover:text-[var(--accent-gold)] transition-colors duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                id="header-linkedin-link"
                className="text-[var(--color-text-secondary)] hover:text-[var(--accent-gold)] transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </nav>

          {/* Mobile Hamburguer button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
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
            className="md:hidden bg-[var(--color-base)] border-b border-[var(--color-border)] overflow-hidden"
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
                        ? 'bg-white/5 text-[var(--color-text-primary)]'
                        : 'text-[var(--color-text-secondary)] hover:bg-white/5 hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="w-1 h-full bg-[var(--accent-gold)] absolute left-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
