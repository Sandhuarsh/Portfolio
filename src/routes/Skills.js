import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Image2 from '../Components/Image2';
import SkillsContent from '../Components/SkillsContent';
const Skills = () => {
  return (
    <div>
      <Navbar/>
      <Image2 heading="SKILLS." text="Although I'm Still Learning,here are some things I can do"/>
      <SkillsContent/>
      <Footer/>

    </div>
  )
}

export default Skills
