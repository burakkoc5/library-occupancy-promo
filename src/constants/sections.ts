export const FEATURES = [
  {
    title: "Real-time Occupancy",
    description:
      "Monitor library space utilization in real-time with accurate detection.",
    icon: "📊",
  },
  {
    title: "Privacy Focused",
    description: "Ensure user privacy with anonymous occupancy tracking.",
    icon: "🔒",
  },
  {
    title: "Smart Analytics",
    description: "Gain insights with detailed usage patterns and trends.",
    icon: "📈",
  },
  {
    title: "Easy Integration",
    description:
      "Seamlessly integrate with existing library management systems.",
    icon: "🔄",
  },
] as const;

export const TEAM_MEMBERS = [
  {
    name: "Burak Koç",
    role: "Full Stack Developer",
    bio: "Computer Engineering student at Boğaziçi University, passionate about web development and AI.",
    image: "/team/burak.jpeg",
    links: {
      github: "https://github.com/burakkoc5",
      linkedin: "https://linkedin.com/in/burak-koc",
    },
  },
  {
    name: "Furkan Safa Altunyuva",
    role: "Machine Learning Engineer",
    bio: "Computer Engineering student specializing in computer vision and deep learning.",
    image: "/team/burak.jpeg",
    links: {
      github: "https://github.com/fsaltunyuva",
      linkedin: "https://linkedin.com/in/fsaltunyuva",
    },
  },
  {
    name: "Buse Öner",
    role: "Backend Developer",
    bio: "Computer Engineering student focused on backend development and system architecture.",
    image: "/team/burak.jpeg",
    links: {
      github: "https://github.com/buseoner9",
      linkedin: "https://linkedin.com/in/buseoner",
    },
  },
] as const;

export const CONTACT_FAQS = [
  {
    question: "How does the system work?",
    answer:
      "Our system uses advanced computer vision to detect and track library occupancy in real-time, while maintaining user privacy.",
  },
  {
    question: "What hardware is required?",
    answer:
      "The system requires standard security cameras and a processing unit. We can work with existing camera infrastructure.",
  },
  {
    question: "Is the system privacy-compliant?",
    answer:
      "Yes, our system does not store personal data or identifiable information. It only tracks occupancy numbers.",
  },
] as const;
