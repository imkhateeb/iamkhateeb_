import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { LinkSimple } from "@phosphor-icons/react";

const ExperienceCard = ({ experience }) => {
  console.log(experience);

  const handleLinkClick = (e) => {
    e.preventDefault();
    window.open(experience.company_url, "_blank");
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full bg-white rounded-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain cover rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <div
          onClick={handleLinkClick}
          className="text-secondary text-[16px] font-semibold flex gap-1 items-center cursor-pointer"
          style={{ margin: 0 }}
        >
          {experience.company_name}
          <LinkSimple size={16} />
        </div>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>

      <div className="flex gap-2 flex-wrap mt-5">
        {experience.technologies.map((tech, idx) => (
          <span
            key={`experience-tech-${idx}`}
            className="text-white-100 text-[14px] bg-transparent py-1 px-2 border rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Am I Having Industry Experience?
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "education");
