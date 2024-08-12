import React from 'react'
import Home from '../src/component/shared/Home/Home'
import About_Me from '../src/component/shared/About_Me/About_Me'
import Projects from '../src/component/shared/Projects/Projects'
import Contact from '../src/component/shared/Contact/Contact'
import Testimonials from '../src/component/shared/Testimonials/Testimonials'
import Certificates from '../src/component/shared/Certificates/Certificates'
import Navbar from '../src/component/shared/Navbar/Navbar'

const LandingPage = () => {
  return (
    <>
        <div style={{marginTop:'80px'}}>
        <Navbar></Navbar>
        <Home></Home>
        <About_Me></About_Me> 
        <Projects></Projects>
        <Contact></Contact> 
        <Testimonials></Testimonials>
        <Certificates></Certificates>
        </div>
    </>
  )
}

export default LandingPage