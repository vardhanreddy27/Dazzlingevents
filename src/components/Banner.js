import React from 'react'

function Banner() {
  return (
    < div className=''>  
    
    <div className='row mt5'>
    <div className='col-6-sm pt' data-aos="fade-up-right"> <video src="./bvideo.mp4" autoPlay muted  loop="true" className='vdo' /></div>
    <div className='col-6-sm xl'>
    <div className="container container1">
    <div className="cards" data-aos="fade-up-left">
      <div className="card card-one" >
        <h2 className="card-title">VISION</h2>
        <p className="date">Our business is making memories</p>
        <p className="description">We have a clear vision to ensure clients satisfaction and loyalty.</p>
      </div>
      
      <div className="card card-two">
        <h2 className="card-title">MISSION</h2>
        <p className="date">Extraordinary life events </p>
        <p className="description">To be the leading Event Management Company by meeting and exceeding the expectations of our Clients</p>
      </div>
      
      <div className="card card-three">
        <h2 className="card-title">VALUES</h2>
        <p className="date">Creating the Best. Day. Ever.</p>
        <p className="description">We Help You Create A Memorable Event With Lasting Impression.</p>
      </div>
      
      <div className="card card-four">
        <h2 className="card-title">TARGET</h2>
        <p className="date">Dream fulfillment</p>
        <p className="description">Quality Service Is A Top Priority In Dazzling Events.</p>
      </div>
    </div>
  </div>
    </div>
    </div>
    <div className='container d-lg-none d-md-none'>
    <div className="card">
  <div className="card-body mycard">
    <h5 className="card-title">VISION</h5>
    <p className="card-text">We have a clear vision to ensure clients satisfaction and loyalty.</p>

  </div>
</div>  <div className="card ch">
  <div className="card-body card1">
    <h5 className="card-title">MISSION</h5>
    <p className="card-text">To be the leading Event Management Company by meeting and exceeding the expectations of our Clients</p>

  </div>
</div>  <div className="card ch">
  <div className="card-body card2 ">
    <h5 className="card-title">VALUES</h5>
    <p className="card-text">We Help You Create A Memorable Event With Lasting Impression.</p>

  </div>
</div>  <div className="card ch mn">
  <div className="card-body card3">
    <h5 className="card-title">TARGET</h5>
    <p className="card-text">Quality Service Is A Top Priority In Dazzling Events.</p>

  </div>
</div>
    </div>
    </div>
  )
}

export default Banner