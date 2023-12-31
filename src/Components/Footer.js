import "./FooterStyle.css";
import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>House No.35 New RanjitPura</p>
                            <p>Amritsar,Punjab</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +91 8826552167</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            sandhuarshpreet123@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About me</h4>
                    <p>This is Arshpreet Singh. I'm a Mern Developer with a passion for Building beautiful,responsive applications.</p>
                    <div className="social">
                    <FaGithub size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                    <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                    <FaFacebook size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
