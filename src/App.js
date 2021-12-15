import About from "./components/about/About";
import Navbar from "./components/Navbar/Navbar";
import Particle from "./components/Particle";
import Projects from "./components/works/Projects";
import { useRef } from "react";
import Email from "./components/contact/Email";

function App() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const emailRef = useRef(null);

  const scrolToWork = (view) => {
    switch (view) {
      case "projects":
        projectsRef.current.scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "about":
        aboutRef.current.scrollIntoView({
          behavior: "smooth",
        });
        break;
      case "email":
        emailRef.current.scrollIntoView({
          behavior: "smooth",
        });
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <Navbar scrolToWork={scrolToWork} />
      <About aboutRef={aboutRef} />
      <Projects projectsRef={projectsRef} />
      {/* <Particle /> */}
      <Email emailRef={emailRef} />
    </div>
  );
}

export default App;
