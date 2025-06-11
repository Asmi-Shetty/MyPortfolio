import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

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
    { id: "skills", title: "Skills" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-[#0a192f]" : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between">
        <div className="ml-4">
          <div className="w-10 h-10 border-2 border-teal-400 rounded-md flex items-center justify-center rotate-45">
            <span className="-rotate-45 text-teal-400 font-bold text-lg">A</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-8 mr-10">
          <ul className="flex flex-row items-center gap-6 font-mono text-[14px]">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className="text-teal-400 hover:text-white cursor-pointer transition-all">
                <ScrollLink
                  to={nav.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70} // Adjust if navbar overlaps section
                  activeClass="text-white"
                >
                  <span className="text-teal-400">
                    {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}
                  </span>{" "}
                  {nav.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <a
            href="https://drive.google.com/file/d/1RzIP-XfeATyHoq2Lp8ZO9JudDC7jCmzg/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-teal-400 text-white px-4 py-1 rounded hover:bg-teal-400 hover:text-[#0a192f] transition duration-200 text-[14px] font-mono"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center mr-4">
          {/* Add hamburger icon here */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-4 mx-4 my-2 min-w-[160px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 font-mono text-[14px]">
              {navLinks.map((nav, index) => (
                <li key={nav.id} className="text-teal-400 hover:text-white cursor-pointer">
                  <ScrollLink
                    to={nav.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    <span className="text-teal-400">
                      {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}
                    </span>{" "}
                    {nav.title}
                  </ScrollLink>
                </li>
              ))}
              <li>
                <a
                  href="https://drive.google.com/file/d/1RzIP-XfeATyHoq2Lp8ZO9JudDC7jCmzg/view?usp=drive_link"
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
