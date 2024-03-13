// SignIn.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './SignUp.scss';
import signinsvg from "../../media/Signin.svg";
const SignIn = () => {
    return (
        <div className="signin-page">
            <div className="image">
            </div>
            <div className="signin-container">
                <div className="signin-form">
                    <h2>Welcome Back!</h2>
                    <form>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <input type="password" id="password" name="password" placeholder="Enter your password" />
                        </div>
                        <button type="submit">Sign In</button>
                    </form>
                    <p className="signup-link">Don't have an account? <Link to="/signup">Sign up now!</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
