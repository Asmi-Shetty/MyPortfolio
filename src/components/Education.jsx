import React from "react";

const educationData = [
  {
    school: "University of Southern California",
    degree: "Master of Science in Computer Science",
    date: "August 2021 – May 2023",
  },
  {
    school: "Pune Institute of Computer Technology",
    degree: "Bachelor of Engineering in Computer Engineering",
    date: "July 2013 – July 2017",
  },
];

const Education = () => {
  return (
    <div className="px-10 py-16">
      <h2 className="text-[32px] font-bold text-slate-100">
        Education <span className="block border-t mt-1 w-[90%] border-green-300"></span>
      </h2>

      <div className="mt-10 space-y-10">
        {educationData.map((edu, index) => (
          <div key={index}>
            <h3 className="text-[20px] font-bold text-[#66ffcc]">{edu.school}</h3>
            <p className="text-lg text-slate-300">{edu.degree}</p>
            <p className="text-sm text-slate-400 font-mono">{edu.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
