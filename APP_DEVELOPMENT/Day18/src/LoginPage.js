import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Log.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getItem, setRole, setToken, setemail } from './LocalStorage';
import bcrypt from 'bcryptjs';
import axios from 'axios';
// import {dogimg} from '../assets/dog.jpg';
function LoginPage() {
  const [email, setEmail] = useState('');
  const[password,setPassword]=useState('');
  // const[user,setUser]=useState('');
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (email.length === 0) {
      errors.email = 'Email is required';
    }

    if (password.length === 0) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({
        email: '',
        password: '',
      });

      const userCredentials = {
        email: email,
        password: password
      };

      axios.post("http://localhost:8080/auth/login",userCredentials).then(response=>{
        const token=response.data.token;
        if (token) {
          setToken(token)
          setemail(userCredentials.email);
          const userType=response.data.role;
          setRole(userType)
              if(userType=="USER"){
                nav("/dashboard");
              }
             
              else {
                alert("Invalid user role");
              }
            } else {
              alert("Invalid token. Please try again.");
            }
      }).catch(error=>{
        alert(error.response.data)
     
      })
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormErrors({ ...formErrors, email: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormErrors({ ...formErrors, password: '' });
  };
const handle= () => {
    nav("/signup");
  };


  return (
    <div className={`loginContainer`}>
      <div className="forms-container">
        <div className="signin-signup" >
          <form action="#" className="sign-in-form loginForm" >
            <h2 className="title">Sign in</h2>

            <div className='input-field'>
            <FontAwesomeIcon icon={faUser} className='my-auto mx-auto'/>
            <input className='LoginInput' type='email' placeholder='Email' value={email}
            onChange={handleEmailChange}/>
            </div>
            {formErrors.email && <p className="error">{formErrors.email}</p>}
            
            <div className='input-field'>
            <FontAwesomeIcon icon={faLock} className='my-auto mx-auto'/>
            <input className='LoginInput' type='password'   placeholder='Password' value={password}
            onChange={handlePasswordChange}/>
            </div>
            {formErrors.password && <p className="error">{formErrors.password}</p>}
            
            <button className='btn' onClick={validate} type="submit">Sign In</button>
           
            <p className="social-text loginp"> Sign in with social platforms</p>
            <div className="social-media">
              
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className='my-auto mx-auto'/>
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className='my-auto mx-auto'/>
              </a>
            </div>
          </form>
          
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="contentLogin">
            <h3 className='loginh3'>New here?</h3>
            <p className='loginp'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
             <button className="btn transparent" onClick={handle}>
              Sign up
              </button>
          </div>
          
        </div>
        
      </div>
    </div>
  )}

  export default LoginPage