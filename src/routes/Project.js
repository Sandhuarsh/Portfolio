import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Image2 from '../Components/Image2';
import Card from '../Components/Card';
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Image2 heading="PROJECTS." text="Some of my most recent works"/>
      <Card/>
      <Footer/>

    </div>
  )
}

export default Project
