import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const LeftContent = () => {
  return (
    <div className= 'hidden md:flex fixed left-10 bottom-8 ' >
      <div className='flex flex-col justify-center gap-4 text-blue-500 text-5xl'> 
        <a className="hover:text-white" href='https://github.com/Danishmalik1997' target='_blank' rel='noreferrer' > <GitHubIcon fontSize='large'/> </a>
        <a className="hover:text-white" href='https://www.instagram.com/danish.malik0802/' target='_blank' rel='noreferrer' > <InstagramIcon fontSize='large'/> </a>
        <a className="hover:text-white" href='https://www.linkedin.com/in/danishmalikk/' target='_blank' rel='noreferrer' > <LinkedInIcon fontSize='large'/> </a>
        <a className="hover:text-white" href='https://twitter.com/DanishMalik0802?t=mg-d0zUplJ0LjuCdjacUKA&s=08' target='_blank' rel='noreferrer' > <TwitterIcon fontSize='large'/> </a>
      </div>
    </div>
  )
}

export default LeftContent