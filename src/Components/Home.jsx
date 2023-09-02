import React from "react";

import WorkingMan from "../images/man_working.jpg";

const Home = () => {
  return (
    <div id="home" className="mt-8 flex md:h-[calc(86vh-4rem)] flex-col gap-6 items-center text-center md:flex-row lg:justify-between lg:text-left ">
      <div className="font-mono flex-1">
        <p className="text-blue-500"> Hi, my name is </p>
        <h1 className="text-3xl lg:text-6xl font-extrabold">Danish Malik </h1>
        <p className="text-gray-700 font-extrabold text-xl lg:text-2xl"> I build things for the web. </p>
        <h1 className="text-sm text-gray-500 font-semibold">
          A passionate Front-end React Developer based in Noida, Delhi NCR. 📍<br/> 
          I enjoy working on every aspect of web development, from the user <br/>
          interface to the server logic.
        </h1>
      </div>
      <div className="shadow-xl md:flex-row   hover:shadow-blue-300 transition ease-in-out delay-200  hover:-translate-y-1 hover:scale-110 duration-700 ">
         <img src={WorkingMan} alt="" className="object-cover w-80 md:h-64 md:w-96" />
      </div>
    </div>
  );
};

export default Home;
