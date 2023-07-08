import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project1 from '../assets/projects/knox-chat.gif'
import project2 from '../assets/projects/flash-chat.gif'
import project3 from '../assets/projects/election.gif'
import project4 from '../assets/projects/bitmoji.gif'
import project5 from '../assets/projects/getflix.gif'
import project6 from '../assets/projects/taxi.gif'
import project7 from '../assets/projects/stellar.gif'
import project8 from '../assets/projects/fruit.gif'
import project9 from '../assets/projects/sorting.gif'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, imgsrc, description, link }) => {
  const overlayStyles = `absolute h-full w-full bg-red text-white opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectLink = link.toString()

  return (
    <motion.div variants={projectVariant} className="relative">
      <div onClick={(projectLink) => window.open({projectLink}, "_blank", 'noopener,noreferrer')} className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7" >
          {description}
        </p>
      </div>

      <div className="contain justify-center align-">
      <img className="bg-contain bg-center m-auto p-auto" src={imgsrc} autopPlay loop alt={title} />
      </div>
    </motion.div>
  );
};

const Projects = () => {

  const projectMap = [
    {
      "name": "Knox Chat",
      "description": "Knox Chat",
      link : "https://github.com/prasann-28/knox-chat",
      img : project1

    },
    {
      name: "Flash Chat",
      description: "Flash Chat",
      link: "https://github.com/prasann-28/flash-chat",
      img: project2

    },
    {
      name: "SecVote",
      description: "Decentralized Election",
      link: "https://github.com/prasann-28/flash-chat",
      img: project3

    },
    {
      name: "Emoji GAN",
      description: "Decentralized Election",
      link: "https://github.com/prasann-28/flash-chat",
      img: project4

    },
    {
      name: "GetFlix",
      description: "GetFlix",
      link: "https://github.com/prasann-28/flash-chat",
      img: project5

    },
    {
      name: "Taxi Fare Price Prediction",
      description: "GetFlix",
      link: "https://github.com/prasann-28/flash-chat",
      img: project6

    },
    {
      name: "Stellar Object Classiification",
      description: "Sorting Visualizer",
      link: "https://github.com/prasann-28/flash-chat",
      img: project7

    },
    {
      name: "Fruit Classification",
      description: "Sorting Visualizer",
      link: "https://github.com/prasann-28/flash-chat",
      img: project8

    },
    {
      name: "Sorting Visualizer",
      description: "Sorting Visualizer",
      link: "https://github.com/prasann-28/flash-chat",
      img: project9

    }
    
    
  ]

  return (
    <section id="projects" className="pt-32 pb-32">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-red text-4xl">
            PROJECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          {/* <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div> */}
          {projectMap.map((project,idx) => (
            <Project key={idx} title={project.name} description={project.description} link={project.link} imgsrc={project.img} />
          ))}
          
          
          {/* <Project title={projectMap['project2'].name} description={projectMap['project2'].description} link={projectMap['project2'].link} imgsrc={projectMap['project2'].img} /> */}

          {/* ROW 2 */}
          {/* <Project title="Project 3" /> */}
          {/* <Project title="Project 4" /> */}
          {/* <Project title="Project 5" /> */}

          {/* ROW 3 */}
          {/* <Project title="Project 6" />
          <Project title="Project 7" />
          <Project title="Project 8" />
          <Project title="Project 9" /> */}
          {/* <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div> */}
        </motion.div>
      </div>
      <motion.div
        className="md:w-2/5 mx-auto pt-10 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <a href="https://github.com/prasann-28" target="_blank" className=" font-playfair font-bold">
          And others...
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;