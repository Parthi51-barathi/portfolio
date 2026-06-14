import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  personalInfo,
  skillsData,
  projectsData,
  workExperienceData,
  educationData
} from './data';
import Header from './components/Header';
import BackgroundEffect from './components/BackgroundEffect';
import ProjectCard from './components/ProjectCard';
import SkillMeter from './components/SkillMeter';
import {
  Mail,
  Github,
  Linkedin,
  ArrowRight,
  Download
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [projectFilter, setProjectFilter] = useState('All');

  // Contact form submission states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Smooth scroll section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  const filteredProjects = projectsData.filter(proj => {
    if (projectFilter === 'All') return true;
    return proj.category.includes(projectFilter);
  });

  return (
    <div className="min-h-screen text-[var(--color-text-primary)] font-sans selection:bg-[var(--accent-gold)]/30 selection:text-white">
      {/* Dynamic Background */}
      <BackgroundEffect />

      {/* Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="max-w-[1100px] mx-auto px-6 pt-32 pb-24 space-y-32 relative z-10 overflow-hidden">
        
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[70vh] flex flex-col justify-center relative py-12 scroll-mt-32">
          <div className="space-y-10 max-w-3xl">
            {/* Status Pill */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-teal)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-teal)]"></span>
              </span>
              <span className="font-sans text-[10px] font-bold text-[var(--color-text-secondary)] uppercase tracking-[0.15em]">
                {personalInfo.availability}
              </span>
            </motion.div>

            {/* Name and Title */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-display font-light text-hero leading-[0.9] tracking-tighter"
              >
                {personalInfo.name.split(' ')[0]}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex items-center gap-4"
              >
                <div className="h-px w-12 bg-[var(--accent-violet)]" />
                <span className="font-sans font-medium text-[var(--color-text-secondary)] text-lg tracking-wide italic">
                  {personalInfo.title}
                </span>
              </motion.div>
            </div>

            {/* Tagline */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-display font-light text-3xl md:text-4xl text-[var(--color-text-secondary)] leading-tight italic"
            >
              Building systems that <span className="text-[var(--color-text-primary)] font-normal not-italic">think clearly.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 rounded-sm font-sans font-bold text-xs tracking-widest text-black bg-[var(--accent-gold)] hover:bg-white transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                <span>VIEW WORK</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="group px-8 py-4 rounded-sm font-sans font-bold text-xs tracking-widest text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--accent-gold)] transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                <span>DOWNLOAD CV</span>
                <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
            </motion.div>

            {/* Architectural Stats Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="pt-12 space-y-6"
            >
              <div className="h-px w-full bg-[var(--gradient-rule)]" />
              <div className="flex flex-wrap gap-12 font-sans text-[10px] font-bold tracking-[0.2em] text-[var(--color-text-muted)] uppercase">
                <div className="flex flex-col gap-1">
                  <span className="text-[var(--color-text-secondary)] text-base font-display italic lowercase font-light">12</span>
                  <span>Projects</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[var(--color-text-secondary)] text-base font-display italic lowercase font-light">4</span>
                  <span>Years Exp.</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[var(--color-text-secondary)] text-base font-display italic lowercase font-light">8</span>
                  <span>Tech Stacks</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="relative space-y-16 scroll-mt-32">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[var(--accent-violet)]" />
                <span className="font-sans font-bold text-[10px] tracking-[0.3em] text-[var(--color-text-muted)] uppercase">Portfolio Showcase</span>
              </div>
              <h2 className="font-display text-display font-semibold tracking-tight">
                Selected <span className="font-light italic">Works</span>
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-8 border-b border-[var(--color-border)] pb-2">
              {['All', 'Development', 'Design'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setProjectFilter(filter)}
                  className={`relative pb-2 text-[10px] font-bold tracking-widest uppercase transition-all cursor-pointer ${
                    projectFilter === filter ? 'text-[var(--accent-gold)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'
                  }`}
                >
                  {filter}
                  {projectFilter === filter && (
                    <motion.div layoutId="filterUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--accent-gold)]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
             {/* Grid Reveal Background for this section */}
             <div className="absolute -inset-x-12 -inset-y-8 animate-grid-reveal pointer-events-none" style={{
                backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
                backgroundSize: '3rem 3rem'
              }} />
            {filteredProjects.map((proj) => (
              <div key={proj.id}>
                <ProjectCard project={proj} />
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="relative space-y-20 scroll-mt-32">
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="w-1.5 h-1.5 bg-[var(--accent-violet)]" />
              <span className="font-sans font-bold text-[10px] tracking-[0.3em] text-[var(--color-text-muted)] uppercase">Capabilities</span>
            </div>
            <h2 className="font-display text-display font-semibold tracking-tight">
              Technical <span className="font-light italic">Stack</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {skillsData.map((category, idx) => (
              <div key={idx}>
                <SkillMeter category={category} />
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          {/* Experience */}
          <section id="experience" className="space-y-16 scroll-mt-32">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[var(--accent-violet)]" />
                <span className="font-sans font-bold text-[10px] tracking-[0.3em] text-[var(--color-text-muted)] uppercase">Career Path</span>
              </div>
              <h2 className="font-display text-4xl font-semibold tracking-tight">
                Work <span className="font-light italic">Experience</span>
              </h2>
            </div>

            <div className="relative space-y-12">
              <div className="absolute left-0 inset-y-0 w-px bg-[var(--color-border)]" />
              {workExperienceData.map((job) => (
                <div key={job.id} className="relative pl-8 space-y-4">
                  <div className="absolute left-[-2px] top-1.5 w-[5px] h-[5px] rounded-full bg-[var(--accent-violet)]" />
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-[var(--accent-violet)] font-bold">{job.duration}</span>
                    <h4 className="font-display text-xl font-bold text-[var(--color-text-primary)]">{job.role}</h4>
                    <p className="font-sans text-sm text-[var(--color-text-secondary)]">{job.company}</p>
                  </div>
                  <ul className="space-y-3 pt-2">
                    {job.points.map((point, i) => (
                      <li key={i} className="font-sans text-xs text-[var(--color-text-muted)] leading-relaxed flex gap-3">
                        <span className="text-[var(--accent-violet)] pt-1">/</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section id="education" className="space-y-16 scroll-mt-32">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[var(--accent-violet)]" />
                <span className="font-sans font-bold text-[10px] tracking-[0.3em] text-[var(--color-text-muted)] uppercase">Academic</span>
              </div>
              <h2 className="font-display text-4xl font-semibold tracking-tight">
                Educational <span className="font-light italic">History</span>
              </h2>
            </div>

            <div className="space-y-10">
              {educationData.map((edu) => (
                <div key={edu.id} className="group space-y-2 border-l border-[var(--color-border)] pl-8 hover:border-[var(--accent-violet)] transition-colors duration-500">
                  <span className="font-mono text-[10px] text-[var(--color-text-muted)] font-bold">{edu.duration}</span>
                  <h4 className="font-display text-lg font-bold text-[var(--color-text-primary)]">{edu.institution}</h4>
                  <div className="flex items-center gap-3">
                    <p className="font-sans text-xs text-[var(--color-text-secondary)]">{edu.degree}</p>
                    {edu.score && <span className="text-[10px] text-[var(--accent-teal)] font-bold px-2 py-0.5 rounded-sm bg-[var(--accent-teal)]/5">{edu.score}</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CONTACT SECTION */}
        <section id="contact" className="relative space-y-16 scroll-mt-32">
          <div className="h-px w-full bg-[var(--gradient-rule)] mb-32" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[var(--accent-violet)]" />
                  <span className="font-sans font-bold text-[10px] tracking-[0.3em] text-[var(--color-text-muted)] uppercase">Get in touch</span>
                </div>
                <h2 className="font-display text-display font-semibold tracking-tight">
                  Let's craft <span className="font-light italic">something</span> meaningful.
                </h2>
              </div>
              
              <div className="space-y-6 pt-4">
                <a href={`mailto:${personalInfo.email}`} className="group flex items-center gap-6 p-6 rounded-sm border border-[var(--color-border)] hover:border-[var(--accent-gold)] transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-[var(--color-surface)] text-[var(--accent-gold)] border border-[var(--color-border)] group-hover:bg-[var(--accent-gold)] group-hover:text-black transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest mb-1">Email</p>
                    <p className="text-lg font-display text-[var(--color-text-primary)]">{personalInfo.email}</p>
                  </div>
                </a>
                <div className="flex gap-12 pl-6 pt-4 font-sans text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest">
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-gold)] transition-colors">GitHub</a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-gold)] transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>

            <div className="glass-panel p-10 sm:p-12">
              <form onSubmit={handleSendMessage} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-transparent border-b border-[var(--color-border)] py-4 text-sm focus:outline-none focus:border-[var(--accent-gold)] transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 rounded-sm font-sans font-bold text-xs tracking-[0.2em] text-black bg-[var(--accent-gold)] hover:bg-white transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
                </button>
                {isSubmitted && (
                  <p className="text-[10px] text-[var(--accent-teal)] font-bold text-center uppercase tracking-widest animate-pulse mt-4">
                    Message transmitted successfully.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-[var(--color-border)] py-20 text-center">
        <div className="max-w-[1100px] mx-auto px-6 space-y-8">
          <div className="font-display italic text-[var(--color-text-muted)] text-xl font-light">
            crafting precision <span className="not-italic text-[var(--color-text-secondary)] font-normal">&</span> elegance
          </div>
          <div className="font-sans text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Parthasarathy K
          </div>
        </div>
      </footer>
    </div>
  );
}
