import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { AiFillMail } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import {Link} from 'react-router-dom';

function Footer() {
  function scrol(){
    window.scrollTo(0,0);

  }
  return (<>
<footer className=" backcolor p-5 mu clla">
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
        <h6 className='ms-2'><Link to='/' className='dk' onClick={scrol}> Home</Link></h6>
        <h6 className='ms-2'><Link to='/About' className='dk' onClick={scrol}>About</Link></h6>
        <h6 className='ms-2'><Link to='/Gallery' className='dk' onClick={scrol}>Gallery</Link></h6>
        <h6 className='ms-2'><Link to='/Services' className='dk' onClick={scrol}>Services</Link></h6>
        <h6 className='ms-2'><Link to='/Contact' className='dk' onClick={scrol}>Contact</Link></h6></div></div>
        <div className='col'><h1>Follow us</h1>
        <h2><a href="https://mobile.twitter.com/Dazzlingsevents" className='dk'><BsTwitter /> </a><a href="https://www.instagram.com/dazzlingsevent/?igshid=YmMyMTA2M2Y%3D" className='dk'><AiFillInstagram /></a><a href='https://www.youtube.com/channel/UCjJJLYqgo2n2glfNDBmdztw' className='dk'>  <BsYoutube /></a></h2> </div>
        </div>        </div>


    </footer>  
    
    <footer className=" backcolor p-5 mu d-lg-none">
    <div className='container'>
<div className='row'><div className='col-12'>
<h1 className='fff'><FaMapMarkerAlt className='ic' />Find us</h1>1st, SBI ATM, Near, 20,Dazzling Events, Sarvabhouma Nagar, Chikkalasandra, Bengaluru, Karnataka 560061</div>
<div className='col-12 text-center'><h1 className='fff mt-2 text-center mb-2'><IoCall className='ici'/>Call us</h1>+91 998 0100 843 <br></br><br></br></div><div className='col-12'><h1 className='fff'><AiFillMail className='iic'/>Mail us</h1>dazzlingseventmanagement@gmail.com</div></div>
        <div className='row text-center'><h1 className='text-center mt-3'>Follow us </h1>
        <div className='col'><h1><a href="https://mobile.twitter.com/Dazzlingsevents" className='dk'><BsTwitter /> </a></h1></div>
        <div className='col'><h1><a href="https://www.instagram.com/dazzlingsevent/?igshid=YmMyMTA2M2Y%3D"className='dk'><AiFillInstagram /></a></h1></div>
        <div className='col'><h1><a href='https://www.youtube.com/channel/UCjJJLYqgo2n2glfNDBmdztw' className='dk'>  <BsYoutube /></a></h1></div>
        </div>
         </div>

      

    </footer>  
    
    
     <div className='row bcolor p-1'>
            <div className='col text-center'>
            Dazzling event © 2022 All rights reserved
            </div>
        </div></> )
}

export default Footer