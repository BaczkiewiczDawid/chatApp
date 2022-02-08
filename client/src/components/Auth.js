import { useState } from 'react';
import Cookies from 'universal-cookie';
import Axios from 'axios';
import signInImage from '../assets/signup.jpg';

const initialState = {
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: ''
}

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [form, setForm] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);
    }

    const switchMode = () => {
        setIsSignup(!isSignup);
    }

    return ( 
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>{isSignup ? 'Sign up' : 'Sign in'}</p>
                    <form>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" name="fullName" placeholder="Full Name" onChange={(e) => handleChange(e)} required />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="fullName" placeholder="Username" onChange={(e) => handleChange(e)} required />
                        </div>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input type="text" name="phonenumber" placeholder="Phone Number" onChange={(e) => handleChange(e)} required />
                            </div>
                        )}
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="avatarURL">Avatar URL</label>
                                <input type="text" name="avatarURL" placeholder="Avatar URL" onChange={(e) => handleChange(e)} required />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Password" onChange={(e) => handleChange(e)} required />
                        </div>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="avatarURL">Confirm Password</label>
                                <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_button">
                            <button onClick={(e) => handleSubmit(e)}>{isSignup ? "Sign Up" : 'Sign In' }</button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>{isSignup ? 'Already have an account?' : 'Dont have an account?'}</p>
                        <span onClick={switchMode}>
                            {isSignup ? 'Sign in' : 'Sign Up'}
                        </span>
                    </div>
                </div>
            </div>
            <div className="auth__form-container_image">
                <img src={signInImage} alt="sign in" />
            </div>
        </div>
     );
}
 
export default Auth;