import React, { useState } from "react";
import SortIcon from '@mui/icons-material/Sort';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
 

 

const links = [
  { id: 1, title: "Homepage", url: "#home" },
  { id: 2, title: "About", url: "#about" },
  { id: 3, title: "Project", url: "#project" },
  { id: 4, title: "Contact", url: "#contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" ">
      {open ? (<CloseIcon  onClick={() => setOpen(false)} className="cursor-pointer" height={20} width={30}/>) 
      : 
      (<SortIcon onClick={() => setOpen(true)} className="cursor-pointer" height={20} width={30}/>)}

      {open && <div className="bg-black w-full z-10 text-2xl flex gap-14 flex-col items-center justify-center absolute left-0 h-screen">
        {links.map((link) => (<a onClick={() => setOpen(false)} key={link.id} href={link.url}>
            {link.title}
          </a>
        ))}
       <div className='flex flex-row justify-center gap-10 text-blue-500 text-5xl'> 
        <a className="hover:text-white" href='https://github.com/Danishmalik1997' target='_blank' rel='noreferrer' > <GitHubIcon fontSize='large'/> </a>
        <a className="hover:text-white" href='https://www.instagram.com/danish.malik0802/' target='_blank' rel='noreferrer' > <InstagramIcon fontSize='large'/> </a>
        <a className="hover:text-white" href='https://www.linkedin.com/in/danishmalikk/' target='_blank' rel='noreferrer' > <LinkedInIcon fontSize='large'/> </a>
        <a className="hover:text-white" href='https://twitter.com/DanishMalik0802?t=mg-d0zUplJ0LjuCdjacUKA&s=08' target='_blank' rel='noreferrer' > <TwitterIcon fontSize='large'/> </a>
      </div>
      </div>} 
    </div>
  );
};

export default Menu;
