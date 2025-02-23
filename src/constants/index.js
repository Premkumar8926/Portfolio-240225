export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Lorem Ispum",
    position: "Marketing Director at Lorem Ispum",
    img: "assets/review1.png",
    review:
      "lorem200 ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
  },
  {
    id: 2,
    name: "Lorem Ispum",
    position: "Founder of Lorem Ispum",
    img: "assets/review2.png",
    review:
      "lorem200 ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
  },
  {
    id: 3,
    name: "Lorem Ispum",
    position: "Project Manager at Lorem Ispum ",
    img: "assets/review3.png",
    review:
      "lorem200 ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
  },
  {
    id: 4,
    name: "Lorem Ispum",
    position: "CEO of Lorem Ispum",
    img: "assets/review4.png",
    review:
      "lorem200 ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
  },
];

export const myProjects = [
  {
    title: "📌 Remote Interview Platform",
    desc: "This Remote Interview Platform is designed to streamline the online interview process with robust authentication, database management, and real-time communication features.",
    subdesc:
      "Frontend: React.js, Tailwind CSS, Authentication: Clerk, Database: Convex, Real-Time Communication: GetStream.io",
    href: "interview-platform-n4eb80ed5-premkumar8926s-projects.vercel.app",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/proj-1-logo.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Next.js",
        path: "/assets/next.png",
      },
    ],
  },
  {
    title: "WildLens Tours",
    desc: " Building a dynamic and interactive app for Users can view all wild tour details on this platform and they can search and filter their preferences by using location, budget, schedules.",
    subdesc:
      "Front-end: Reactjs, Back-end: Nodejs, Database: MongoDB",
    href: "https://wildlentoursfe.netlify.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/proj-2-logo.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Mongo DB",
        path: "assets/mongodb.png",
      },
    ],
  },
  {
    title: "E-Commerce Application",
    desc: " Indian e-commerce platform. It provides a seamless and intuitive shopping experience.",
    subdesc: "With a focus on efficiency of React Components and Bootstrap",
    href: "https://github.com/Premkumar8926/E-Comm-front , https://github.com/Premkumar8926/E-Comm-back",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/proj-3-logo.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -5.5, 0] : [0.25, -7.0, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3.4, 2.5, 0]
      : isMobile
      ? [5, 0.7, 0]
      : isTablet
      ? [5, 0.3, 0]
      : [12, 1, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 7.1, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const education = [
  {
    id: 1,
    name: "GUVI",
    pos: "Full Stack Developer Certification",
    duration: "2024 - Present",
    title:
      "Completed a Full Stack Developer certification at GUVI, focusing on MongoDB, Express.js, React.js, and Node.js. This course enhanced my ability to build scalable web applications with a strong emphasis on performance and security.",
    icon: "/assets/guvi.png",
    animation: "victory",
},
{
    id: 2,
    name: "SRM Valliammai Engineering College",
    pos: "Master of Computer Applications",
    duration: "2019",
    title:
      "Earned my MCA degree from SRM Valliammai Engineering College, where I gained expertise in software development, database management, and system architecture.",
    icon: "/assets/college-logo.png",
    animation: "clapping",
},
{
    id: 3,
    name: "Jamal Mohamed College",
    pos: "Bachelor of Computer Science",
    duration: "2017",
    title:
      "Completed my Bachelor's degree in Computer Science, building a strong foundation in programming, algorithms, and database management.",
    icon: "/assets/Jamal logo.png",
    animation: "salute",
},
];
