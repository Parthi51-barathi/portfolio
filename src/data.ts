import { Project, WorkExperience, Education, Certification, SkillCategory } from './types';

export const personalInfo = {
  name: 'Parthasarathy K',
  title: 'Creative Web Developer',
  subtitle: 'Converting designs into pixel-perfect, highly responsive interactive web interfaces',
  email: 'kumaravel05051972@gmail.com',
  phone: '6382303850',
  location: 'Kanchipuram, Tamil Nadu, India',
  github: 'https://github.com/Parthi51-barathi',
  linkedin: 'https://www.linkedin.com/in/parthasarathy-k-39927728a',
  about: 'I am an energetic Web Developer and UI/UX designer. I specialize in building highly fluid client interfaces with React and Tailwind, and translating complex concepts into clean wireframes in Figma. With strong foundation in DSA and a deep passion for colorful, accessible, and user-centric visual designs, I thrive on crafting memorable interactive digital experiences.',
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend Mastery',
    iconName: 'Layout',
    gradientClass: 'from-pink-500 via-rose-500 to-red-500',
    skills: [
      { name: 'HTML5 & CSS3', level: 95, iconName: 'Html5' },
      { name: 'JavaScript (ES6+)', level: 88, iconName: 'Js' },
    ],
  },
  {
    title: 'UI/UX & Design',
    iconName: 'Figma',
    gradientClass: 'from-violet-600 via-purple-600 to-pink-600',
    skills: [
      { name: 'Figma', level: 90, iconName: 'Figma' },
      { name: 'Wireframing', level: 88, iconName: 'Ruler' },
      { name: 'Adobe XD', level: 80, iconName: 'Layers' },
    ],
  },
  {
    title: 'Professional Foundations',
    iconName: 'Sparkles',
    gradientClass: 'from-amber-400 via-orange-500 to-rose-500',
    skills: [
      { name: 'Data Structures & Algorithms', level: 80, iconName: 'Tree' },
      { name: 'Time Management', level: 90, iconName: 'Clock' },
      { name: 'Decision-Making', level: 85, iconName: 'Target' },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'banking-prototype',
    title: 'Banking Application Prototype',
    category: 'UI/UX Design & Prototype',
    description: 'A comprehensive banking prototype focusing on intuitive financial dashboard flows, account balances, and dynamic transfer wireframes. Handcrafted with high fidelity and polished interactive component sets.',
    technologies: ['Wireframing', 'Figma', 'Prototyping', 'User Research'],
    liveUrl: 'https://www.figma.com/design/rmlIORsm4LzbxOqVsN4giI/Axis_Bank_Prototype?node-id=0-1&t=lT13pGDUGEEgCKIZ-1',
    gradientFrom: 'from-violet-500',
    gradientTo: 'to-fuchsia-600',
    accentColor: 'rgb(168, 85, 247)',
    stats: [
      { label: 'Usability Rating', value: '4.8/5' },
      { label: 'Prototypes Created', value: '18+' },
    ],
  },
  {
    id: 'student-dashboard',
    title: 'Student Record Dashboard',
    category: 'Frontend Development',
    description: 'An elegant dashboard system to manage, list, filter, and track student records. It allows administrative users to add, view, and delete records seamlessly with an optimized, lightning-fast rendering engine.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://parthi51-barathi.github.io/TS-Student-Dashboard/',
    githubUrl: 'https://github.com/Parthi51-barathi',
    gradientFrom: 'from-cyan-500',
    gradientTo: 'to-blue-600',
    accentColor: 'rgb(6, 182, 212)',
    stats: [
      { label: 'Load Time', value: '0.2s' },
      { label: 'Operations', value: 'CRUD' },
    ],
  },
];

export const workExperienceData: WorkExperience[] = [
  {
    id: 'coding-blocks',
    role: 'Full Stack Developer',
    company: 'Coding Blocks',
    duration: 'Oct 2025 - Nov 2025',
    technologies: ['HTML/CSS', 'React.js', 'MongoDB', 'JavaScript', 'APIs'],
    points: [
      'Built and refined highly responsive, mobile-first web applications using React.js and stylish layouts, resulting in immersive user journeys.',
      'Designed and integrated REST APIs and persistent database layers with MongoDB, enhancing practical command of application persistence.',
      'Completed intensive developer training, accelerating skills in full stack application architecture, API standards, and source control workflows.',
    ],
    gradientClass: 'from-pink-500 to-rose-600',
    borderColor: 'border-pink-500/30',
  },
];

export const educationData: Education[] = [
  {
    id: 'college',
    institution: 'Hindustan College Of Arts & Science',
    degree: 'BCA (Bachelor of Computer Applications)',
    duration: '2023 - 2026',
    badge: 'Undergraduate',
    gradientClass: 'from-violet-500 to-indigo-600',
  },
  {
    id: 'hsc',
    institution: 'Blessings Matriculation Higher Secondary School',
    degree: 'Class XII (HSC - Computer Science Group)',
    duration: 'Completed in 2023',
    score: 'Percentage: 73%',
    badge: 'Higher Secondary',
    gradientClass: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'sslc',
    institution: 'Blessings Matriculation Higher Secondary School',
    degree: 'Class X (SSLC)',
    duration: 'Completed in 2021',
    score: 'Percentage: 70%',
    badge: 'Secondary School',
    gradientClass: 'from-amber-400 to-orange-500',
  },
];

export const certificationsData: Certification[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX Professional Certification',
    issuer: 'Sunstone School of Technology',
    date: 'April 2026',
    skills: ['User Interface', 'User Experience', 'Prototyping', 'Figma'],
    gradientClass: 'from-fuchsia-500 to-purple-600',
    iconName: 'Figma',
  },
  {
    id: 'sql-pro',
    title: 'SQL Pro: AI-Powered Querying',
    issuer: 'Sunstone School of Technology',
    date: 'April 2026',
    skills: ['SQL', 'AI Querying', 'Database Management', 'Optimization'],
    gradientClass: 'from-blue-500 to-cyan-600',
    iconName: 'Database',
  },
  {
    id: 'full-stack-novitech',
    title: 'Full Stack Development',
    issuer: 'NoviTech Private Limited',
    date: 'Dec 2025 - Jan 2026',
    skills: ['HTML/CSS', 'JavaScript', 'Adobe Illustrator', 'Figma', 'Adobe XD'],
    gradientClass: 'from-rose-500 to-orange-500',
    iconName: 'Code2',
  },
  {
    id: 'adv-js',
    title: 'Advanced JavaScript',
    issuer: 'Sunstone School of Technology',
    date: 'June 2025',
    skills: ['ES6+', 'Asynchronous JS', 'DOM Manipulation', 'Closures'],
    gradientClass: 'from-yellow-400 to-amber-500',
    iconName: 'Zap',
  },
  {
    id: 'data-science',
    title: 'Data Science and Analytics',
    issuer: 'HP Foundation',
    date: 'September 2024',
    skills: ['Analytics', 'Data Visualisation', 'Data Prep', 'Statistics'],
    gradientClass: 'from-emerald-500 to-teal-600',
    iconName: 'BarChart3',
  },
];
