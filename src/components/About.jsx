import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

console.log(services);

const ServicesCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />

        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Greetings, I'm Khateeb, a dynamic full-stack web developer with a deep-rooted passion for coding and a knack for competitive programming. My journey in web development has equipped me with expertise in both front-end and back-end technologies, enabling me to create seamless, user-centric web applications that blend form and function seamlessly. Beyond web development, I'm an avid competitor in coding challenges, which has honed my problem-solving prowess and code optimization skills. My versatile skill set allows me to tackle complex challenges, staying at the forefront of industry trends and best practices to deliver cutting-edge, efficient, and scalable solutions. I'm dedicated to exceeding client expectations with every project
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServicesCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about");