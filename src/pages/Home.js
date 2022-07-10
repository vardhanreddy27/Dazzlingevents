import React from 'react'
import Navbar from '../components/Navbar'
import Slideshow from '../components/Slideshow'
import TopNav from '../components/TopNav'
import Banner from '../components/Banner'

function Home() {
  const home = 'active';

  return (
    <><TopNav />
    <Navbar/>
    <Slideshow />
       </>
  )
}

export default Home