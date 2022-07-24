import React from 'react'

function Loc() {
  return (
    <>            <div className='row pt-5 p-2'><h1 className='text-center '>Contact us</h1></div>

    <div className='row text-center mt-4 pb-5'>
      <div className='col-4 aku'><a href="mailto:dazzlingseventmanagement@gmail.com">
   <img src="./email.png" className="contact "alt='dazzling event'></img><br />
      dazzlingseventmanagement@gmail.com   </a></div>
   <div className='col-4 aku'><a href="tel:9980100843">
   <img src="./call.png" className="contact "alt='dazzling event'></img><br />

   +91 998 0100 843</a>
    </div>   <div className='col-4  aku'><a href="https://wa.me/9980100843">
    <img src="./whatsapp.png" className="contact"alt='dazzling event'></img><br />

    +91 998 0100 843</a>
    </div>   </div>
    </>
  )
}

export default Loc