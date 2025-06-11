
import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        {/* <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        /> */}

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (



<div className="w-full bg-[#0a192f] pt-32 pb-60">
  <div className="max-w-7xl mx-auto -ml-[180px] px-6 sm:px-10 md:px-20">
  <div className="-ml-2 -mt-[150px]"> {/* Shift left and up */}

    <motion.div variants={textVariant()}>
      <p className="text-[#64ffda] text-[18px]">Introduction</p>
      <h2 className="text-white text-[60px] font-bold">Overview.</h2>
    </motion.div>

    {/* <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-[#ccd6f6] text-[17px] leading-[30px]"
    >
      I'm a skilled and passionate software developer with experience in 
      JavaScript, and expertise in frameworks like React and Node.js. 
      I'm a quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. Let's work together to bring your ideas to life!

      Education - Shri Guru Gobind Singh Ji Institute Of Engineering And Technology(SGGS), Nanded.      -B.Tech(2022-2026) in Computer Science Engineering.
                  Gyan Mata Vidya Vihar, Nanded.                                                        -SSC
      
    </motion.p> */}


<motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className="mt-4 text-[#ccd6f6] text-[17px] leading-[30px]"
>
  I'm a skilled and passionate software developer with experience in 
  JavaScript, and expertise in frameworks like React and Node.js. 
  I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!
  <br /><br />
  <strong>Education:</strong><br />
  Shri Guru Gobind Singh Ji Institute Of Engineering And Technology (SGGS), Nanded<br />
  - B.Tech (2022–2026) in Computer Science Engineering<br /><br />
  Gyan Mata Vidya Vihar, Nanded<br />
  - SSC
</motion.p>


    <div className="mt-28 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </div>
</div>
</div>


  );
};

export default SectionWrapper(About, "about");
