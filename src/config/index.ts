import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Soft-tech — Mobile & Web Developer",
  author: "Offor John",
  description:
    "Software Engineer based in Lagos, Nigeria. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/john.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://x.com/OfforJohn7" },
 
    { text: "Github", href: "https://github.com/OfforJohn" },
    {text: "whatsapp", href: "https://wa.me/+2347063540922" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Soft-Tech solutions",
    specialty: "Mobile & Web Developer",
    summary:
      "Developer based in Lagos, Nigeria. I specialize in UI design, web and mobile application development and maintenance.",
    email: "example@email.com",
  },


experience: [
  {
    company: "Cushy Access",
    position: "Lead Android Developer",
    startDate: "May 2018",
    endDate: "Sept 2020",
    summary: [
      "Developed a real-time chat application similar to the WhatsApp Clone with AI project, leveraging WebSocket technology to enable instant messaging between users.",
      "Integrated AI-powered bots that automatically respond within specified time intervals, enhancing user interaction and engagement within the app.",
      "Optimized app performance and layout for large-screen devices based on client requirements, ensuring a seamless and responsive user experience.",
      "Collaborated with backend engineers to manage API integrations, real-time message storage, and socket communication for reliable data flow.",
    ],
  },
  {
    company: "SynergyLive",
    position: "Mobile Developer",
    startDate: "Feb 2017",
    endDate: "May 2018",
    summary: [
      "Contributed to the development of an LMS platform similar to SynergyLive, where users could purchase courses, learn at their own pace, and upload content as instructors.",
      "Implemented features for user authentication, payment workflows, and content management to support secure and efficient course transactions.",
      "Worked with RESTful APIs to manage video streaming, course data, and instructor dashboards, ensuring smooth content delivery and scalability.",
      "Collaborated with UI/UX designers to build a clean and intuitive interface that provided an engaging learning experience across devices.",
    ],
  },
  {
    company: "Highscore EdTech",
    position: "Frontend Developer",
    startDate: "Jun 2015",
    endDate: "Oct 2016",
    summary: [
      "Developed and maintained frontend pages for the Highscore EdTech learning platform, featuring colorful and engaging UI components for students.",
      "Built and integrated quiz and leaderboard systems that allowed students to practice past questions, participate in live quizzes, and win rewards.",
      "Consumed APIs to fetch and display quiz questions, update scores in real-time, and track user progress.",
      "Collaborated with backend developers to ensure smooth synchronization between the frontend and server for live updates and data consistency.",
    ],
  },
],


  projects: [
    {
      name: "WhatsApp Clone With AI",
      summary: "Although not responsive as its only displays well on larger screen as per clients request I Leveraged on websocket to create this cloone. It has the ability for real time chatting using websocket. Users can create bots with specified name, send messages to the bot and the bots reply within specified time.",
      linkPreview: "https://whatsapp-clone3.vercel.app/",

      image: "/whats appclone.PNG",
    },
    {
      name: "Synergylive",
      summary: "An Udemy like application An LMS platform where users can purchase courses and learn at their own pace. Users can also create an account and become instructors to upload courses for sale.  ",
      linkPreview: "/https://synergylive.vercel.app/",

      image: "/synergylive.PNG",
    },
    {
      name: "highscore-edtech",
      summary: "A Learning platform for students also with colourfull UI students can practice past questions and also take part in live quizzes win awesome prices.",
      linkPreview: "/",

      image: "/highscore ed tech.PNG",
    },
  ],
  about: {
    description: `
      Hi, I’m Offor-Chukwuebuka John, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/john.jpg",
  },
};

// #5755ff
