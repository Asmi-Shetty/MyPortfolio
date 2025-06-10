// import React from 'react';
// import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
// import { SiLeetcode } from 'react-icons/si';
// import myPhoto from "../assets/myPhoto.jpg"; 



// const HeroSection = () => {
//   return (
//     <section className="relative h-screen w-full bg-[#0a192f] text-white overflow-hidden">
//       {/* Left bottom social icons */}
//       <div className="fixed left-5 bottom-0 top-0 flex flex-col items-center justify-end gap-6 py-4">

//         <a href="https://github.com/Asmi-Shetty/" target="_blank" rel="noopener noreferrer">
//           <FaGithub className="text-teal-300 text-[28px] hover:scale-110 transition-transform" />
//         </a>
//         <a href="https://www.linkedin.com/in/asmi-shetty/" target="_blank" rel="noopener noreferrer">
//           <FaLinkedin className="text-teal-300 text-[28px] hover:scale-110 transition-transform" />
//         </a>
//         <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
//           <SiLeetcode className="text-teal-300 text-[28px] hover:scale-110 transition-transform" />
//         </a>
//         <a href="https://www.instagram.com/asmi__shetty?igsh=M253c3BxbXhycnFk/" target="_blank" rel="noopener noreferrer">
//           <FaInstagram className="text-teal-300 text-[28px] hover:scale-110 transition-transform" />
//         </a>
//         <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
//           <FaTwitter className="text-teal-300 text-[28px] hover:scale-110 transition-transform" />
//         </a>
//         <div className="w-[2px] h-24 bg-teal-300 mt-4" />
//       </div>

//       {/* Right bottom email */}

// <div className="fixed right-8 bottom-0 hidden lg:flex flex-col items-center z-50">
//   <a
//     href="mailto:asmishetty010@gmail.com"
//     className="text-[#64ffda] text-xl tracking-widest mb-6 [writing-mode:vertical-rl] hover:text-white"
//   >
//     asmishetty010@gmail.com
//   </a>
//   <div className="w-[1px] h-24 bg-[#64ffda]" />
// </div>

    

//       {/* Main content */}
//       <div className="relative z-10 flex flex-col justify-center items-start h-full pl-[10%]">
//         <p className="text-teal-300 text-[18px]">Hello there!👋 ,</p>
//         <h1 className="text-[70px] font-extrabold leading-tight mt-2">
//           I'm Asmi Shetty.
//         </h1>
//         <h2 className="text-[60px] font-bold text-gray-400 mt-2">
//           Full Stack Developer!
//         </h2>
//         <p className="text-[20px] text-gray-300 max-w-[650px] mt-4">
//           I'm a Final Year Computer Science Engineering Student at Shri Guru Gobind Singh Ji Institute Of Engineering And Technology(SGGS), Nanded.
//           Primarily interested in Web Development and Data Science. I enjoy
//           learning new skills and implementing them in real life!
//         </p>
//         <button className="border border-teal-400 text-teal-300 px-6 py-3 mt-6 text-[18px] hover:bg-teal-600/10">
//           Get In Touch
//         </button>
//       </div>
     
//     {/* Profile photo with glow effect behind – shifted to left and enlarged */}
// <div className="absolute top-[25%] right-[15%] z-10 group">
//   {/* Glow effect (behind the image) */}
//   <div className="w-80 h-[420px] rounded-lg border-2 border-teal-400 absolute top-4 left-4 z-0" />

//   {/* Profile Image */}
//   <img
//     src={myPhoto}
//     alt="Asmi Shetty"
//     className="w-80 h-[420px] object-cover rounded-lg border border-gray-700 shadow-lg relative z-10"
//   />
// </div>



//     </section>

    
//   );
// };

// export default HeroSection;















import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import myPhoto from "../assets/myPhoto.jpg"; 

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full bg-[#0a192f] text-white overflow-hidden">
      
      {/* Left bottom social icons */}
      <div className="fixed left-5 bottom-0 top-0 flex flex-col items-center justify-end gap-6 py-4 z-50 pointer-events-auto">
        <a href="https://github.com/Asmi-Shetty/" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-teal-300 text-[28px] hover:scale-110 transition-transform" />
        </a>
        <a href="https://www.linkedin.com/in/asmi-shetty/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-teal-300 text-[28px] hover:scale-110 transition-transform" />
        </a>
        <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="text-teal-300 text-[28px] hover:scale-110 transition-transform" />
        </a>
        <a href="https://www.instagram.com/asmi__shetty?igsh=M253c3BxbXhycnFk/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-teal-300 text-[28px] hover:scale-110 transition-transform" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-teal-300 text-[28px] hover:scale-110 transition-transform" />
        </a>
        <div className="w-[2px] h-24 bg-teal-300 mt-4" />
      </div>

      {/* Right bottom email */}
      <div className="fixed right-8 bottom-0 hidden lg:flex flex-col items-center z-50">
        <a
          href="mailto:asmishetty010@gmail.com"
          className="text-[#64ffda] text-xl tracking-widest mb-6 [writing-mode:vertical-rl] hover:text-white"
        >
          asmishetty010@gmail.com
        </a>
        <div className="w-[1px] h-24 bg-[#64ffda]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full pl-[10%]">
        <p className="text-teal-300 text-[18px]">Hello there!👋 ,</p>
        <h1 className="text-[70px] font-extrabold leading-tight mt-2">
          I'm Asmi Shetty.
        </h1>
        <h2 className="text-[60px] font-bold text-gray-400 mt-2">
          Full Stack Developer!
        </h2>
        <p className="text-[20px] text-gray-300 max-w-[650px] mt-4">
          I'm a Final Year Computer Science Engineering Student at Shri Guru Gobind Singh Ji Institute Of Engineering And Technology(SGGS), Nanded.
          Primarily interested in Web Development and Data Science. I enjoy
          learning new skills and implementing them in real life!
        </p>
        <button className="border border-teal-400 text-teal-300 px-6 py-3 mt-6 text-[18px] hover:bg-teal-600/10">
          Get In Touch
        </button>
      </div>

      {/* Profile photo with glow effect behind – shifted to left and enlarged */}
      <div className="absolute top-[25%] right-[15%] z-10 group">
        {/* Glow effect (behind the image) */}
        <div className="w-80 h-[420px] rounded-lg border-2 border-teal-400 absolute top-4 left-4 z-0" />

        {/* Profile Image */}
        <img
          src={myPhoto}
          alt="Asmi Shetty"
          className="w-80 h-[420px] object-cover rounded-lg border border-gray-700 shadow-lg relative z-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;
