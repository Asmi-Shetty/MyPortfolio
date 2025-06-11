import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";



import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  SkillsetSection,
  Education,
  StarsCanvas,
} from "./components";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <BrowserRouter>
          <div className="relative z-0">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <section id="hero">
                <Hero />
              </section>
            </div>

            <section id="about">
              <About />
            </section>

            <section id="experience">
              <Experience />
            </section>

            <section id="projects">
              <Works />
            </section>

            <section id="skills">
              <SkillsetSection />
            </section>

            <section id="contact" className="relative z-0">
              <Contact />
              <StarsCanvas />
            </section>
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
