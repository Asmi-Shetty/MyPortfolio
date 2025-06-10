import React from "react";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Avijo",
    //link: "https://klarityintelligence.com",
    date: "April 2025 – July 2025",
    points: [
    "Internship which helped me in developing web applications using MERN stack and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
       "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    //stack: "Python, MongoDB, GPT-4, Claude 3 Opus, Pinecone",
  },
  {
    title: "Backend Developer Intern",
    company: "RiskGuard Enterprises",
    //link: "https://cursorinsight.com",
    date: "May 2025 – current",
    points: [
      "During my backend development internship, I contributed to the design, development, and optimization of scalable server-side applications. ",
      "My role involved collaborating with cross-functional teams, implementing robust APIs, and ensuring seamless data management and security.",
      "Implemented secure authentication and authorization mechanisms.,"
    ],
    //stack: "React, Node.js, MongoDB",
  },

  {
    title: "Core Team Member",
    company: "SGGS SWAG Club",
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
];

const WorkExperienceSection = () => {
  return (
    <section className="bg-[#0a192f] text-white -ml-[-35px] py-20 px-6 sm:px-10 md:px-24">
        <div className="-ml-2 -mt-[150px]"> {/* Shift left and up */}

      <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#ccd6f6] border-b border-[#64ffda] inline-block mb-12">
        Where I’ve Worked
      </h2>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={index}>
            <h3 className="text-[20px] sm:text-[24px] font-semibold text-white">
              {exp.title}{" "}
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64ffda] hover:underline"
              >
                @ {exp.company}
              </a>
            </h3>
            <p className="text-sm text-[#8892b0] mt-1 font-mono">{exp.date}</p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-[#ccd6f6]">
              {exp.points.map((point, i) => (
                <li key={i} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>

            <p className="italic text-[#8892b0] mt-3">
              <strong>Stack:</strong> {exp.stack}
            </p>
          </div>
           
        ))}
      </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
