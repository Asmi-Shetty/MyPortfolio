
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import avijoProject from "../assets/avijo_project_image.png"; 
import eduhive from "../assets/eduhive_project_image.png"; 
import food from "../assets/food_project_image.png"; 


const FeaturedProject = () => {
  return (
    <section className="bg-[#0a192f] text-white px-6 sm:px-12 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-[#ccd6f6] text-2xl sm:text-3xl font-bold flex items-center gap-3 mb-12">
          <span className="text-[#64ffda] text-xl sm:text-2xl"></span>
          Some Projects I've Built
          <span className="w-full h-px bg-slate-700 ml-4"></span>
        </h2>

        {/* First Project */}
        <div className="relative flex flex-col md:flex-row gap-10 items-start mb-28">
          {/* Project Image with green overlay */}
          <div className="md:w-1/2 w-full relative z-0">
            <div className="relative w-full">
              <img
                src={avijoProject}
                alt="AI Face Landmark Detection"
                className="rounded-md w-full"
              />
              <div className="absolute inset-0 bg-[#64ffda] opacity-20 rounded-md mix-blend-multiply" />
            </div>
          </div>

          {/* Project Info */}
          <div className="md:w-1/2 w-full flex flex-col items-start relative z-10">
            <p className="text-[#64ffda] text-sm font-mono mb-1">
              Featured Project
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#ccd6f6] mb-6">
              Healthcare Portal (ABDM)
            </h3>

            {/* Description Box */}
            <div className="bg-[#112240] text-[#a8b2d1] text-base px-6 py-5 rounded-md shadow-lg w-full md:w-[105%] -ml-20">
              Developed a comprehensive healthcare portal aligned with the Ayushman Bharat Digital Mission (ABDM),
              which aims to build the necessary backbone for an integrated digital health infrastructure in India.
            </div>

            {/* Tech Stack + GitHub icon */}
            <ul className="flex items-center gap-6 text-sm text-[#64ffda] font-mono mt-6">
              <li>React</li>
              <li>Javascript</li>
              <li>API</li>
              <li>JWT</li>
              <li>Node.js</li>
              <li>
                <a
                  href="https://github.com/it4avijo/avijo-expert/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ccd6f6] hover:text-[#64ffda]"
                >
                  <Github className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

          {/* Second Project */}
          <div className="relative flex flex-col md:flex-row-reverse gap-10 items-center">
          {/* Project Image */}
          <div className="md:w-1/2 w-full relative z-0">
            <div className="relative w-full">
              <img
                src={eduhive}
                alt="Real-Time Face Mask Detection"
                className="rounded-md w-full"
              />
              <div className="absolute inset-0 bg-[#64ffda] opacity-20 rounded-md mix-blend-multiply" />
            </div>
          </div>

          {/* Project Info */}
          <div className="md:w-1/2 w-full flex flex-col items-start relative z-10">
            <p className="text-[#64ffda] text-sm font-mono mb-1">
              Featured Project
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#ccd6f6] mb-6">
              Eduhive- A Collaborative Study Platform
            </h3>

            {/* Description Overlapping Image */}
            <div className="bg-[#112240] text-[#a8b2d1] text-base px-6 py-5 rounded-md shadow-lg w-full md:w-[105%] md:-ml-[-45px] relative z-10">
            Designed to enhance online learning with interactive features like whiteboard sharing, video calling,
             reward system, live polls, in-class notes, and a study timer. 
            Facilitates real-time collaboration between students and educators. 

              <br />
              {/* Inspired by Adrian Rosebrock's{" "}
              <a
                href="https://pyimagesearch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64ffda]"
              >
                PyImageSearch Blog
              </a>. */}
            </div>

            {/* Tech Stack */}
            <ul className="flex items-center gap-6 text-sm text-[#64ffda] font-mono mt-6 ml-20">

              <li>MERN</li>
              <li>Web Sockets</li>
              <li>Javascript</li>
              <li>AI</li>
              <li>
                <a
                  href="https://github.com/Lakde-Maheshwari/WingsHackathonTeam404Found2025.git/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ccd6f6] hover:text-[#64ffda]"
                >
                  <Github className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

{/* third Project */}
        <div className="relative flex flex-col md:flex-row gap-10 items-start mb-28 mt-40">
          {/* Project Image with green overlay */}
          <div className="md:w-1/2 w-full relative z-0">
            <div className="relative w-full">
              <img
                src={food}
                alt="food delivery"
                className="rounded-md w-full"
              />
              <div className="absolute inset-0 bg-[#64ffda] opacity-20 rounded-md mix-blend-multiply" />
            </div>
          </div>

          {/* Project Info */}
          <div className="md:w-1/2 w-full flex flex-col items-start relative z-10">
            <p className="text-[#64ffda] text-sm font-mono mb-1">
              Featured Project
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#ccd6f6] mb-6">
             Food Delivery
            </h3>

            {/* Description Box */}
            <div className="bg-[#112240] text-[#a8b2d1] text-base px-6 py-5 rounded-md shadow-lg w-full md:w-[105%] -ml-20">
              Engineered a feature-rich food delivery app using React.js,
 Redux, Next.js, Node.js, and MongoDB, integrating GraphQL APIs and featuring user authentication (JWT)
 improving API response time by 40%. 
       Designed an intuitive UI with Redux Toolkit for efficient state management.   
            </div>

            {/* Tech Stack + GitHub icon */}
            <ul className="flex items-center gap-6 text-sm text-[#64ffda] font-mono mt-6">
              <li>React</li>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>
                <a
                  href="https://github.com/Asmi-Shetty/food-delivery-MERN.git/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ccd6f6] hover:text-[#64ffda]"
                >
                  <Github className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
