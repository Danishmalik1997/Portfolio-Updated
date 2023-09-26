import React from "react";
import WorkingMan from "../images/man_working.jpg";
import Resume from "./Resume";

const Home = () => {
  return (
    <div id="home" className="mt-20 md:p-20 flex md:h-[calc(86vh-4rem)] flex-col gap-6 items-start text-center md:flex-row md:items-center lg:justify-items-end lg:text-justify ">
      <div className="font-mono flex-1 text-left gap-10">
        <p className="text-blue-500"> Hi, my name is </p>
        <h1 className="text-3xl text-gray-200 lg:text-6xl font-extrabold">Danish Malik </h1>
        <p className="text-gray-400 font-extrabold text-2xl lg:text-4xl"> I build things for the web. </p>
        <h1 className="text-md text-gray-200 mb-4 md:text-lg font-semibold">
          A passionate Front-end React Developer based in Noida,Delhi NCR.📍<br/> 
          I enjoy working on every aspect of web development, from the user <br/>
          interface to the server logic.
        </h1>
        <Resume/> 
      </div>
      <div className="shadow-xl hover:animate-pulse border-2 border-gray-400 rounded-md md:flex-row hover:shadow-blue-500 transition ease-in-out delay-200  hover:-translate-y-1 hover:scale-110 duration-700 ">
         <img src={WorkingMan} alt="" className="object-cover w-80 md:h-64 md:w-96" />
      </div>
    </div>
  );
};

export default Home;
