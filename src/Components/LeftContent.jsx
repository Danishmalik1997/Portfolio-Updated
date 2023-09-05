import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const LeftContent = () => {
  return (
    <div className= 'hidden md:flex fixed left-10 bottom-8' >
      <div className='flex flex-col justify-center gap-4 hover:'> 
        <a className="hover:text-blue-500" href='https://github.com/Danishmalik1997' target='_blank' rel='noreferrer' > <GitHubIcon/> </a>
        <a className="hover:text-blue-500" href='https://www.instagram.com/danish.malik0802/' target='_blank' rel='noreferrer' > <InstagramIcon/> </a>
        <a className="hover:text-blue-500" href='https://www.linkedin.com/in/danishmalikk/' target='_blank' rel='noreferrer' > <LinkedInIcon/> </a>
        <a className="hover:text-blue-500" href='https://twitter.com/DanishMalik0802?t=mg-d0zUplJ0LjuCdjacUKA&s=08' target='_blank' rel='noreferrer' > <TwitterIcon/> </a>
      </div>
    </div>
  )
}

export default LeftContent