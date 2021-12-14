import React from "react";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import GitHubIcon from "@mui/icons-material/GitHub";
import codebook from "../../assets/images/CodeBook.png";
import "./projects.css";
import { projectsData } from "../../assets/data/data";
import Project from "./Project";

function Projects() {
  return (
    <div className="projects__main__container">
      <div className="projects__holder">
        {projectsData.map((project) => (
          <Project
            url={project.url}
            name={project.name}
            image={project.image}
            techs={project.techs}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
