import React from "react";
import Rightmenu from './Rightmenu'
const Header = () => {
  return (
    <div className="text-gray-200 bg-black shadow-lg hover:shadow-white p-4 md:p-6 top-0 
    flex flex-row justify-between fixed w-full z-50">
      <div className="cursor-pointer text-blue-500 font-bold font-mono text-lg"> 
      <a className="hover:text-white" href="#home">Logo</a>
      </div>
      <div className="font-semibold text-blue-500 invisible md:visible flex gap-8">
        <a className="hover:text-white" href="#home">Home</a>
        <a className="hover:text-white" href="#about">About</a>
        <a className="hover:text-white" href="#project">Project</a>
        <a className="hover:text-white" href="#contact">Contact</a>
      </div>
      <div className="md:hidden"> 
        <Rightmenu/> 
      </div>
    </div>
  );
};

export default Header;
