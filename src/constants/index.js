import {
  //mobile,
  //backend,
  //creator,
  //web,
  // javascript,
  
  // html,
  // css,
  // reactjs,
  
  // tailwind,
  // nodejs,
  // mongodb,
  // git,
  // figma,
  // docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // eduhive,
  // jobit,
  // tripguide,
  
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
    //icon: web,
  },

  {
    title: "Backend Developer",
    //icon: backend,
  },
  {
    title: "Content Creator",
    //icon: creator,
  },
];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },

//   {
//     name: "React JS",
//     icon: reactjs,
//   },
  
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },

//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Avijo",
    //icon: starbucks,
    //iconBg: "#383E56",
    date: "April 2025 - July 2025",
    points: [
      "Internship which helped me in developing web applications using MERN stack and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
       "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  {
    title: "Backend Developer",
    company_name: "RiskGuard Enterprises",
    //icon: shopify,
    //iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "During my backend development internship, I contributed to the design, development, and optimization of scalable server-side applications. ",
      "My role involved collaborating with cross-functional teams, implementing robust APIs, and ensuring seamless data management and security.",
      "Implemented secure authentication and authorization mechanisms.,"
      
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
      "A highly skilled full-stack developer with an eye for detail and a passion for clean, efficient code. Always delivers beyond expectations!.",
    name: "Sanket Shetty",
    designation: "Manager",
    company: "Leap Wallet",
    //image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "An exceptional problem-solver and a master of both front-end and back-end development. Working with her is always a great experience!.",
    name: "Tanaya Deshpande",
    designation: "Electronics engineer",
    //company: "DEF Corp",
    //image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Brilliant developer with a keen understanding of modern web technologies. Always a pleasure to collaborate with!",
    name: "Apurva Deshpande",
    designation: "Electronics engineer",
    //company: "456 Enterprises",
    //image: "https://randomuser.me/api/portraits/women/6.jpg",
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
    //image: eduhive,
    source_code_link: "https://github.com/Lakde-Maheshwari/WingsHackathonTeam404Found2025",
  },
  {
    name: "Food Delivery App",
    description:
      "Engineered a feature-rich food delivery app using React.js, Next.js, Node.js, and MongoDB and featuring user authentication (JWT) improving API response time by 40%. Designed an intuitive UI with Redux Toolkit for efficient state management.",
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
    //image: jobit,
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
    //image: tripguide,
    source_code_link: "https://github.com/Asmi-Shetty/wanderluster.git",
  },
];

export { services,  experiences, testimonials, projects };
