import React from 'react'

function Getintouch() {
  return (
    
<div id="carouselExample" className="carousel backcolor slide " data-bs-ride="carousel" data-bs-pause="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active " data-bs-interval="7000">
      <div className="carousel-caption t d-md-block">
        <h1 data-aos="zoom-in" className='fong pb-2'>Amazing decor team in Bangalore. satisfying service providers !!
</h1>
        <p data-aos="zoom-in"className='subtitle'>Harini V N</p>
        <img src='./v1.png' className='size'alt='dazzling event'></img>
 </div>
    </div>
    <div className="carousel-item" data-bs-interval="7000">
      <div className="carousel-caption d-md-block">
        <h1 data-aos="zoom-in" className='fong pb-2 '>One of the best team with variety of collection for party decorations
</h1>
        <p data-aos="zoom-in" className='subtitle' >Shreyanka S</p>
        <img src='./r2.png' className='size'alt='dazzling event'></img>

      </div>
    </div>
    <div className="carousel-item" data-bs-interval="7000">
      <div className="carousel-caption d-md-block">
        <h1 data-aos="zoom-in" className='fong pb-2'>Best team to organise events.!! They are just dazzling </h1>
        <p data-aos="zoom-in" className='subtitle'>Vishnu Vardhan Reddy </p>
        <img src='./r3.png' className='size'alt='dazzling event'></img>


      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
  )
}

export default Getintouch