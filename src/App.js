import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import LeftContent from "./Components/LeftContent";
import Project from "./Components/Project";
import RightContent from "./Components/RightContent";
import TechStack from "./Components/TechStack";


function App() {
  return (
    <>
      <Header />
      <LeftContent />
      <div className="ml-10 mr-10 md:ml-28 md:mr-28 lg:ml-36 lg:mr-36">
        <Home/>
        <About />
        <TechStack/>
        <Project />
        <Footer />
      </div>
      <RightContent />

    </>
  );
}

export default App;
