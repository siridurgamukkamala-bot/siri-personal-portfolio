import smartCampusPreview from '../assets/images/smart_campus_preview_1792144463213.jpg';
import nexoraTechPreview from '../assets/images/nexora_tech_preview_1792144462667.jpg';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  liveUrl: string;
  githubUrl?: string;
  previewImage: string;
  fallbackImage: string;
  tags: string[];
  features: string[];
  type: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  items: {
    name: string;
    description: string;
  }[];
}

export interface JourneyMilestone {
  step: string;
  title: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: 'Siri',
  fullName: 'Siri',
  headline: 'Aspiring Software Developer',
  educationSummary: 'B.Tech, 2nd Year',
  branch: 'Computer Science and Machine Learning (CSM)',
  branchShort: 'CSM',
  college: 'Sasi Institute of Technology and Engineering',
  location: 'Tadepalligudem, Andhra Pradesh',
  email: 'siridurgamukkamal@gmail.com',
  githubUsername: 'siridurgamukkamala-bot',
  githubUrl: 'https://github.com/siridurgamukkamala-bot',
  statusLabel: 'Currently Learning • Java • Python • AI/ML',
  heroIntro: 'B.TECH STUDENT | CSM',
  heroText:
    "I'm a Computer Science and Machine Learning student exploring programming, artificial intelligence, and web development. I'm learning by building projects, strengthening my fundamentals, and turning ideas into practical experiences.",
  aboutText:
    "I'm Siri, currently pursuing my second year of B.Tech in Computer Science and Machine Learning at Sasi Institute of Technology and Engineering, Tadepalligudem. I'm exploring programming, artificial intelligence, machine learning, and web development. Through college projects and AI-assisted development, I'm gaining practical experience in building websites. My goal is to strengthen my programming fundamentals, improve my problem-solving skills, and grow into a capable software engineer.",
  educationDescription:
    "I'm building my foundation in programming, data structures, artificial intelligence, and machine learning while gaining practical experience through projects.",
  contactIntro:
    "I'm always interested in learning, building projects, and connecting with people who share an interest in technology.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    subtitle: 'Core languages actively practiced',
    items: [
      {
        name: 'Java',
        description: 'Object-oriented programming, core syntax, control flow, and method design.',
      },
      {
        name: 'Python',
        description: 'Scripting, algorithmic basics, logic building, and library fundamentals.',
      },
    ],
  },
  {
    title: 'Computer Science',
    subtitle: 'Algorithmic thinking & foundation',
    items: [
      {
        name: 'Advanced Data Structures (ADS)',
        description: 'Studying trees, graphs, heaps, hashing, and complexity trade-offs.',
      },
      {
        name: 'Problem-Solving Fundamentals',
        description: 'Step-by-step logic breakdown, pattern discovery, and clean implementation.',
      },
    ],
  },
  {
    title: 'AI and Emerging Technology',
    subtitle: 'Specialization coursework & explorations',
    items: [
      {
        name: 'Artificial Intelligence (AI)',
        description: 'Core concepts, search strategies, knowledge representation, and modern AI paradigms.',
      },
      {
        name: 'Machine Learning (ML)',
        description: 'Supervised/unsupervised basics, data preprocessing concepts, and predictive models.',
      },
    ],
  },
  {
    title: 'Web Development',
    subtitle: 'Practical website building & design',
    items: [
      {
        name: 'Frontend Development',
        description: 'Crafting responsive layouts, modern UI structure, and interactive components.',
      },
      {
        name: 'Responsive Website Design',
        description: 'Mobile-first ergonomics, fluid typography, dark themes, and device scaling.',
      },
      {
        name: 'AI-Assisted Development',
        description: 'Leveraging AI workflows to accelerate learning, prototype UIs, and write clean code.',
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'smart-campus',
    title: 'Smart Campus Information Hub',
    category: 'College Project · Campus Information',
    type: 'College Project',
    description:
      'A college project focused on presenting a smart campus information website. Explore the deployed website to understand its actual features and design.',
    liveUrl: 'https://smart-campus-information-hub-wtc2.vercel.app',
    previewImage: smartCampusPreview,
    fallbackImage: '/images/smart-campus.jpg',
    tags: ['Frontend', 'College Project', 'Campus Intelligence', 'Information Hub'],
    features: [
      'Centralized academic notices & circulars',
      'Timetable and examination schedules overview',
      'Department contact directories & campus services',
      'Mobile-optimized responsive interface',
    ],
  },
  {
    id: 'nexora-technologies',
    title: 'Nexora Technologies',
    category: 'Exploration Project · Modern Frontend',
    type: 'Frontend Exploration',
    description:
      'A technology-company website project created to explore modern website design, layouts, and frontend development.',
    liveUrl: 'https://nexora-technologies-lime.vercel.app',
    githubUrl: 'https://github.com/siridurgamukkamala-bot/nexora-technologies',
    previewImage: nexoraTechPreview,
    fallbackImage: '/images/nexora-technologies.jpg',
    tags: ['TypeScript', 'Modern UI', 'Tech Showcase', 'Responsive Layout'],
    features: [
      'Modern tech-firm hero showcase & services grid',
      'Interactive service breakdown and research pillars',
      'Polished modern aesthetic with custom typography',
      'Responsive design across smartphone and desktop',
    ],
  },
];

export const LEARNING_GOALS: JourneyMilestone[] = [
  {
    step: '01',
    title: 'Strengthening Java and Python fundamentals',
    description: 'Deepening understanding of object-oriented concepts, memory models, clean syntax, and idiomatic coding practices.',
  },
  {
    step: '02',
    title: 'Learning Advanced Data Structures and problem-solving',
    description: 'Mastering tree traversals, graph algorithms, dynamic programming foundations, and time-space complexity optimization.',
  },
  {
    step: '03',
    title: 'Exploring Artificial Intelligence and Machine Learning',
    description: 'Expanding theoretical and hands-on understanding of algorithms, mathematical intuition, and practical model exploration.',
  },
  {
    step: '04',
    title: 'Improving frontend development skills',
    description: 'Refining modern responsive layouts, design hierarchy, component architecture, and accessible user experiences.',
  },
  {
    step: '05',
    title: 'Building more practical projects',
    description: 'Applying newly learned concepts into working web apps and software experiments that solve realistic user problems.',
  },
  {
    step: '06',
    title: 'Working toward becoming a capable software engineer',
    description: 'Developing disciplined engineering habits, version control hygiene, collaborative skills, and long-term problem-solving stamina.',
  },
];
