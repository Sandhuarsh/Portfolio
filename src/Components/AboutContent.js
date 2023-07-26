import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import react from "../assets/react.jpg"
import mern from "../assets/mern.jpg"
import React from 'react'

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who AM I?</h1>
                <p>I'm a MERN Stack Developer with a passion for Building beautiful, responsive applications.
                    I like to do Project based learning instead of going through tutorial hell and have built several projects in different domain such as news,ecommerse site etc.I'm currently focusing to improve my backened skills and I am looking to expand my knowledge and skillset.
                </p>
                <Link to="/Contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
               <div className="img-container">
                <div className="img-stack top">
                    <img src={mern} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react} className="img" alt="true"/>
                </div>
               </div>
            </div>
        </div>
    )
}

export default AboutContent

