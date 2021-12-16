import LinkIcon from "@mui/icons-material/Link";
import React from "react";
import OutboundIcon from "@mui/icons-material/Outbound";
import "animate.css";
import GitHubIcon from "@mui/icons-material/GitHub";

function Project({ url, name, image, techs, description, github }) {
  return (
    <div className="project">
      <div className="project__image">
        <img src={image} alt={name} />
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="img__link__container">
            <LinkIcon fontSize="large" className="img__link" />
          </div>
        </a>
      </div>
      <div className="project__description">
        <div className="project__description__title">{name}</div>
        {/* <div>{description}</div> */}
        <div>
          <div className="tech__label">Technology:</div>
          <div>{techs}</div>
        </div>
        <div className="project__description__link">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <span className="link__span">{name} Website </span>
            <OutboundIcon
              fontSize="small"
              className="project__description__linkIcon"
            />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="githubLink"
          >
            <span className="github__span">Learn more</span>
            <GitHubIcon
              fontSize="small"
              className="project__description__linkIcon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
