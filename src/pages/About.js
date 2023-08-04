import React from "react";
import "../pages/About.css";
import AboutImg from "../images/myimg.jpeg";

const About = () => {
    return (
        <section className="about-page">
            <div className="container">
                <div className="section-title">
                    <h2>About</h2>
                </div>
                <div className="about-content grid">
                    <div className="about-img">
                        <img src={AboutImg} alt=" " />
                    </div>
                    <div className="about-text">
                        {/* <h2 className='about-title fs-26 ls-1'>About Me</h2> */}
                        <p className='fs-17'>Hello Readers!</p>
                        <p className='fs-17'>I'm Darshan Rathod. I'm a curious and enthusiastic individual who loves exploring new things. I have a passion for technology and enjoy diving into the world of computers. When I'm not busy learning or coding, you can find me reading books or spending time with friends. I believe in continuous growth and look forward to embracing new challenges with a smile. Let's connect and share our journeys together!</p>
                        <h5>LinkedIn</h5><a href="https://www.linkedin.com/in/darshan-rathod-456982192/">https://www.linkedin.com/in/darshan-rathod-456982192/</a>
                        <h5>Github</h5><a href="https://github.com/DMR4400">https://github.com/DMR4400</a>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default About

