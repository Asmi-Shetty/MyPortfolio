// import React from "react";

// const SkillsetSection = () => {
//   return (
//     <section className="bg-[#0a192f] text-white px-6 sm:px-12 py-20">
//       <div className="max-w-6xl mx-auto">
//         {/* Section Title */}
//         <h2 className="text-3xl font-bold text-[#ccd6f6] mb-4">Skillset</h2>
//         <div className="w-32 h-px mb-12" style={{ backgroundColor: '#64ffda' }} />


//         {/* Skill Columns */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm sm:text-base">
//           {/* Frontend */}
//           <div>
//             <h3 className="text-[#64ffda] font-semibold mb-3">Frontend</h3>
//             <ul className="space-y-2 text-[#ccd6f6]">
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> HTML
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> CSS
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> JavaScript
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> React.js
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> Next.js
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> Redux
//               </li>
              
//             </ul>
//           </div>

//           {/* Backend*/}
//           <div>
//             <h3 className="text-[#64ffda] font-semibold mb-3">Backend</h3>
//             <ul className="space-y-2 text-[#ccd6f6]">
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> Node.js
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> Express.js
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> JWT Authentication
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> RESTful API
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> Web Socket
//               </li>
             
//             </ul>
//           </div>

//           {/* Databases */}
//           <div>
//             <h3 className="text-[#64ffda] font-semibold mb-3">Databases</h3>
//             <ul className="space-y-2 text-[#ccd6f6]">
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> MySQL
//               </li>
             
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> MongoDB
//               </li>
//             </ul>
//           </div>

//           {/* Programming */}
//           <div>
//             <h3 className="text-[#64ffda] font-semibold mb-3">Programming</h3>
//             <ul className="space-y-2 text-[#ccd6f6]">
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> C
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> C++
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> Python
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> DSA
//               </li>
//              < li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> OOPs
//               </li>
//             </ul>
//           </div>

//             {/* Others */}
//             <div>
//             <h3 className="text-[#64ffda] font-semibold mb-3">Others</h3>
//             <ul className="space-y-2 text-[#ccd6f6]">
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> Machine Learning
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> Artificial Intelligence
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> Python
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> Numpy
//               </li>
//              < li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> Pandas
//               </li>
//             </ul>
//           </div>

//   {/* Tools */}
//   <div>
//             <h3 className="text-[#64ffda] font-semibold mb-3">Tools</h3>
//             <ul className="space-y-2 text-[#ccd6f6]">
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> Github
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> AWS
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="text-[#64ffda]">▸</span> Cloud Computing
//               </li>
             
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsetSection;







import React from 'react';

const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Redux'],
  Backend: ['Node.js', 'Express.js', 'JWT Authentication', 'RESTful API', 'Web Socket'],
  Databases: ['MySQL', 'MongoDB'],
  Programming: ['C', 'C++', 'Python', 'DSA', 'OOPs'],
  Others: ['Machine Learning', 'Artificial Intelligence', 'Python', 'Numpy', 'Pandas'],
  Tools: ['Github', 'AWS', 'Cloud Computing'],
};

const SkillsetSection = () => {
  return (
    <section className="px-40 py-36 bg-[#0a192f] text-white">
      {/* Title */}
      <h2 className="text-3xl font-bold text-[#ccd6f6] mb-4">Skillset</h2>
      <div className="w-32 h-px mb-12" style={{ backgroundColor: '#64ffda' }} />

      {/* Skills Row */}
      <div className="flex flex-nowrap gap-16 overflow-x-auto">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="min-w-[150px]">
            <h3 className="text-[#64ffda] font-semibold mb-3">{category}</h3>
            <ul className="text-sm space-y-2 font-mono">
              {items.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="text-[#64ffda]">▸</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsetSection;
