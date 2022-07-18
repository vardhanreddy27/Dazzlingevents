import React, { useState } from "react";
import CountUp, { useCountUp } from "react-countup";
import { AiFillHeart } from 'react-icons/ai';
import { AiFillNotification } from 'react-icons/ai';
import { BsFillShieldFill } from 'react-icons/bs';
import Ticker from "./Ticker";

export default function Counter() {
    
     return (
    <div className='backcolor'>
        <div className='container text-center p-5'>
            <div className='row pb-5'>
                <h1 className='p-3 pb-5 white' data-aos="fade-up">CUSTOMER SATISFACTION</h1>
                <div className='col' data-aos="fade-up"  ><div className="card">
  <div className="card-body" >
    <h2 className="card-subtitle mb-2 shield"><BsFillShieldFill /></h2>
    <h2><Ticker className="count" end={8} suffix="+" /></h2>
    <p className="card-text">Years Of Experience</p>
  
  </div>
</div></div>  <div className='col'><div className="card"data-aos="fade-up" >
  <div className="card-body" >
    <h2 className="card-subtitle mb-2 heart"><AiFillHeart /></h2>
    <h2><Ticker className="count" duration={4} end={326} suffix="+" /></h2>

    <p className="card-text">Satisfied Clients by Results</p>
  
  </div>
</div></div>

<div className='col'><div className="card"data-aos="fade-up">
  <div className="card-body" >
    <h2 className="card-subtitle mb-2 notification"><AiFillNotification /></h2>
    <h2><Ticker className="count" duration={5} end={342} suffix="+" /></h2>

    <p className="card-text">Customers Recommend Us</p>
  
  </div>
</div></div>            </div>
        </div>

    </div>
  )
}

