import React from 'react'
import Navbar from '../components/Navbar'
import Slideshow from '../components/Slideshow'
import TopNav from '../components/TopNav'
import Banner from '../components/Banner'

function Home() {
  return (
    <><TopNav />
    <Navbar/>
    <Slideshow />
    <Banner />
       </>
  )
}

export default Home