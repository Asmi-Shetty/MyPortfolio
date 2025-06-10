// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${
//         styles.paddingX
//       } w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "bg-primary" : "bg-transparent"
//       }`}
//     >
//       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//         <Link
//           to='/'
//           className='flex items-center gap-2'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
//           <p className='text-white text-[18px] font-bold cursor-pointer flex '>
//             &nbsp;
//             <span className='sm:block hidden'></span>
//           </p>
//         </Link>

//         <ul className='list-none hidden sm:flex flex-row gap-10'>
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className='sm:hidden flex flex-1 justify-end items-center'>
//           <img
//             src={toggle ? close : menu}
//             alt='menu'
//             className='w-[28px] h-[28px] object-contain'
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { menu, close } from "../assets"; // Removed logo import

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "bg-[#0a192f]" : "bg-transparent"
//       }`}
//     >
//       <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
//         <Link
//           to='/'
//           className='flex items-center gap-2'
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           {/* Hexagon A logo */}
//           <div className="w-10 h-10 border-2 border-teal-400 rounded-md flex items-center justify-center rotate-45">
//             <span className="-rotate-45 text-teal-400 font-bold text-lg">A</span>
//           </div>
//         </Link>

//         <ul className='list-none hidden sm:flex flex-row gap-10 font-mono text-[14px]'>
//           {navLinks.map((nav, index) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-teal-400"
//               } hover:text-white cursor-pointer transition-all`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>
//                 <span className="text-teal-400">
//                   {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}
//                 </span>{" "}
//                 {nav.title}
//               </a>
//             </li>
//           ))}
//           <li>
//             <a
//               href='/resume.pdf'
//               target='_blank'
//               rel='noopener noreferrer'
//               className='px-4 py-1 border border-teal-400 rounded hover:bg-teal-400 hover:text-[#0a192f] transition duration-200'
//             >
//               Resume
//             </a>
//           </li>
//         </ul>

//         {/* Mobile Menu */}
//         <div className='sm:hidden flex flex-1 justify-end items-center'>
//           <img
//             src={toggle ? close : menu}
//             alt='menu'
//             className='w-[28px] h-[28px] object-contain cursor-pointer'
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
//               {navLinks.map((nav, index) => (
//                 <li
//                   key={nav.id}
//                   className={`font-mono font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-teal-400"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>
//                     <span className="text-teal-400">
//                       {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}
//                     </span>{" "}
//                     {nav.title}
//                   </a>
//                 </li>
//               ))}
//               <li>
//                 <a
//                   href='/resume.pdf'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='px-3 py-1 border border-teal-400 rounded hover:bg-teal-400 hover:text-[#0a192f] transition duration-200'
//                 >
//                   Resume
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//import { menu,close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", title: "About" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-[#0a192f]" : "bg-transparent"
      }`}
    >
      {/* No max-w for full stretch */}
      <div className="w-full flex items-center justify-between">
        {/* Hexagon Logo - EXTREME LEFT */}
        <Link
          to="/"
          className="ml-4"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-10 h-10 border-2 border-teal-400 rounded-md flex items-center justify-center rotate-45">
            <span className="-rotate-45 text-teal-400 font-bold text-lg">A</span>
          </div>
        </Link>

        {/* Nav Links - EXTREME RIGHT */}
        <div className="hidden sm:flex items-center gap-8 mr-10">
          <ul className="flex flex-row items-center gap-6 font-mono text-[14px]">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-teal-400"
                } hover:text-white cursor-pointer transition-all`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>
                  <span className="text-teal-400">
                    {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}
                  </span>{" "}
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-teal-400 text-white px-4 py-1 rounded hover:bg-teal-400 hover:text-[#0a192f] transition duration-200 text-[14px] font-mono"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center mr-4">
          <img
            //src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-4 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 font-mono text-[14px]">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-white" : "text-teal-400"
                  } hover:text-white cursor-pointer`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>
                    <span className="text-teal-400">
                      {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}
                    </span>{" "}
                    {nav.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 border border-teal-400 rounded hover:bg-teal-400 hover:text-[#0a192f] transition duration-200"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
