import React from "react";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-col">
      <motion.div variants={textVariant()} className="my-5 md:my-10">
        <p className={styles.sectionSubText}>WHAT I KNOW</p>
        <h2 className={styles.sectionHeadText}>My Tech Stacks.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <motion.div variants={fadeIn("right", "spring", 0.1 * index, 0.75)} key={technology.name}>
            <div options={{
              max: 45,
              scale: 1,
              speed: 450
            }} className="h-[150px] w-[100px] flex flex-col shadow-2xl">
              <div className="h-2/3 bg-gradient-to-t from-gray-900 to-gray-600 pt-3 px-2 rounded-t-2xl flex items-center justify-center">
                <img
                  src={technology.icon}
                  alt={technology.icon}
                  width={80}
                />
              </div>
              <div className="h-1/3 bg-gradient-to-t from-gray-600 to-gray-900 rounded-b-2xl flex justify-center items-center">
                <p className="text-center">{technology.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");