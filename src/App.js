import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import LeftContent from "./Components/LeftContent";
import Project from "./Components/Project";
import RightContent from "./Components/RightContent";
import TechStack from "./Components/TechStack";
import { useScroll, motion } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="scroll-smooth">
      <motion.div style={{ scaleX: scrollYProgress }}
        className="border-4 border-blue-500 border-solid sticky m-0 p-0 top-0 start-0 z-10" />
      <Header />       
      <LeftContent />
      <RightContent />
      <div className="ml-10 mr-10 md:ml-28 md:mr-28 lg:ml-36 lg:mr-36">
        <Home />
        <About />
        <TechStack />
        <Project />
        <Footer />
      </div>
    </div>
  );
}

export default App;
