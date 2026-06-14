import personalInfoJson from './data/personalInfo.json';
import skillsJson from './data/skills.json';
import projectsJson from './data/projects.json';
import workExperienceJson from './data/experience.json';
import educationJson from './data/education.json';
import certificationsJson from './data/certifications.json';
import type { Certification, Education, Project, SkillCategory, WorkExperience } from './types';

const personalInfo = personalInfoJson;
const skillsData = skillsJson as SkillCategory[];
const projectsData = projectsJson as Project[];
const workExperienceData = workExperienceJson as WorkExperience[];
const educationData = educationJson as Education[];
const certificationsData = certificationsJson as Certification[];

export {
  personalInfo,
  skillsData,
  projectsData,
  workExperienceData,
  educationData,
  certificationsData
};
