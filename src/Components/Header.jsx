import React from "react";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
const Header = () => {
  return (
    <div className="text-black shadow-lg hover:shadow-blue-200 h-16 p-4 
    flex flex-row justify-between">
      <div className="cursor-pointer text-blue-500 font-bold font-mono"> Logo </div>
      <div className="font-semibold invisible md:visible flex gap-8">
        <a className="hover:text-blue-500" href="#home">Home</a>
        <a className="hover:text-blue-500" href="#about">About</a>
        <a className="hover:text-blue-500" href="#project">Project</a>
        <a className="hover:text-blue-500" href="#contact">Contact</a>
      </div>
      <div className="md:hidden"> 
        <DensityMediumIcon/>
      </div>
    </div>
  );
};

export default Header;
