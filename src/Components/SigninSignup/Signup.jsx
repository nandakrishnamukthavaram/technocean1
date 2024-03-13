// SignUp.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './SignUp.scss';
import signupsvg from "../../media/signup.svg";
const SignUp = () => {
    return (
        <div className='signup-page'>
            <div className="image">
            </div>
            <div className="signup-container">
                <div className="signup-form">
                    <h2>Join The Tech Feast!</h2>
                    <form>
                        <div className="form-group">
                            <input type="text" id="name" name="name" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <input type="password" id="password" name="password" placeholder="Enter your password" />
                        </div>
                        <button type="submit">Sign Up</button>
                    </form>
                    <p className="signin-link">Already have an account? <Link to="/signin">Sign in now!</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
