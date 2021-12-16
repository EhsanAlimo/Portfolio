import React from "react";

import "./projects.css";
import { projectsData } from "../../assets/data/data";
import Project from "./Project";

function Projects({ projectsRef }) {
  return (
    <div className="projects__main__container" ref={projectsRef}>
      <div className="projects__holder">
        {projectsData.map((project) => (
          <Project
            url={project.url}
            name={project.name}
            image={project.image}
            techs={project.techs}
            description={project.description}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
