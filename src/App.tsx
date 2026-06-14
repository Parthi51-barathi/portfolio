import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  personalInfo,
  skillsData,
  projectsData,
  workExperienceData,
  educationData,
  certificationsData
} from './data';
import Header from './components/Header';
import BackgroundEffect from './components/BackgroundEffect';
import { themesList, ThemeConfig } from './components/ThemeSelector';
import ProjectCard from './components/ProjectCard';
import SkillMeter from './components/SkillMeter';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Sparkles,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Award,
  Terminal,
  Clock,
  User,
  Heart,
  ExternalLink,
  Code2,
  CheckCircle2,
  ListFilter
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const currentTheme: ThemeConfig = themesList[0];
  const [projectFilter, setProjectFilter] = useState('All');
  const [visitorPersona, setVisitorPersona] = useState<'recruiter' | 'general'>('recruiter');

  // Contact form submission states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sessionInquiries, setSessionInquiries] = useState<{ id: string; name: string; email: string; message: string; timestamp: string }[]>([]);

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
      const newInquiry = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        message,
        timestamp: new Date().toLocaleTimeString()
      };
      setSessionInquiries(prev => [newInquiry, ...prev]);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Clean inputs
      setName('');
      setEmail('');
      setMessage('');

      // Auto dismiss success alert
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1200);
  };

  // Filter projects helper
  const filteredProjects = projectsData.filter(proj => {
    if (projectFilter === 'All') return true;
    if (projectFilter === 'Development') {
      return proj.category.includes('Development') || proj.technologies.includes('HTML5') || proj.technologies.includes('React.js');
    }
    if (projectFilter === 'Design') {
      return proj.category.includes('Design') || proj.technologies.includes('Figma') || proj.technologies.includes('Wireframing');
    }
    return true;
  });

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-pink-500/30 selection:text-white">
      {/* Dynamic Background Glowing Blobs and Grid lines */}
      <BackgroundEffect />

      {/* Glass navigation header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-28 relative z-10 overflow-hidden">
        
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[85vh] flex flex-col justify-center relative py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left bio column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Introduction Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800/80 text-xs text-slate-300">
                <Sparkles size={13} className="text-amber-400 animate-spin" />
                <span className="font-semibold font-mono tracking-wide">
                  Welcome, customize my profile as a:
                </span>
                <div className="flex gap-1 bg-slate-950 p-0.5 rounded-full border border-slate-800 ml-1">
                  <button
                    onClick={() => setVisitorPersona('recruiter')}
                    className={`px-2 py-0.5 rounded-full text-[10px] font-sans transition-all cursor-pointer ${
                      visitorPersona === 'recruiter' ? 'bg-pink-500 text-white font-semibold' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    Recruiter
                  </button>
                  <button
                    onClick={() => setVisitorPersona('general')}
                    className={`px-2 py-0.5 rounded-full text-[10px] font-sans transition-all cursor-pointer ${
                      visitorPersona === 'general' ? 'bg-cyan-500 text-white font-semibold' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    Creator
                  </button>
                </div>
              </div>

              {/* Colorful Title Header */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Hi, I'm{' '}
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradientText} drop-shadow-sm`}>
                  {personalInfo.name}
                </span>
              </h1>

              {/* Dynamic Subtitle banner depending on persona selection */}
              <div className="min-h-[50px]">
                <AnimatePresence mode="wait">
                  {visitorPersona === 'recruiter' && (
                    <motion.p
                      key="rec"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="text-lg md:text-xl font-medium text-slate-300 leading-relaxed font-sans"
                    >
                      A creative <span className={`underline decoration-2 ${currentTheme.textColor} underline-offset-4`}>Web Developer</span> specialize in translating wireframes into fluid React apps. Ready to join your squad immediately.
                    </motion.p>
                  )}
                  {visitorPersona === 'general' && (
                    <motion.p
                      key="gen"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="text-lg md:text-xl font-medium text-slate-300 leading-relaxed font-sans"
                    >
                      Crafting delightful user interactions using high-fidelity Figma vectors, Tailwind UI tokens, and interactive layout elements.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Personal Intro Summary */}
              <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl">
                {personalInfo.about}
              </p>

              {/* Primary Call to actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`px-6 py-3.5 rounded-2xl text-sm font-semibold font-sans tracking-wide text-white ${currentTheme.buttonBg} hover:opacity-90 shadow-lg shadow-violet-500/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2`}
                >
                  <span>Work With Me</span>
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('projects');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-2xl text-sm font-semibold font-sans tracking-wide text-slate-300 bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-all duration-300 cursor-pointer"
                >
                  View Technical Projects
                </button>
              </div>

              {/* Quick Contacts Banner */}
              <div className="flex flex-wrap gap-5 pt-6 text-[11px] text-slate-500 font-mono">
                <div className="flex items-center gap-1.5 hover:text-slate-300 transition-colors">
                  <MapPin size={12} className="text-pink-500" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5 hover:text-slate-300 transition-colors">
                  <Clock size={12} className="text-violet-500" />
                  <span>Graduating March 2026</span>
                </div>
              </div>
            </div>

            {/* Right bento stats column */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-violet-500/10 to-transparent blur-3xl pointer-events-none" />
              
              <div className="relative glass-panel p-6 sm:p-7 rounded-3xl border border-white/5 shadow-2xl space-y-6">
                
                {/* Visual Header */}
                <div className="flex items-center gap-1.5 pb-3 border-b border-slate-900/40">
                  <span className="w-1.5 h-3.5 rounded-full bg-pink-500" />
                  <span className="text-xs uppercase font-mono tracking-widest text-slate-400">Core Metrics Index</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Stat Card 1 */}
                  <div className="p-4 rounded-2xl bg-slate-950/50 border border-slate-900 flex flex-col justify-between min-h-[100px] hover:border-slate-800 transition-colors">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Degree Focus</span>
                    <div>
                      <h4 className="text-xl font-display font-bold text-white">BCA</h4>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">Hindustan College</p>
                    </div>
                  </div>

                  {/* Stat Card 2 */}
                  <div className="p-4 rounded-2xl bg-slate-950/50 border border-slate-900 flex flex-col justify-between min-h-[100px] hover:border-slate-800 transition-colors">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Expertise Area</span>
                    <div>
                      <h4 className="text-xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">UI/UX</h4>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">Figma, Wireframing</p>
                    </div>
                  </div>

                  {/* Stat Card 3 */}
                  <div className="p-4 rounded-2xl bg-slate-950/50 border border-slate-900 flex flex-col justify-between min-h-[100px] hover:border-slate-800 transition-colors">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Certified Skills</span>
                    <div>
                      <h4 className="text-xl font-display font-bold text-white">15+</h4>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">Durable Core Stack</p>
                    </div>
                  </div>

                  {/* Stat Card 4 */}
                  <div className="p-4 rounded-2xl bg-slate-950/50 border border-slate-900 flex flex-col justify-between min-h-[100px] hover:border-slate-800 transition-colors">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Industry Training</span>
                    <div>
                      <h4 className="text-xl font-display font-bold text-emerald-400">Full Stack</h4>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">React.js & APIs</p>
                    </div>
                  </div>

                </div>

                {/* Micro tech logo line */}
                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-900 flex items-center justify-around">
                  <span className="text-[10px] font-mono text-slate-500">#HTML5</span>
                  <span className="text-[10px] font-mono text-slate-500">#CSS3</span>
                  <span className="text-[10px] font-mono text-slate-500">#ReactJS</span>
                  <span className="text-[10px] font-mono text-slate-500">#Figma</span>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-10 py-8 scroll-mt-20">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
            <div>
              <div className="inline-flex items-center gap-1 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-2">
                <Code2 size={12} className={currentTheme.textColor} /> Explore Creations
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Project
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/60 p-1 rounded-2xl border border-white/5 backdrop-blur-sm self-start">
              {['All', 'Development', 'Design'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setProjectFilter(filter)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-all ${
                    projectFilter === filter
                      ? `bg-gradient-to-r ${currentTheme.gradientText} text-white font-bold shadow-md shadow-slate-950/40`
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Grid list of dynamic project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj) => (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={proj} theme={currentTheme} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-12 py-8 scroll-mt-20">
          
          {/* Header */}
          <div className="text-left">
            <div className="inline-flex items-center gap-1 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-2">
              <Award size={12} className={currentTheme.textColor} /> My Expertise
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skill
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
              Formulated across structured collegiate courseworks, industrial programming certifications, and custom web implementation initiatives.
            </p>
          </div>

          {/* Grid layout for skills categorizations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((category, idx) => (
              <SkillMeter key={idx} category={category} theme={currentTheme} />
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section id="experience" className="space-y-10 py-8 scroll-mt-20">
          
          {/* Header */}
          <div className="text-left">
            <div className="inline-flex items-center gap-1 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-2">
              <Briefcase size={12} className={currentTheme.textColor} /> Industrial background
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Professional Work History
            </h2>
          </div>

          <div className="relative">
            {/* Connected Vertical Ribbon line with glow */}
            <div className="absolute left-6 inset-y-0 w-[2px] bg-slate-900 border-r border-slate-800" />

            <div className="space-y-8">
              {workExperienceData.map((job) => (
                <div key={job.id} className="relative pl-14 sm:pl-16 flex flex-col sm:flex-row gap-4 items-start text-left">
                  
                  {/* Bullet node dot representing calendar state */}
                  <div className={`absolute left-4 w-4 h-4 rounded-full border-4 border-slate-950 bg-pink-500 animate-pulse mt-1.5`} />

                  {/* Main Work Details Card */}
                  <div className="glass-panel-glow p-6 rounded-3xl border border-white/5 hover:border-slate-800 transition-all duration-300 relative overflow-hidden flex-1 shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 mb-4 border-b border-slate-900/40 pb-4">
                      <div>
                        <span className={`text-[10px] uppercase font-mono tracking-widest text-slate-500`}>ROLE EXPERIENCE</span>
                        <h4 className="text-lg font-display font-semibold text-white mt-0.5">
                          {job.role}
                        </h4>
                        <p className="text-xs text-slate-400 font-sans mt-0.5">
                          Company: <span className="text-white font-medium">{job.company}</span>
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-end">
                        <span className="text-xs font-mono font-semibold text-pink-400 bg-pink-500/10 border border-pink-500/20 px-3 py-1 rounded-full self-start sm:self-auto">
                          {job.duration}
                        </span>
                      </div>
                    </div>

                    {/* Work achievements points */}
                    <div className="space-y-4 mb-6">
                      {job.points.map((point, index) => (
                        <div key={index} className="flex gap-3 items-start">
                          <div className={`mt-2 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0`} />
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Custom tech tags learned here */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-900/20">
                      {job.technologies.map((tech, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-slate-950 text-slate-400 border border-slate-900">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="space-y-10 py-8 scroll-mt-20">
          
          {/* Header */}
          <div className="text-left">
            <div className="inline-flex items-center gap-1 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-2">
              <GraduationCap size={12} className={currentTheme.textColor} /> Academic Roadmap
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Educational Qualifications
            </h2>
          </div>

          {/* Timeline alignment for educational records */}
          <div className="relative">
            <div className="absolute left-6 inset-y-0 w-[2px] bg-slate-900 border-r border-slate-800" />

            <div className="space-y-6">
              {educationData.map((edu) => (
                <div key={edu.id} className="relative pl-14 sm:pl-16 flex flex-col sm:flex-row gap-4 items-start text-left">
                  
                  {/* Timeline bullet dot */}
                  <div className={`absolute left-4 w-4 h-4 rounded-full border-4 border-slate-950 bg-violet-500 mt-1.5`} />

                  {/* Main education container */}
                  <div className="glass-panel p-5 rounded-2xl border border-white/5 hover:border-slate-800/80 transition-all duration-300 relative overflow-hidden flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-md bg-slate-950/20">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`px-2.5 py-0.5 text-[9px] font-mono tracking-wider font-semibold rounded-full text-white bg-gradient-to-r ${edu.gradientClass}`}>
                          {edu.badge}
                        </span>
                        {edu.score && (
                          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                            {edu.score}
                          </span>
                        )}
                      </div>

                      <h4 className="text-lg font-display font-semibold text-white tracking-tight">
                        {edu.institution}
                      </h4>
                      <p className="text-xs text-slate-400 font-sans mt-0.5">
                        {edu.degree}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center justify-start sm:justify-end">
                      <span className="text-xs font-mono font-bold text-slate-500 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl">
                        {edu.duration}
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SHOWCASE */}
        <section id="certifications" className="space-y-10 py-8 scroll-mt-20">
          
          {/* Header */}
          <div className="text-left">
            <div className="inline-flex items-center gap-1 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-2">
              <Award size={12} className={currentTheme.textColor} /> Verified Credentials
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Professional Certifications
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
              Showcasing specialized development badges, design accreditations, and optimized programming certifications issued by certified partners.
            </p>
          </div>

          {/* Grid layout for Certificates info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="glass-panel p-6 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between hover:border-slate-800 hover:shadow-2xl hover:shadow-violet-500/5 transition-all duration-300 text-left"
              >
                {/* Accent thin colored background glow bar */}
                <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${cert.gradientClass}`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-semibold bg-slate-950 border border-slate-900 px-2 py-0.5 rounded-md">
                      {cert.date}
                    </span>
                  </div>

                  <h4 className="text-base font-display font-semibold text-white tracking-wide mb-3 line-clamp-1">
                    {cert.title}
                  </h4>

                  {/* Highlight skillslearned */}
                  <div className="flex flex-wrap gap-1 mb-5">
                    {cert.skills.map((skill, scidx) => (
                      <span
                        key={scidx}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-slate-900 text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-900/50 flex justify-between items-center text-[10px] text-slate-500 font-mono">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 size={11} className="text-emerald-500" />
                    <span>ID: VERIFIED_GRAD</span>
                  </div>
                  <span>100% Genuine</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WORKSPACE & CONTACT FORM */}
        <section id="contact" className="space-y-10 py-8 scroll-mt-20">
          
          {/* Header */}
          <div className="text-left">
            <div className="inline-flex items-center gap-1 text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-2">
              <Mail size={12} className={currentTheme.textColor} /> Signal Transmitter
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Start a Conversation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left direct contact details */}
            <div className="lg:col-span-5 flex flex-col gap-6 text-left">
              <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/5 space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-500/5 to-transparent blur-xl" />
                
                <h3 className="font-display font-semibold text-lg text-white">
                  Direct Communications
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Feel free to reach out for industrial collaborations, project opportunities, or structural recruitment steps. I reply promptly.
                </p>

                <div className="space-y-4">
                  {/* Item 1 */}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-950/60 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/30 transition-all group cursor-pointer"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
                      <Mail size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-500 uppercase">Send Email Direct</p>
                      <p className="text-sm font-semibold text-white group-hover:text-pink-400 transition-colors truncate">
                        {personalInfo.email}
                      </p>
                    </div>
                  </a>

                  {/* Item 2 */}
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-950/60 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/30 transition-all group cursor-pointer"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-500 uppercase">Call Endpoint</p>
                      <p className="text-sm font-semibold text-white group-hover:text-violet-400 transition-colors font-mono">
                        +91 {personalInfo.phone}
                      </p>
                    </div>
                  </a>

                  {/* Item 3 */}
                  <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-950/60 border border-slate-900">
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-500 uppercase">Location</p>
                      <p className="text-sm font-semibold text-slate-200">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Social Buttons */}
                <div className="pt-4 border-t border-slate-900/60 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-sans">Find me online:</span>
                  <div className="flex gap-2">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-950 border border-slate-900 text-slate-400 hover:text-white transition-all"
                    >
                      <Github size={15} />
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-950 border border-slate-900 text-slate-400 hover:text-white transition-all"
                    >
                      <Linkedin size={15} />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right message submission container */}
            <div className="lg:col-span-7">
              <div className="glass-panel-glow p-6 sm:p-8 rounded-3xl border border-white/5 relative overflow-hidden shadow-2xl">
                
                {/* Form header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-900/80 mb-6">
                  <div className="flex items-center gap-2">
                    <Terminal size={16} className={currentTheme.textColor} />
                    <span className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-300">
                      SECURE MESSAGE TERMINAL
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                </div>

                <form onSubmit={handleSendMessage} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-name" className="text-xs font-mono text-slate-500 uppercase">Your Name</label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-900 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all font-sans"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-email" className="text-xs font-mono text-slate-500 uppercase">Email Address</label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-900 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Message message */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-text" className="text-xs font-mono text-slate-500 uppercase">Message Content</label>
                    <textarea
                      id="form-text"
                      required
                      rows={4}
                      placeholder="Type your message details here..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-900 rounded-2xl p-4 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all font-sans resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-2">
                    <p className="text-[10px] text-slate-500 font-mono leading-relaxed max-w-xs">
                      Clicking send will add this inquiry into the active local session queues for inspection.
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase text-white bg-gradient-to-r ${currentTheme.gradientText} hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-2`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                          <span>SENDING...</span>
                        </>
                      ) : (
                        <>
                          <Send size={12} />
                          <span>TRANSMIT SIGNAL</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Session Messages ledger panel */}
                {sessionInquiries.length > 0 && (
                  <div className="mt-8 border-t border-slate-900 pt-6 text-left">
                    <h4 className="text-xs font-mono font-bold text-slate-300 uppercase mb-3 flex items-center gap-1.5">
                      <Terminal size={12} className="text-green-500" />
                      In-Memory Recruiter Ledger (Local Session Buffer)
                    </h4>
                    
                    <div className="space-y-3 max-h-[220px] overflow-y-auto no-scrollbar">
                      {sessionInquiries.map((inq) => (
                        <div key={inq.id} className="p-3.5 rounded-xl bg-slate-950 border border-slate-900 space-y-1">
                          <div className="flex items-center justify-between text-[10px] font-mono">
                            <span className="text-indigo-400 font-bold">{inq.name}</span>
                            <span className="text-slate-600">{inq.timestamp}</span>
                          </div>
                          <p className="text-[10.5px] text-zinc-500 font-mono italic truncate">{inq.email}</p>
                          <p className="text-xs text-slate-400 font-sans mt-1 leading-relaxed pl-2 border-l border-indigo-500/20">
                            {inq.message}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Submission notification pop */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute bottom-6 right-6 left-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                    <div className="text-left">
                      <p className="text-xs font-bold text-emerald-400">Message Transmitted Successfully!</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Stored inside in-memory session buffer logs securely.</p>
                    </div>
                  </motion.div>
                )}

              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Decorative professional footer line */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-slate-500 relative z-10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center justify-center gap-1.5 text-xs">
            <span>Handcrafted with</span>
            <Heart size={11} className="text-pink-500 animate-pulse fill-pink-500" />
            <span>by Parthasarathy K &copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
