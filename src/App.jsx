import "./index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Problem from "./components/Problem/Problem";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Demo from "./components/Demo/Demo";
import Journey from "./components/Journey/Journey"
import Perception from "./components/Perception/Perception";
import MVP from "./components/MVP/MVP";
import Autonomy from "./components/Autonomy/Autonomy";
import Differentials from "./components/Differentials/Differentials";
import Evolution from "./components/Evolution/Evolution"
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

            <Journey />

            <MVP />

            <Autonomy />

            <Differentials />

            <Evolution />

            <Footer />

      </div>
    </>
  );
}

export default App;