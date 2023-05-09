import React from 'react'
import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import skills from '../assets/skills-image.png'
import testdoc from '../assets/certificates/accenture virtual internship.pdf'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const importCertificates = (r) => {
    return r.keys().map(r);
  }

  const images = importCertificates(require.context('../assets/certificates', false, /\.(png|pdf)$/));
  return (
    <section id="skills" className="pt-5 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <p className='font-playfair font-semibold text-4xl mb-5'>
                MY <span className='text-red'>SKILLS</span>
            </p>
            <LineGradient width='w-1/3'></LineGradient>
            <p className='mt-10 mb-7'>
            With my previous learning and practice, I have acquired a few skills in 
            <ul className='pl-5'>
              <li>Web Development</li>
              <li>Machine Learning and AI</li>
              <li>Mobile Application Development</li>
            </ul>
            and a few more . While I am eager to learn more in these, I am keen to learn new stuff. Below are a few of what I have used the most

            </p>
            </motion.div>
            <div className='mt-16 md:md-0'>
                {isAboveMediumScreens ? 
                (
                    <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >

      <Carousel autoPlay dynamicHeight infiniteLoop duration={30} showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} width={'45em'}>
              {images.map( image => 
                (
                
                  <img
                  alt="skills"
                  height={'30em'}
                  className="z-10 bg-white"
                  src={image}
                  />))}
              </Carousel>
              </div>
              
                ) : 
                (   
                  <Carousel autoPlay dynamicHeight infiniteLoop duration={30} showArrows={false} showIndicators={false} showStatus={false} showThumbs={false}>
                    {images.map( image => 
                (
                  <img
                  alt="skills"
                  className="z-10 bg-white"
                  src={image}
                  />))}
                  </Carousel>                
                )}

            </div>
            </div>
            {/* Skills */}

            <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-opensans font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Languages
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Python, C/C++, HTML, CSS, Javascript, Typescript, SQL, MongoDB, Dart, R, Java, Solidity...
          </p>
        </motion.div>
        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-opensans font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Frameworks and Packages
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            React, Flutter, Scikit-learn, Tensorflow, Numpy, Pandas, Matplotlib, Seaborn, Flask, Django, PySpark, Truffle...
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-opensans font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Miscellaneous
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Tableau, AWS, GCP, Git/Github, Docker...
          </p>
        </motion.div>
        {/* <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-opensans font-semibold text-5xl">04</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Certifications
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-black absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Tableau, AWS, GCP, Git/Github, Docker...
          </p>
        </motion.div> */}
        </div>
             </section>
  )
}

export default Skills