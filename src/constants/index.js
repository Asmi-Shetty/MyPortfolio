import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  eduhive,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Abhyaz",
    //icon: starbucks,
    //iconBg: "#383E56",
    date: "February 2025 - March 2025",
    points: [
      "Internship which helped me in developing web applications using MERN stack and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Core Team Member",
    company_name: "SGGS WEB APP GRAPHICS(SWAG) Club",
    //icon: shopify,
    //iconBg: "#383E56",
    date: "Feb 2023 - Present",
    points: [
      "Superheaded a team of 20+ developers.",
      "Organized and conducted workshops on Git and development practices.",
      "Successfully conducted 36 hours national level hackathons thrice.",
      "Developed and maintained the official website of the club.",
      
    ],
  },
  {
    title: "Co-Lead",
    company_name: "Google Developers Group",
   // icon: meta,
    //iconBg: "#E6DEDD",
    date: "Sept 2024 - Present",
    points: [
      "A global network of passionate developers that fosters learning and collaboration",
      "Conducted many workshops on AI and Cloud Computing.",
      "We aim to bring even more opportunities for everyone to learn, innovate and grow in the ever-evolving tech landscape.",
      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Eduhive",
    description:
      "Designed to enhance online learning with interactive features like whiteboard sharing, video calling,  reward system, live polls, in-class notes, and a study timer. Facilitates real-time collaboration between students and educators.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: eduhive,
    source_code_link: "https://github.com/Lakde-Maheshwari/WingsHackathonTeam404Found2025",
  },
  {
    name: "Food Delivery App",
    description:
      "Engineered a feature-rich food delivery app using React.js, Redux, Next.js, Node.js, and MongoDB, integrating GraphQL APIs and featuring user authentication (JWT) improving API response time by 40%. .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "MERN",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Asmi-Shetty/food-delivery-MERN.git",
  },
  {
    name: "Wanderluster",
    description:
      "A one-stop solution for planning trips with friends and family. It provides AI-driven personalized trip suggestions, travel bookings, and budget tracking. It also offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Asmi-Shetty/wanderluster.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
