import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { AiFillMail } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';

function Footer() {
  return (<>
<footer className=" backcolor p-5 mu">
    <div className='container'>
       <div className='row'>
       <div className='col'><h1><FaMapMarkerAlt className='ic' />Find us</h1>1st, SBI ATM, Near, 20,Dazzling Events, Sarvabhouma Nagar, Chikkalasandra, Bengaluru, Karnataka 560061
</div>
       <div className='col'>   <div className='ma'><h1><IoCall className='ici'/>Call us</h1>+91 998 0100 843 </div></div>
       <div className='col'><h1><AiFillMail className='iic'/>Mail us</h1>dazzlingseventmanagement@gmail.com</div>      
        </div>        <hr />
        <div className='row'>
        <div className='col'><h1 className='ll'>Dazzling events</h1>We are Bangalore’s biggest event management service providers. We provide high quality decoration and other event related services such as photography, make up, entertainment, mehendi, venue etc. </div>
        <div className='col'>        <div className='maa'>
<h1>Useful Links</h1>
        <h6 className='ms-2'>Home</h6>
        <h6 className='ms-2'>About</h6>
        <h6 className='ms-2'>Gallery</h6>
        <h6 className='ms-2'>Services</h6>
        <h6 className='ms-2'>Contact</h6></div></div>
        <div className='col'><h1>Follow us</h1>
        <h2><BsFacebook /> <AiFillInstagram /> <BsYoutube /></h2> </div>
        </div>        </div>

      

    </footer>   <div className='row bcolor p-1'>
            <div className='col text-center'>
            Dazzling event © 2022 All rights reserved
            </div>
        </div></> )
}

export default Footer