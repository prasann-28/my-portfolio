import React from 'react'
import LineGradient from '../components/LineGradient'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className='py-28'>
       <div className='flex justify-between'>
        <div className='sm:grid sm:grid-cols-2'>
          {/* Left Column */}
          <div className='sm:grid sm:grid-rows-2 gap-16'>
            {/* About Me */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{staggerChildren: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50},
              visible: { opacity: 1, x: 0 },
            }}
            className='font-playfair text-6xl text-white font-semibold'>
              About Me,
              <motion.div className='text-lg font-opensans font-normal py-10'>
                I am a student at the College of Engineering, Pune; enrolled in a Post Graduate Diploma course in Data Science and Artificial Intelligence.
              </motion.div>
            </motion.div>
            {/* Typewriter */}
            <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.4,duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className='text-2xl font-playfair font-semibold'>
              I am learning:
              <div className='text-4xl text-blue font-opensans py-10'>
              <Typewriter
              options={{
              strings: ['Software Development', 'Machine Learning', 'Website Development', "Mobile Application Development"],
              autoStart: true,
              loop: true,
              }}
              />
              </div>
            </motion.div>
          </div>
          {/* Right Column */}
           <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{staggerChildren: 0.2 }}
           variants={{
             hidden: { opacity: 0, x: 50, },
             visible: { opacity: 1, x: 0,},
           }}
           className='bg-deep-blue rounded-sm'>
            <h1 className='text-blue font-playfair text-3xl font-bold px-5 py-5'>Education</h1> 
            <LineGradient width='w-[94%] mx-auto'/>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2,duration: 0. }}
            variants={{
              hidden: { opacity: 0, x:50 },
              visible: { opacity: 1, x:0 },
            }}
            
            className='px-5 py-5 flex flex-row items-baseline justify-between'>
              <div className='flex-none h-3 w-3 rounded-full bg-blue'></div>
              <div className='grow px-5'>
                <div className='flex flex-col items-baseline'>
                <h1 className='font-playfair text-blue font-semibold text-xl ' >College of Engineering, Pune</h1>
                <ul className='text-xs font-opensans'>
                  <li className='text-red text-xs' >Post Graduate Diploma in <span className='text-white'> Data Science and Artificial Intelligence</span></li>

                </ul>
                </div>
                
              </div>
              <div className='flex-none font-opensans text-xs text-red font-bold'> 08/2022-07/2023</div>
            </motion.div>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.4,duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x:50 },
              visible: { opacity: 1, x:0 },
            }}
            
            className='px-5 py-5 flex flex-row items-baseline justify-between'>
              <div className='flex-none h-3 w-3 rounded-full bg-blue'></div>
              <div className='grow px-5'>
                <div className='flex flex-col items-baseline'>
                <h1 className='font-playfair text-blue font-semibold text-xl ' >Savitribai Phule Pune University</h1>
                <ul className='text-xs font-opensans'>
                <li className='text-red text-xs'>Bachelor of  <span className='text-white'>Computer</span> Engineering with Honors in Cybersecurity</li>
                  <li>CGPA: 9.49/10</li>
                  <li>Ranked 3rd in final year</li>

                </ul>
                </div>
                
              </div>
              <div className='flex-none font-opensans text-xs font-bold text-red'> 07/2018-07/2022</div>
            </motion.div>
            </motion.div>
        </div>

       </div>
    </section>
  )
}

export default About