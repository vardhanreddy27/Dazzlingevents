import React from 'react'
import {NavLink,useLocation,Link} from 'react-router-dom'

function ServicesMain() {
  return (
    <div className='text-center colo'><h1 className=' mb-5 p-3 mt-4'>SERVICES</h1>
 
    <div className='row pb-5 ps-3 pe-3'>
    <div className='col spb' >
    <figure class="snip1107 blue"><img src="./cater.jpg" alt="sampl31"/>
  <figcaption>
    <div>               
<span>GET IN TOUCH</span></div>
    <div>
      <h5>catering<br /> service</h5>
    </div> <a ><a href="./Contact"></a> 
</a>                   
  </figcaption>
</figure>
      </div>
      <div className='col spb'>
    <figure class="snip1107 blue"><img src="./ring.jpg" alt="sampl31"/>
  <figcaption>
    <div>                  
<span>GET IN TOUCH</span></div>
    <div>
      <h5>Engagement ring ceremony</h5>
    </div><a href="./Contact"></a> 
  </figcaption>
</figure>
      </div> 
      <div className='col spb'>
    <figure class="snip1107 blue"><img src="./house.jpg" alt="sampl31"/>
  <figcaption>
    <div><span>GET IN TOUCH</span></div>
    <div>
      <h5>Housewarming ceremony</h5>
    </div><a href="./Contact"></a> 
  </figcaption>
</figure>
      </div>
      
      </div>
      <div className='row pb-5 pt-1 ps-3 pe-3'>
    <div className='col spb'>
    <figure class="snip1107 blue"><img src="./marriage.jpg" alt="sampl31"/>
  <figcaption>
    <div><span>GET IN TOUCH</span></div>
    <div>
      <h5>Wedding, Marriage Function</h5>
    </div><a href="./Contact"></a> 
  </figcaption>
</figure>
      </div>
      <div className='col spb'>
    <figure class="snip1107 blue"><img src="./namming.jpg" alt="sampl31"/>
  <figcaption>
    <div><span>GET IN TOUCH</span></div>
    <div>
      <h5>Naming <br />ceremony</h5>
    </div><a href="./Contact"></a> 
  </figcaption>
</figure>
      </div>
      <div className='col spb'>
    <figure class="snip1107 blue"><img src="./birthday.jpg" alt="sampl31"/>
  <figcaption>
    <div><span>GET IN TOUCH</span></div>
    <div>
      <h5>Birthday<br /> Party</h5>
    </div><a href="./Contact"></a> 
  </figcaption>
</figure>
      </div>
      
      </div>
      
      </div>  )
}

export default ServicesMain