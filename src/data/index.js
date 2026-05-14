import {
  SiReact, SiJavascript, SiTailwindcss, SiHtml5, SiCss,
  SiSpringboot, SiLaravel, SiNodedotjs,
  SiMysql, SiMongodb, SiRedis,
  SiDocker, SiGit, SiGithub, SiPostman,
  SiOpenai,
} from 'react-icons/si';
import { FaRobot, FaCreditCard, FaBolt } from 'react-icons/fa';

export const NAV_LINKS = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

export const HERO_ROLES = [
  'Building Scalable Applications',
  'Backend Engineering',
  'AI Integrations',
  'Modern Web Experiences',
  'Payment System Architecture',
  'Problem Solving',
];

export const ABOUT_POINTS = [
  { icon: '🚀', title: 'Scalable Systems', desc: 'Architecting backend APIs and services built to handle real production traffic.' },
  { icon: '🤖', title: 'AI Integrations', desc: 'Embedding OpenAI and LLM-based features into production web applications.' },
  { icon: '💳', title: 'Payment Systems', desc: 'End-to-end payment gateway integrations with Stripe, Razorpay, and more.' },
  { icon: '🎨', title: 'Modern Frontend', desc: 'React.js dashboards and responsive UIs that delight users.' },
];

export const SKILLS = [
  {
    category: 'Frontend',
    color: '#00d4ff',
    items: [
      { name: 'React.js', Icon: SiReact, color: '#61dafb' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'HTML5', Icon: SiHtml5, color: '#e34c26' },
      { name: 'CSS3', Icon: SiCss, color: '#264de4' },
    ],
  },
  {
    category: 'Backend',
    color: '#8b5cf6',
    items: [
      { name: 'Spring Boot', Icon: SiSpringboot, color: '#6db33f' },
      { name: 'Laravel', Icon: SiLaravel, color: '#ff2d20' },
      { name: 'Node.js', Icon: SiNodedotjs, color: '#3c873a' },
    ],
  },
  {
    category: 'Database',
    color: '#d946ef',
    items: [
      { name: 'MySQL', Icon: SiMysql, color: '#4479a1' },
      { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
      { name: 'Redis', Icon: SiRedis, color: '#d82c20' },
    ],
  },
  {
    category: 'DevOps & Tools',
    color: '#f97316',
    items: [
      { name: 'Docker', Icon: SiDocker, color: '#2496ed' },
      { name: 'Git', Icon: SiGit, color: '#f05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#ffffff' },
      { name: 'Postman', Icon: SiPostman, color: '#ff6c37' },
    ],
  },
  {
    category: 'AI & Integrations',
    color: '#10b981',
    items: [
      { name: 'OpenAI API', Icon: SiOpenai, color: '#10b981' },
      { name: 'AI Chatbots', Icon: FaRobot, color: '#8b5cf6' },
      { name: 'Payment APIs', Icon: FaCreditCard, color: '#f97316' },
      { name: 'Automation', Icon: FaBolt, color: '#facc15' },
    ],
  },
];

export const EXPERIENCE = [
  {
    period: '2022 – Present',
    role: 'Full Stack Software Engineer',
    type: 'Professional',
    highlights: [
      'Developed production-grade web applications using Laravel & Spring Boot',
      'Built secure JWT + role-based authentication systems',
      'Integrated OpenAI APIs to deliver AI-powered chatbot features',
      'Implemented Stripe & Razorpay payment gateway flows',
      'Created responsive dashboards with React.js + Tailwind CSS',
      'Optimized REST APIs and database queries for high performance',
      'Deployed and managed services using Docker & Linux servers',
    ],
  },
];

export const PROJECTS = [
  {
    title: 'Employee Task Management System',
    desc: 'Enterprise-grade task management platform with role-based authentication, attendance tracking, and real-time dashboards.',
    tech: ['Spring Boot', 'React.js', 'MySQL', 'JWT'],
    color: '#00d4ff',
    icon: '👥',
    features: ['Role-based auth', 'Attendance mgmt', 'Task assignment', 'Analytics dashboard'],
    live: '#',
    github: '#',
  },
  {
    title: 'AI Chatbot Integration Platform',
    desc: 'Real-time AI chatbot system powered by OpenAI APIs with smart automation, context-aware conversations, and workflow triggers.',
    tech: ['Node.js', 'React.js', 'OpenAI API', 'WebSocket'],
    color: '#8b5cf6',
    icon: '🤖',
    features: ['OpenAI integration', 'Real-time responses', 'Automation workflows', 'Context memory'],
    live: '#',
    github: '#',
  },
  {
    title: 'Food Ordering Application',
    desc: 'Full-featured food delivery platform with real-time ordering, secure payment processing, and a modern responsive UI.',
    tech: ['Laravel', 'MySQL', 'Stripe', 'React.js'],
    color: '#f97316',
    icon: '🍔',
    features: ['Online ordering', 'Payment integration', 'Order tracking', 'Admin panel'],
    live: '#',
    github: '#',
  },
  {
    title: 'Freelancing Business Website',
    desc: 'Modern lead-generation website with WhatsApp integration, SEO optimization, and conversion-focused design.',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'WhatsApp API'],
    color: '#10b981',
    icon: '🌐',
    features: ['Lead generation', 'WhatsApp chat', 'SEO optimized', 'Fast loading'],
    live: '#',
    github: '#',
  },
];

export const STATS = [
  { value: 2, suffix: '+', label: 'Years Experience', icon: '⚡' },
  { value: 10, suffix: '+', label: 'Projects Built', icon: '🚀' },
  { value: 20, suffix: '+', label: 'APIs Developed', icon: '🔗' },
  { value: 5, suffix: '+', label: 'AI Integrations', icon: '🤖' },
];

export const SOCIALS = [
  { name: 'LinkedIn', href: '#', icon: 'linkedin' },
  { name: 'GitHub', href: '#', icon: 'github' },
  { name: 'LeetCode', href: '#', icon: 'leetcode' },
  { name: 'WhatsApp', href: 'https://wa.me/917540030577', icon: 'whatsapp' },
];
