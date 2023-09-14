import React, { useState } from "react";
import Close from '../images/close.png' 
import Open from '../images/open.png' 


const links = [
  { id: 1, title: "Homepage", url: "#home" },
  { id: 2, title: "About", url: "#about" },
  { id: 3, title: "Project", url: "#project" },
  { id: 4, title: "Contact", url: "#contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open ? (
        <img
          onClick={() => setOpen(false)}
          src={Close}
          className="cursor-pointer "
          height={20}
          width={30}
          alt=""
        />
      ) : (
        <img
          onClick={() => setOpen(true)}
          className="cursor-pointer"
          src={Open}
          height={20}
          width={30}
          alt=""
        />
      )}
      {open && <div className="bg-gray-300 mt-4 w-full z-10 text-xl flex gap-10 flex-col items-center justify-center absolute left-0 h-screen">
        {links.map((link) => (
          <a onClick={() => setOpen(false)} key={link.id} href={link.url}>
            {link.title}
          </a>
        ))}
       
      </div>} 
    </div>
  );
};

export default Menu;
