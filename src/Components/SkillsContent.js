import "./SkillsStyle.css";
import {BsPatchCheckFill} from 'react-icons/bs';
import React from 'react'

const SkillsContent = () => {
  return (
    <section className='experience'>
    <div className='container experience__container'>
    <div className='experience_frontend'>
      <h3>Frontend Development</h3>
      <div className='experience__content'>
        <article className='experience__details'><BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>HTML</h4>
        <small className='text-light'>Experienced</small>
        </div>
        </article>
        <article className='experience__details'><BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>CSS</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>
        
        <article className='experience__details'><BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Tailwind CSS</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>
        <article className='experience__details'><BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Javascript</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>
        <article className='experience__details'><BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>React.JS</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>
       
        <article className='experience__details'><BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Bootstrap</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>
       
      </div>
    </div>
    <div className='experience_frontend'>
      <h3>Backend Development</h3>
      <div className='experience__content'>
        <article className='experience__details'><BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Node JS</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>
        <article className='experience__details'><BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>MongoDB</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>
        <article className='experience__details'><BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>SQL</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>
        <article className='experience__details'><BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>Express</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>
        <article className='experience__details'><BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>MySQL</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>
        <article className='experience__details'><BsPatchCheckFill className='experience__details-icon'/>
        <div>
        <h4>DSA</h4>
        <small className='text-light'>Intermediate</small>
        </div>
        </article>
        
      </div>
    </div>
    </div>
  </section>
  )
}

export default SkillsContent
