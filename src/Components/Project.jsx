import React from "react";
import Filmy from "../images/Fimyworld.png";
import Pizza from "../images/Pizza-sizza.png";

const Project = () => {
  return (
    <div id="project">
      <h1 className="mt-24 text-xl font-mono font-bold">
        Some Things I've Built
      </h1>
      <div
        className="mt-16 w-full rounded-md flex flex-col-reverse relative items-center bg-gray-200 shadow-xl shadow-slate-600]
      md:flex-row md:gap-3 mb-20 overflow-hidden md:overflow-visible md:p-3"
        style={{ opacity: 1 }}
      >
        <div className="w-1/2">
          <div
            className="mt-3 py-5 relative border-t-2 border-gray-300
        md:w-2/3 lg:w1/2 z-10 md:bg-transparent md:mt-5"
          >
            <h1 className="text-blue-500 text-sm">Featured Project! </h1>
            <h1 className=" mt-2 mb-2 font-bold font-mono text-xl">
              Filmy World
            </h1>
            <p className="text-slate-600">
              This application provides a feature-rich movies platform where
              users can register, invite friends, and Add movies into Database.
              It combines a user-friendly interactivity where user can review
              movies. This web-App have nice user-interface, robust front-end
              functionality like otp generate and authentication and
              authorization to create an immersive and interactive experience.
            </p>
            <div className="font-mono mt-4 font-bold flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <span>JavaScript</span>
              <span>React</span>
              <span>React-router-dom</span>
              <span>React-loader spinner</span>
              <span>React-Stars</span>
              <span>Sweet Alert</span>
              <span>Material UI</span>
              <span>Firebase</span>
              <span>Tailwind Css</span>
            </div>
          </div>
        </div>
        <div
          className="m-2 rounded-md md:absolute md:w-2/3 top-0 md:top-auto 
        left-0 md:left-auto md:right-0 flex items-start p-4 md:p-0 md:border-none md:bg-transparent "
        >
          <a
            href="https://filmy-world-sigma.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Filmy} alt="" />
          </a>
        </div>
      </div>
      <div
        className="mt-16 w-full rounded-md flex flex-col-reverse relative items-center bg-gray-200 shadow-xl shadow-slate-600]
      md:flex-row md:gap-3 mb-20 overflow-hidden md:overflow-visible md:p-3"
        style={{ opacity: 1 }}
      >
        <div className="w-1/2">
          <div
            className="mt-3 py-5 relative border-t-2 border-gray-300
        md:w-2/3 lg:w1/2 z-10 md:bg-transparent md:mt-5"
          >
            <h1 className="text-blue-500 text-sm">Featured Project! </h1>
            <h1 className=" mt-2 mb-2 font-bold font-mono text-xl">
              Pizza-Sizza
            </h1>
            <p className="text-slate-600">
              This application provides a feature-rich movies platform where
              users can register, invite friends, and Add movies into Database.
              It combines a user-friendly interactivity where user can review
              movies. This web-App have nice user-interface, robust front-end
              functionality like otp generate and authentication and
              authorization to create an immersive and interactive experience.
            </p>
            <div className="font-mono mt-4 font-bold flex flex-wrap gap-x-8 gap-y-4 text-sm">
              <span>JavaScript</span>
              <span>React</span>
              <span>Material UI</span>
              <span>Nextjs</span>
              <span>Tailwind Css</span>
            </div>
          </div>
        </div>
        <div
          className="m-2 rounded-md md:absolute md:w-2/3 top-0 md:top-auto 
        left-0 md:left-auto md:right-0 flex items-start p-4 md:p-0 md:border-none md:bg-transparent "
        >
          <a
            href=" https://pizza-sizza-delivery-app.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Pizza} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
