import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const LeftContent = () => {
  return (
    <div className= 'hidden md:flex fixed left-10 bottom-8' >
      <div className='flex flex-col justify-center gap-4 hover:'> 
        <a className="hover:text-blue-500" href='https://github.com/Danishmalik1997' > <GitHubIcon/> </a>
        <a className="hover:text-blue-500" href='https://www.instagram.com/danish.malik0802/' > <InstagramIcon/> </a>
        <a className="hover:text-blue-500" href='https://www.linkedin.com/in/danishmalikk/' > <LinkedInIcon/> </a>
        <a className="hover:text-blue-500" href='https://twitter.com/DanishMalik0802?t=mg-d0zUplJ0LjuCdjacUKA&s=08' > <TwitterIcon/> </a>
      </div>
    </div>
  )
}

export default LeftContent