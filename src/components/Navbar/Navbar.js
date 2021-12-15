import React from "react";
import "./navbar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import ContactsIcon from "@mui/icons-material/Contacts";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
function Navbar({ scrolToWork }) {
  return (
    <div className="navbar">
      <div className="page-nav-container">
        <div className="headshot">
          <img
            src="https://thethirdwave.co/app/themes/ttw/assets/img/third-wave-logo-color.svg"
            alt="Ehsan Alimo"
          />
        </div>
        <div className="middle__icons">
          <div className="home" onClick={() => scrolToWork("about")}>
            <p>About</p>
            <div className="home__icon">
              <HomeIcon />
            </div>
          </div>
          <div className="home" onClick={() => scrolToWork("projects")}>
            <p>Projects</p>
            <div className="project__icon">
              <WorkIcon />
            </div>
          </div>
          <div className="home" onClick={() => scrolToWork("email")}>
            <p>Contact</p>
            <div className="contact__icon">
              <ContactsIcon />
            </div>
          </div>
          <div className="home">
            <p>Resume</p>
            <div className="resume__icon">
              <DocumentScannerIcon />
            </div>
          </div>
        </div>
        {/* <div className="social__media">
          {/* <GitHubIcon /> */}
        {/* <LinkedInIcon /> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Navbar;
