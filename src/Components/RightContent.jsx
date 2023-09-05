import React from 'react'

const RightContent = () => {
  const emailAddress = 'dev_danish1997@hotmail.com'; 
  return (
    <div className='text-white hidden md:flex p-4 fixed -right-20 bottom-28 rotate-90 bg-blue-400 hover:shadow-blue-300 hover:shadow-xl'>
      <a href={`mailto:${emailAddress}`} target='_blank' rel='noreferrer'> dev_danish1997@hotmail.com</a>
    </div>
  )
}

export default RightContent