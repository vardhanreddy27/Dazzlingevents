import React from 'react'
import {NavLink,useLocation,Link} from 'react-router-dom'

const Navbar = () =>{
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");  return (
<nav className="navbar navbar-expand-lg navbar-light">
  <div className='col-10 wi'>
  <a className="navbar-brand ps-4 pe-4" href="#">DEVENTS</a>
  <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button></div><div className='col-2' >
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