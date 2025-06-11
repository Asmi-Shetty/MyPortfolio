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
