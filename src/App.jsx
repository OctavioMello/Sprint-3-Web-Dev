import "./index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Problem from "./components/Problem/Problem";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Demo from "./components/Demo/Demo";
import Perception from "./components/Perception/Perception";
import Experience from "./components/Experience";
import MVP from "./components/MVP/MVP";
import Autonomy from "./components/Autonomy";
import About from "./components/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="vaa">

            <Header />

            <Hero />

            <Problem />

            <HowItWorks />

            <Perception />

            <Demo />

            <MVP />

      </div>
      <Experience />
      <Autonomy />
      <About />
      <Footer />
    </>
  );
}

export default App;