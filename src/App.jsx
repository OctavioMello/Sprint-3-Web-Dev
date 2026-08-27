import "./index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Problem from "./components/Problem/Problem";
import HowItWorks from "./components/HowItWorks";
import Perception from "./components/Perception";
import Experience from "./components/Experience";
import MVP from "./components/MVP";
import Autonomy from "./components/Autonomy";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="vaa">

            <Header />

            <Hero />

            <Problem />

      </div>
      <HowItWorks />
      <Perception />
      <Experience />
      <MVP />
      <Autonomy />
      <About />
      <Footer />
    </>
  );
}

export default App;