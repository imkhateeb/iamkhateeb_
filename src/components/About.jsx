import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServicesCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.25 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m Md Khateebur Rab, a Computer Science undergrad at IIIT Ranchi driven by curiosity and a love for building things that matter. My journey blends strong academic foundations with practical software engineering experience at fast-paced startups, where I’ve contributed to AI-powered tools and full-stack systems that improve real-world workflows. Beyond building products, I’m passionate about competitive programming, which sharpens my problem-solving mindset and attention to detail. I’m excited by the impact thoughtful engineering can create — saving time, scaling ideas, and shaping user experiences. What sets me apart is my energy, adaptability, and genuine enthusiasm to learn, collaborate, and turn complex challenges into meaningful solutions.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
