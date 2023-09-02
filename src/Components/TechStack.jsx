import React from "react";

const techStack = [
  {
    id: 1,
    name: "Javascript",
    image: "https://www.code2inspire.com/icons/jsIcon.png",
    refrenceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 2,
    name: "React",
    image:
      "https://w7.pngwing.com/pngs/186/205/png-transparent-react-native-react-logos-brands-icon.png",
    refrenceLink: "https://react.dev/learn",
  },
  {
    id: 3,
    name: "TailwindCss",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-tailwind-css-5285308-4406745.png",
    refrenceLink: "https://tailwindcss.com/",
  },
  {
    id: 4,
    name: "Redux",
    image:
      "https://miro.medium.com/v2/resize:fit:375/1*2YG993b8WrHwvmAe7WckAA.png",
    refrenceLink: "https://redux.js.org/",
  },
  {
    id: 5,
    name: "Nodejs",
    image: "https://www.svgrepo.com/show/354118/nodejs.svg",
    refrenceLink: "https://nodejs.org/en/docs",
  },
  {
    id: 6,
    name: "Expressjs",
    image:
      "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
    refrenceLink: "https://expressjs.com/",
  },
  {
    id: 7,
    name: "EJS",
    image:
      "https://www.kindpng.com/picc/m/463-4639889_logo-ejs-hd-png-download.png",
    refrenceLink: "https://ejs.co/",
  },
  {
    id: 8,
    name: "MongoDb",
    image:
      "data:image/png;base64,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",
    refrenceLink: "https://www.mongodb.com/docs/",
  },
  {
    id: 9,
    name: "Nextjs",
    image:
      "https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png",
    refrenceLink: "https://nextjs.org/docs",
  },
  {
    id: 10,
    name: "Github",
    image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    refrenceLink: "https://github.com/",
  },
];

const TechStack = () => {
  return (
    <div className="flex flex-row flex-wrap gap-6 justify-center cursor-pointer mt-10 lg:gap-12 lg:mt-32">
      {techStack.map((items, index) => (
        <div key={index}>
          <a href={items.refrenceLink} target="_blank" rel="noopener noreferrer">
            <img
              src={items.image}
              className="object-contain w-16 h-16 rounded-full
           hover:shadow-blue-400 shadow-lg transition ease-in-out delay-200  hover:-translate-y-1 hover:scale-110 duration-700"
              alt={items.name}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
