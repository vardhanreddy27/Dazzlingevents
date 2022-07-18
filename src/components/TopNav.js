import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { RiYoutubeLine } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';

function TopNav() {
  return (
    <div className='row cll'>
   <div className='col'><div className="container ali"><FiPhoneCall  /> +91 9980100843  |  <FiMail /> dazzlingseventmanagement@gmail.com </div></div> 
    <div className='col text-center s'>MAKE EVERY EVENT MEMORABLE</div> 
    <div className='col text-end '><div className="container"><a href="https://www.instagram.com/dazzlingsevent/?igshid=YmMyMTA2M2Y%3D"><BsInstagram  size={16} className="m-1 iconcolor"/></a> <a href='https://www.facebook.com/ncdazzlingeventplanner/' ><FiFacebook className="m-1 iconcolor" size={16} /></a>  <a href='#'> <RiYoutubeLine  className="m-1 iconcolor" size={20} /></a></div></div> 
      </div>
  )
}

export default TopNav