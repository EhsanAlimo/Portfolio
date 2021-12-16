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

        <Typist avgTypingDelay={50} cursor={{ hideWhenDone: true }}>
          <p className="fists-sentence">
            {" "}
            Hello there! My name is Ehsan Alimo from Sydney
          </p>
          <p className="second-sentence ">
            A Full-Stack Web Developer who would love to make this world a
            better place to live for all living creatures. I have ...
          </p>

          <Typist.Backspace count={11} delay={200} />
          <p className="third-sentence">
            I have a strong passion for web development and design which
            influences my works, as well as my side projects.
          </p>
          <p className="third-sentence">
            As a junior software engineer I would like to join a team to improve
            and skills and be a useful member of a company. Please contact me if
            you you like this page and think that I can be a good fit for your
            team.
          </p>
        </Typist>
      </div>
      <Particle />
    </div>
  );
}

export default About;
