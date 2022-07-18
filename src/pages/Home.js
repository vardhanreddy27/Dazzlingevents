import React from 'react'
import Navbar from '../components/Navbar'
import Slideshow from '../components/Slideshow'
import TopNav from '../components/TopNav'
import Banner from '../components/Banner'
import Getintouch from '../components/Getintouch'
import Counter from '../components/Counter'
import Service from '../components/Service'
import Gallery from '../components/Galleryc'
import Footer from '../components/Footer'
import Additional from '../components/Additional'

function Home() {
  return (
    <><TopNav />
    <Navbar/>
    <Slideshow />
    <Banner />
    <Counter />
    <Service />
    <Additional />
        <Getintouch />

    <Gallery />
    <Footer />
       </>
  )
}

export default Home