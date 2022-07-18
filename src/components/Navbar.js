import React from 'react'
import {useLocation,Link} from 'react-router-dom'
import { FiMenu } from 'react-icons/fi';

const Navbar = () =>{
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");  return (
<nav className="navbar navbar-expand-lg  ">
  <div className='col-10 wi'>
  <Link to='/'> <a className="navbar-brand ps-4 pe-4">DEVENTS</a>
</Link>
 </div><div className='col-2' > <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
   <FiMenu />
  </button>
  <div className="collapse navbar-collapse " id="navbarNavDropdown">
    <ul className="navbar-nav ">
    <li className={splitLocation[1] === "" ? "active" : ""}>
                    <Link to='/' className='pad'>Home</Link>
                </li>
                <li className={splitLocation[1] === "About" ? "active" : ""}>
                    <Link to='/About'  className='pad'>About</Link>
                </li>
                <li className={splitLocation[1] === "Services" ? "active" : ""}>
                   <Link to="/Services"  className='pad'>Service</Link>
               </li>       <li className={splitLocation[1] === "Gallery" ? "active" : ""}>
                    <Link to='/Gallery'  className='pad'>Gallery</Link>
                </li> <li className={splitLocation[1] === "Contact" ? "active" : ""}>
                    <Link to='/Contact'  className='pad'>Contact</Link>
                </li>
   
    </ul>
  </div></div>
</nav> )
}

export default Navbar