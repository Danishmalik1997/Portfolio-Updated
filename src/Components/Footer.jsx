import React from "react";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const emailAddress = 'dev_danish1997@hotmail.com'
  const phoneNumber = '8869060519'
  return (
    <section id="contact" className="flex justify-center text-center p-6">
      <div className="">
         <div className="mb-6">
         <h1 className="text-4xl mb-8"> Get in Touch! </h1>
        <p>
          I'm currently looking for opportunities. Whether its a Full-Time Job  or a Freelance work. <br/>
          Send me a message, I'll try to get back to you as
          soon as possible.
        </p>
        </div>
        <div className= "p-2 gap-6 flex flex-row justify-center items-center ">
            <button className="bg-black py-1 px-3 text-white rounded-sm "> <LinkedInIcon/> <a href="https://www.linkedin.com/in/danishmalikk/" target="_blank" rel="noreferrer"> LinkedIn </a> </button>
            <Button color="primary"  variant="outlined"> <EmailIcon /> <a href={`mailto:${emailAddress}`} target='_blank' rel='noreferrer'> Say, Hi !  </a>  </Button>
          <Button color="success" variant="outlined"> <WhatsAppIcon /> <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noreferrer">  Say Hello </a> </Button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
