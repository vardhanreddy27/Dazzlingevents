import React from 'react'

function Galleryc() {
  return (
   
<div className="container p-5">
  <h2 className='text-center pb-3'  data-aos="fade-up">IMAGE GALLERY</h2>
  <div className="row ">
    <div className="col-md-4 pt-2">
      <div className="thumbnail">
        <a href="./one.png" target="_blank">
          <img src="./one.png" className='g' alt="Lights" />
      
        </a>
      </div>
    </div>
    <div className="col-md-4 pt-2">
      <div className="thumbnail">
        <a href="./two.png" target="_blank">
          <img src="/two.png" className='g'  alt="Nature"/>
       
        </a>
      </div>
    </div>
    <div className="col-md-4 pt-2">
      <div className="thumbnail">
        <a href="./three.png" target="_blank">
          <img src="./three.png" className='g'  alt="Fjords" />
       
        </a>
      </div>
    </div>
  </div>  <div className="row">
    <div className="col-md-4 pt-2">
      <div className="thumbnail">
        <a href="./7.JPG" target="_blank">
          <img src="./7.JPG" className='g' alt="Lights" />
      
        </a>
      </div>
    </div>
    <div className="col-md-4 pt-2">
      <div className="thumbnail">
        <a href="./5.JPG" target="_blank">
          <img src="/5.JPG" className='g'  alt="Nature"/>
       
        </a>
      </div>
    </div>
    <div className="col-md-4 pt-2">
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

export default Galleryc