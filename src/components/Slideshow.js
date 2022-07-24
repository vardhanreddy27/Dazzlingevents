import React from 'react'
import {NavLink,useLocation,Link} from 'react-router-dom'

function Slideshow() {
  return (
<div id="carouselExampleDark" className="carousel carousel-fade  slide " data-bs-ride="carousel" data-bs-pause="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active " data-bs-interval="7000">
      <img src="./test2.JPG" className="d-block mbs w-100" alt='dazzling event'/>
      <div className="carousel-caption d-md-block">
        <h1 data-aos="zoom-in" className='fon pb-2'>Event Organizers And Party Planners For All Celebrations</h1>
        <p data-aos="zoom-in"className='subtitle ss'>DAZZLING EVENTS All-In-One Services For Weddings, Engagements, Kids Birthday, Naming Ceremony, Baby Shower, Housewarming, Corporate And Other Kinds Of Events In Bangalore.</p>
        <Link to='/Contact'  className='pad'>  <button type="button" class="btn btn-primary btn-lg">GET IN TOUCH</button>
</Link>
 </div>
    </div>
    <div className="carousel-item" data-bs-interval="7000">
      <img src="./test.JPG" className="d-block mbs w-100" alt='dazzling event'/>
      <div className="carousel-caption d-md-block">
        <h1 data-aos="zoom-in" className='fon pb-2'>Creating celebrations is NOT a job for us, it’s our passion… </h1>
        <p data-aos="zoom-in" className='subtitle' >I simply love what I do!</p>
        <Link to='/Contact'  className='pad'>  <button type="button" class="btn btn-primary btn-lg">GET IN TOUCH</button>
</Link>

      </div>
    </div>
    <div className="carousel-item" data-bs-interval="7000">
      <img src="./low.JPG" className="d-block mbs w-100" alt='dazzling event'/>
      <div className="carousel-caption d-md-block">
        <h1 data-aos="zoom-in" className='fon pb-2'>Your perfect event starts here. </h1>
        <p data-aos="zoom-in" className='subtitle'>DAZZLING is a leading event and wedding planner – Bangalore </p>
        <Link to='/Contact'  className='pad'> <button type="button" class="btn btn-primary btn-lg">GET IN TOUCH</button>
</Link>

      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> )
}

export default Slideshow