import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Image2 from '../Components/Image2';
import AboutContent from '../Components/AboutContent';
const About = () => {
  return (
    <div>
      <Navbar/>
      <Image2 heading="ABOUT." text="I'm a friendly Mern Stack Developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
