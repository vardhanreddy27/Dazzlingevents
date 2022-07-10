import React from 'react'

function Slideshow() {
  return (
<div id="carouselExampleDark" className="carousel carousel-fade  slide " data-bs-ride="carousel" data-bs-pause="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active " data-bs-interval="50000">
      <img src="./low.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block">
        <h1 data-aos="zoom-in" className='fon pb-2'>Event Organizers And Party Planners For All Celebrations</h1>
        <p data-aos="zoom-in"className='subtitle'>DAZZLING EVENTS All-In-One Services For Weddings, Engagements, Kids Birthday, Naming Ceremony, Baby Shower, Housewarming, Corporate And Other Kinds Of Events In Bangalore.</p>
        <button type="button" class="btn btn-secondary btn-lg">CONNECT</button>
 </div>
    </div>
    <div className="carousel-item" data-bs-interval="50000">
      <img src="./test2.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block">
        <h1 data-aos="zoom-in" className='fon pb-2'>Creating celebrations is NOT a job for us, it’s our passion… </h1>
        <p data-aos="zoom-in" className='subtitle' >I simply love what I do!</p>
        <button type="button" class="btn btn-secondary btn-lg">CONNECT</button>

      </div>
    </div>
    <div className="carousel-item" data-bs-interval="50000">
      <img src="./test.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block">
        <h1 data-aos="zoom-in" className='fon pb-2'>Your perfect event starts here. </h1>
        <p data-aos="zoom-in" className='subtitle'>DARZZLING is a leading event and wedding planner – Bangalore </p>
        <button type="button" class="btn btn-secondary btn-lg">CONNECT</button>

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