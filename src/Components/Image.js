import "./Image1Style.css";
import React from 'react';
import IntroImg from "../assets/pxfuel.jpg";
import { Link } from "react-router-dom";
const Image = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="introImg" src={IntroImg} alt="IntroImg"></img>
            </div>
            <div className="content">
                <p>HEY THERE I'M ARSHPREET SINGH</p>
                <h1>Mern Stack Developer.</h1>
                <div>
                    <Link to="/Project" className="btn">Projects</Link>
                    <Link to="/Contact" className="btn-light">Contact</Link>
                </div>

            </div>

        </div>
    )
}

export default Image;
