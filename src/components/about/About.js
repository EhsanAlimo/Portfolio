import React, { useEffect, useState } from "react";
import Typist from "react-typist";
import Particle from "../Particle";

import "./about.css";

function About({ aboutRef }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(100);
    }, 3000);
  }, []);
  return (
    <div
      style={{ position: "relative", width: "100vw", height: "100vh" }}
      ref={aboutRef}
    >
      <div className="main">
        <div style={{ opacity: opacity }} className="image-div">
          <img
            className="headshot_about"
            src="https://www.linkpicture.com/q/IMG_21D74AF90805-1.jpeg"
            alt=""
          />
        </div>

        <Typist>
          <p className="fists-sentence">
            {" "}
            Hello there! My name is Ehsan Alimo from Sydney
          </p>
          <p className="second-sentence">
            A Full-Stack Web Developer who would love to make this world a
            better place to live for all living creatures. I have ...
          </p>
          <Typist.Backspace count={11} delay={200} />
          <p className="third-sentence">
            I have a strong passion for web development and design which
            influences my professional work, as well as my side projects.
          </p>
        </Typist>
      </div>
      {/* <Particle /> */}
    </div>
  );
}

export default About;
