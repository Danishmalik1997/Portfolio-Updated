import React from "react";
import profile from '../images/web_image.jpeg'

const About = () => {
  return (
    <div id="about" className="font-mono p-4 mt-12 flex flex-col items-center gap-8 md:flex-row md:gap-32">
      <div className="flex-1" >
        <h1 className="text-xl font-semibold md:text-4xl"> About Me </h1>
        <p className="text-sm mt-6 text-gray-600">
          I am a passionate and self-taught Full-Stack Developer residing in
          Saharanpur, India. At the age of 25, I have dedicated myself to the
          exciting world of web development and have embarked on a journey of
          constant learning and growth. From a young age, I was fascinated by
          technology and its ability to shape the world around us. This
          curiosity led me to explore programming and web development, where I
          quickly discovered my knack for creating dynamic and user-friendly
          applications. As a Full-Stack Developer, I possess a diverse skill set
          that allows me to handle both the frontend and backend aspects of web
          development.
        </p>
      </div>
      <div className="flex-1">
        <img src={profile} className="object-cover w-64 h-64 rounded-full md:w-80 md:h-80
         hover:shadow-blue-400 shadow-lg transition ease-in-out delay-200  hover:-translate-y-1 hover:scale-110 duration-700" 
         alt=""></img>
      </div>
    </div>
  );
};

export default About;
