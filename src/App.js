import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import DotGroup from "./scenes/DotGroup";
import Skills from "./scenes/Skills";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import About from "./scenes/About";


function App() {
  const [selectedPage, setselectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setselectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setselectedPage={setselectedPage}
      />
      <div className="w-5/6 mx-auto mb-10 md:h-full">
        {isDesktop && (
          <DotGroup 
          
            selectedPage={selectedPage}
            setselectedPage={setselectedPage}
          />
        )}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setselectedPage("home")}
        >
          <Landing setselectedPage={setselectedPage} />
        </motion.div>
      </div>
      {/* <LineGradient /> */}
      {/* [url('./assets/about-bg.jpg')] */}
      <div className="bg-gradient-bluerain w-full md:h-full">
      <div className="w-5/6 mx-auto mb-10 md:h-fit-content">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setselectedPage("about")}
        >
          <About />
        </motion.div>
      </div>
      </div>
      {/* <LineGradient /> */}

      
      <div className="w-5/6 mx-auto md:h-fit-content ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setselectedPage("skills")}
        >
          <Skills />
        </motion.div>
      </div>
      <LineGradient />


      <div className="w-5/6 mx-auto md:h-fit-content">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setselectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-fit-content">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setselectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;