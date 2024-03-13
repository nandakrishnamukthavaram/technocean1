// Navigation.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav_bar">
            <div className="nav_logo">
                <img src={require("../../media/logo.jpeg")} alt="Technoocean logo" className="nav_img" />
                <h1 className="nav_title">Technoocean</h1>
            </div>
            <div className={`nav_links ${isOpen ? 'open' : ''}`}>
                <NavLink to="/" onClick={toggleMenu}>home</NavLink>
                <NavLink to="/prizes" onClick={toggleMenu}>prizes</NavLink>
                <NavLink to="/events" onClick={toggleMenu}>events</NavLink>
                <NavLink to="/Signin"> <button className="ham_login"> Signin </button>
                </NavLink>

            </div>
            <NavLink to="/Signin"> <button className="login"> Signin </button>
            </NavLink>


            <div className="hamburger" onClick={toggleMenu}>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
            </div>
        </div>
    );
}

export default Navigation;
