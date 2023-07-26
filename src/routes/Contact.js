import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Image2 from '../Components/Image2';
import Form from '../Components/Form';
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Image2 heading="CONTACT." text="Lets have a Chat."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
