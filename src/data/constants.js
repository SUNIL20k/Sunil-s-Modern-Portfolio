import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";

export const personalInfo = {
  name: "Sunil Kumar",
  title: "MERN Full Stack Developer",
  summary:
    "Passionate Full Stack Developer with 2 years of experience building scalable, responsive, and user-friendly web applications. Specialized in the MERN stack with a strong focus on clean code, performance optimization, and delivering seamless digital experiences.",
  email: "sunilkumar@email.com",
  linkedin: "https://linkedin.com/in/sunilkumar",
  github: "https://github.com/sunilkumar",
  resumeLink: "#",
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: FaReact, level: 90, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 85, color: "#06B6D4" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, level: 88, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, level: 95, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, level: 90, color: "#1572B6" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, level: 85, color: "#339933" },
      { name: "Express.js", icon: SiExpress, level: 82, color: "#ffffff" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, level: 80, color: "#47A248" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, level: 85, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, level: 88, color: "#ffffff" },
      { name: "Postman", icon: SiPostman, level: 78, color: "#FF6C37" },
    ],
  },
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce application with user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with performance and scalability in mind.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    image: "🛒",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop functionality, team workspaces, and progress tracking. Features a clean and intuitive UI.",
    tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "CSS3"],
    liveLink: "#",
    githubLink: "#",
    image: "📋",
  },
  {
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard for social media management with interactive charts, scheduled posting, engagement metrics, and multi-platform support.",
    tech: ["React.js", "Express.js", "MongoDB", "Chart.js", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    image: "📊",
  },
  {
    title: "Real-time Chat Application",
    description:
      "A modern chat application with real-time messaging, file sharing, group chats, and end-to-end encryption. Features typing indicators and online status.",
    tech: ["React.js", "Node.js", "Socket.io", "MongoDB", "Express.js"],
    liveLink: "#",
    githubLink: "#",
    image: "💬",
  },
];

export const experience = [
  {
    role: "MERN Full Stack Developer",
    company: "Tech Solutions Pvt. Ltd.",
    duration: "2024 – Present",
    responsibilities: [
      "Developed and maintained full-stack web applications using React.js, Node.js, Express.js, and MongoDB",
      "Built RESTful APIs and integrated third-party services for enhanced functionality",
      "Implemented responsive and pixel-perfect UI components using Tailwind CSS",
      "Optimized application performance, reducing load times by 40%",
      "Collaborated with cross-functional teams using Agile methodologies",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Digital Innovations Inc.",
    duration: "2023 – 2024",
    responsibilities: [
      "Built dynamic and responsive web interfaces using React.js and modern CSS",
      "Developed backend services and REST APIs using Node.js and Express.js",
      "Managed MongoDB databases and implemented efficient data models",
      "Integrated payment gateways and authentication systems",
      "Participated in code reviews and maintained coding standards",
    ],
  },
];

export const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

export const socialLinks = [
  { name: "GitHub", icon: FaGithub, url: "https://github.com/sunilkumar" },
  { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com/in/sunilkumar" },
];
