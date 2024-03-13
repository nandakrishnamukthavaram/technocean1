import React from 'react'
import linkedinsvg from "../../media/linkedin.svg";
import telegramsvg from "../../media/telegram.svg";
import twittersvg from "../../media/twitter.svg";
import githubsvg from "../../media/github.svg";
import dribbblesvg from "../../media/dribbble.svg";
import discordsvg from "../../media/discord.svg";
import "./Footer.scss"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-left">
                    <p>We fuel boundless innovation through collaboration and creativity.</p>
                </div>
                <div className="footer-right">
                    <h3>Follow Us</h3>
                    <div className="social-links">
                        <a target='_blank' href=""> <img src={telegramsvg} alt="" /></a>
                        <a target='_blank' href=""> <img src={twittersvg} alt="" /></a>
                        <a target='_blank' href=""> <img src={discordsvg} alt="" /></a>
                        <a target='_blank' href=""> <img src={dribbblesvg} alt="" /></a>
                        <a target='_blank' href=""> <img src={githubsvg} alt="" /></a>
                        <a target='_blank' href=""> <img src={linkedinsvg} alt="" /></a>
                    </div>
                    <div className="event-links">
                        <h3>Events</h3>
                        <Link to="/">Hackathons</Link>
                        <Link to="/">Contests</Link>
                        <Link to="/">Workshops</Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Eurus Studio. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer