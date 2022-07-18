import React from 'react'

function Gallery() {
  return (
   
<div className="container p-5">
  <h2 className='text-center pb-3'  data-aos="fade-up">IMAGE GALLERY</h2>
  <div className="row pt-2">
    <div className="col-md-4">
      <div className="thumbnail">
        <a href="./1.jpg" target="_blank">
          <img src="./1.jpg" className='g' alt="Lights" />
      
        </a>
      </div>
    </div>
    <div className="col-md-4">
      <div className="thumbnail">
        <a href="./2.jpg" target="_blank">
          <img src="/2.jpg" className='g'  alt="Nature"/>
       
        </a>
      </div>
    </div>
    <div className="col-md-4">
      <div className="thumbnail">
        <a href="./3.jpg" target="_blank">
          <img src="./3.jpg" className='g'  alt="Fjords" />
       
        </a>
      </div>
    </div>
  </div>  <div className="row pt-2">
    <div className="col-md-4">
      <div className="thumbnail">
        <a href="./7.jpg" target="_blank">
          <img src="./7.jpg" className='g' alt="Lights" />
      
        </a>
      </div>
    </div>
    <div className="col-md-4">
      <div className="thumbnail">
        <a href="./5.jpg" target="_blank">
          <img src="/5.jpg" className='g'  alt="Nature"/>
       
        </a>
      </div>
    </div>
    <div className="col-md-4">
      <div className="thumbnail">
        <a href="./6.jpg" target="_blank">
          <img src="./6.jpg" className='g'  alt="Fjords" />
       
        </a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Gallery