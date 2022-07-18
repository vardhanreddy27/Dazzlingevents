import React from 'react'
import { Contactform } from '../components/Contactform'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TopNav from '../components/TopNav'
import Contactbanner from '../components/Contactbanner'
import Loc from '../components/Loc'

function Contact() {
  return (
    <>
    <TopNav />
<Navbar />
<Contactbanner /><Loc /><Contactform /><Footer /></>   )
}

export default Contact