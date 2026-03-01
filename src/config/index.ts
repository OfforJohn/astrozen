import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Soft-Tech Solutions - Mobile & Web Developer",
  author: "Soft-Tech Solutions",
  description:
    "Professional web development, mobile app development, and UI/UX design services. Transforming rural talent into global tech power.",
  lang: "en",
  siteLogo: "",
  navLinks: [
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "WhatsApp", href: "https://wa.me/+2347025459649" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://soft-tech-solutions.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Soft-Tech Solutions",
    specialty: "Mobile & Web Developer",
    summary:
      "Developer based in Lagos, Nigeria, specializing in UI design, web development, and mobile application development.",
    email: "contact@soft-tech.com",
  },

  experience: [
    {
      company: "Cushy Access",
      position: "Lead Android Developer",
      startDate: "May 2018",
      endDate: "Sept 2020",
      summary: [
        "Developed a real-time chat application featuring WebSocket-driven instant messaging and dynamic UI similar to WhatsApp-level experiences.",
        "Integrated AI-powered automated responders that reply within predefined intervals to enhance overall user engagement.",
        "Optimized the app’s layout for large-screen devices, delivering a seamless and responsive user experience across form factors.",
        "Collaborated with backend teams to integrate APIs, manage real-time message storage, and maintain stable socket communication.",
      ],
    },
    {
      company: "SynergyLive",
      position: "Mobile Developer",
      startDate: "Feb 2017",
      endDate: "May 2018",
      summary: [
        "Contributed to the development of an LMS platform where users could purchase courses, learn at their own pace, and upload content as instructors.",
        "Implemented workflows for authentication, payment integration, course management, and content delivery.",
        "Integrated RESTful APIs to handle video streaming, course data, dashboards, and scalable content management.",
        "Collaborated with UI/UX designers to build a clean, intuitive interface ensuring a smooth and engaging user experience across devices.",
      ],
    },
    {
      company: "Highscore EdTech",
      position: "Frontend Developer",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary: [
        "Developed and maintained frontend pages for the Highscore EdTech learning platform, focusing on interactive and visually engaging student interfaces.",
        "Built and integrated quiz systems and leaderboards that allowed students to practice questions and participate in real-time competitions.",
        "Consumed APIs to fetch quiz content, update scores in real-time, and track user progress.",
        "Worked closely with backend developers to ensure smooth synchronization between frontend data and server-side updates.",
      ],
    },
  ],

  projects: [
    {
      name: "SynergyLive",
      summary:
        "A full LMS platform similar to Udemy, allowing users to purchase courses, learn at their own pace, and upload their own courses as instructors. Includes authentication, video streaming, dashboards, and a clean, responsive UI.",
      linkPreview: "https://synergylive.vercel.app/",
      image: "/synergylive.PNG",
    },
    {
      name: "Highscore EdTech",
      summary:
        "A vibrant learning platform for students featuring past-question practice, colorful UI, and real-time quiz competitions with rewards. Includes leaderboards, question banks, and a responsive user dashboard.",
      linkPreview: "https://www.highscoreedtech.com/",
      image: "/highscore-edtech.PNG",
    },
  ],

  about: {
    description: `
      Add your about section here. Share your background, skills, and what you're passionate about.
    `,
    image: "",
  },
};
