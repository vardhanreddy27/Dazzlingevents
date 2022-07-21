import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';
import { RiYoutubeLine } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';

function TopNav() {
  return (
    <div className='row cll'>
   <div className='col'><div className="container ali"><FiPhoneCall  /> +91 9980100843  |  <FiMail /> dazzlingseventmanagement@gmail.com </div></div> 
    <div className='col text-center s'>MAKE EVERY EVENT MEMORABLE</div> 
    <div className='col text-end '><div className="container"><a href="https://www.instagram.com/dazzlingsevent/?igshid=YmMyMTA2M2Y%3D"><BsInstagram  size={16} className="m-1 iconcolor"/></a> <a href="https://mobile.twitter.com/Dazzlingsevents" className='dk'><BsTwitter /> </a>  <a href='https://www.youtube.com/channel/UCjJJLYqgo2n2glfNDBmdztw'> <RiYoutubeLine  className="m-1 iconcolor" size={20} /></a></div></div> 
      </div>
  )
}

export default TopNav