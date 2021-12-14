import About from "./components/about/About";
import Navbar from "./components/Navbar/Navbar";
import Particle from "./components/Particle";
import Projects from "./components/works/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      {/* <Particle /> */}
    </div>
  );
}

export default App;
