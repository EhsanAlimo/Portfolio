import React, { useState } from "react";
import "./navbar.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import ContactsIcon from "@mui/icons-material/Contacts";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import DownloadIcon from "@mui/icons-material/Download";
import { jsPDF } from "jspdf";
import resume from "../../assets/Resume/Ehsan-Alimo-Resume.pdf";
function Navbar({ scrolToWork }) {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navbar ? "navbar active" : "navbar"}>
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
          <a href={resume} target="_blank">
            <div className="home">
              <p>
                <DownloadIcon className="download__icon" />
              </p>
              <div className="resume__icon"> Resume</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
