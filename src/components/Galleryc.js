import React from 'react'

function Gallery() {
  return (
   
<div className="container p-5">
  <h2 className='text-center pb-3'  data-aos="fade-up">IMAGE GALLERY</h2>
  <div className="row pt-2">
    <div className="col-md-4">
      <div className="thumbnail">
        <a href="./1.JPG" target="_blank">
          <img src="./1.JPG" className='g' alt="Lights" />
      
        </a>
      </div>
    </div>
    <div className="col-md-4">
      <div className="thumbnail">
        <a href="./2.JPG" target="_blank">
          <img src="/2.JPG" className='g'  alt="Nature"/>
       
        </a>
      </div>
    </div>
    <div className="col-md-4">
      <div className="thumbnail">
        <a href="./3.JPG" target="_blank">
          <img src="./3.JPG" className='g'  alt="Fjords" />
       
        </a>
      </div>
    </div>
  </div>  <div className="row pt-2">
    <div className="col-md-4">
      <div className="thumbnail">
        <a href="./7.JPG" target="_blank">
          <img src="./7.JPG" className='g' alt="Lights" />
      
        </a>
      </div>
    </div>
    <div className="col-md-4">
      <div className="thumbnail">
        <a href="./5.JPG" target="_blank">
          <img src="/5.JPG" className='g'  alt="Nature"/>
       
        </a>
      </div>
    </div>
    <div className="col-md-4">
      <div className="thumbnail">
        <a href="./6.JPG" target="_blank">
          <img src="./6.JPG" className='g'  alt="Fjords" />
       
        </a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Gallery