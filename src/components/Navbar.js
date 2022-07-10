import React from 'react'

function Navbar() {
  return (
<nav className="navbar navbar-expand-lg  topnavcolor">
  <div className='col-10 wi'>
  <a className="navbar-brand ps-4 pe-4" href="#">DEVENTS</a>
  <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button></div><div className='col-2' >
  <div className="collapse navbar-collapse " id="navbarNavDropdown">
    <ul className="navbar-nav ">
      <li className="nav-item active ms-2 me-2">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item ms-2 me-2">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item ms-2 me-2">
        <a className="nav-link" href="#">Services</a>
      </li>  <li className="nav-item ms-2 me-2">
        <a className="nav-link" href="#">Gallery</a>
      </li>  <li className="nav-item ms-2 me-2">
        <a className="nav-link" href="#">Contact</a>
      </li>
   
    </ul>
  </div></div><script type='text/javascript'>
    console.log("sss");
  </script>
</nav>

 )
}

export default Navbar