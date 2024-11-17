import React, { useState } from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { Link } from "react-router-dom";

import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed_link,
}) => {
  const [project, setProject] = useState("");

  const handleProject = (source_code) => {
    setProject(source_code);
    setTimeout(() => {
      setProject("");
    }, 5000);
  };

  return (
    <div key={index + name} className="bg-tertiary p-5 rounded-2xl w-full">
      <div className="relative w-full">
        {project === source_code_link && (
          <p className="py-5 px-4 absolute z-20 w-full rounded-md font-bold text-white bg-red-500 border-none animate-sentence-animation">
            This project is not yet deployed
          </p>
        )}

        <img
          src={image}
          alt="project_image"
          className="object-cover rounded-2xl mx-auto"
        />

        <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
          <Link
            to={source_code_link}
            target="_blank"
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </Link>
          {deployed_link !== "none" ? (
            <Link
              to={deployed_link}
              target="_blank"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaExternalLinkAlt />
            </Link>
          ) : (
            <div
              onClick={() => handleProject(source_code_link)}
              target="_blank"
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaExternalLinkAlt />
            </div>
          )}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="mt-20 flex flex-col gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
