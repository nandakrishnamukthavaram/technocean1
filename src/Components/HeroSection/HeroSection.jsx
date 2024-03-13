import React from 'react'
import "./HeroSection.scss"
import { Link } from 'react-router-dom'
const HeroSection = () => {
    return (
        <div className='hero_section'>
            <div className="heropng">
                <img src={require("../../media/bg.png")} alt="" />
            </div>
            <div className="left">
                <div className="heading">
                    <h1>
                        TechnoOcean
                    </h1>
                    <h2>Empowering innovators</h2>
                </div>
                <span>Three days  event at &nbsp;
                    <a
                        href="http://www.lpu.in"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        LPU
                    </a>
                </span>
                <span>Learn, Build, Present</span>
                <Link to="/signup" className='signup-link'>
                    <button className="sign_up">
                        Join Tech
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSection