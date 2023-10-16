import React from 'react'
import '../src/LoginPage.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login } from './Redux/useerSlice.js';
import axios from 'axios';
function LoginPage() {
    const [email, setEmail] = useState('') // useState to store Email address of the user
    const [username, setUsername] = useState('') // useState to store Email address of the user
    const [password, setPassword] = useState('') // useState to store Password
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    function validateForm() {
        if (email.length == 0) {
            alert('Invalid Form, Email Address can not be empty')
            return
        }
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address");
          return;
        }
        if (password.length < 8) {
            alert('Invalid Form, Password must contain greater than or equal to 8 characters.')
            return
        }
         // variable to count upper case characters in the password.
        let countUpperCase = 0
        // variable to count lowercase characters in the password.
        let countLowerCase = 0
        // variable to count digit characters in the password.
        let countDigit = 0
        // variable to count special characters in the password.
        let countSpecialCharacters = 0
         // variable to count upper case characters in the password.
         for (let i = 0; i < password.length; i++) {
            const specialChars = [
              '!',
              '@',
              '#',
              '$',
              '%',
              '^',
              '&',
              '*',
              '(',
              ')',
              '_',
              '-',
              '+',
              '=',
              '[',
              '{',
              ']',
              '}',
              ':',
              ';',
              '<',
              '>',
            ]
      if (specialChars.includes(password[i])) {
        // this means that the character is special, so increment countSpecialCharacters
        countSpecialCharacters++
      } else if (!isNaN(password[i] * 1)) {
        // this means that the character is a digit, so increment countDigit
        countDigit++
      } else {
        if (password[i] == password[i].toUpperCase()) {
            // this means that the character is an upper case character, so increment countUpperCase
            countUpperCase++
          }
          if (password[i] == password[i].toLowerCase()) {
            // this means that the character is lowercase, so increment countUpperCase
            countLowerCase++
          }
        }
      }
      if (countLowerCase == 0) {
        // invalid form, 0 lowercase characters
        alert('Invalid Form, 0 lower case characters in password')
        return
      }
      if (countUpperCase == 0) {
        // invalid form, 0 upper case characters
        alert('Invalid Form, 0 upper case characters in password')
        return
      }
      if (countDigit == 0) {
        // invalid form, 0 digit characters
        alert('Invalid Form, 0 digit characters in password')
        return
      }
      if (countSpecialCharacters == 0) {
        // invalid form, 0 special characters characters
        alert('Invalid Form, 0 special characters in password')
        return
      }
      navigate("/");
      // if all the conditions are valid, this means that the form is valid
  
      alert('Login successful')
      dispatch(login({ username,email }));
      // console.log(username);
    }
    const onSubmit = async (e) => {
      e.preventDefault();
  
      // Check if email and password are not empty
      if (!email || !password) {
        alert("Please provide both email and password.");
        return;
      }
  
      try {
        // Send the data to the API using axios.post
        const response = await axios.post("http://localhost:8080/addUser", {
          email: email,
          username: username,
          password: password,
        });
  
        // Handle the response as needed (e.g., redirect, show success message, etc.)
        console.log("Response from API:", response.data);
  
        // Clear the form fields after successful submission
        setEmail("");
        setUsername("");
        setPassword("");
  
        // Redirect or navigate to another page if needed
        navigate("/");
      } catch (error) {
        // Handle errors, e.g., show error message
        console.error("Error submitting form:", error);
      }
    };
    return ( 
        <>

    <div class="split left1">
    <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1"><Link to='/'>ZOOWELFARE</Link></span>
  </div>
</nav>
    <div class="centered">
        <h2>Login into your Built Better Account.</h2>
        <p>Access your Built Better account using your email address to add and verify your mobile number.</p>
    </div>
    </div>


        <div class="split right1">
        <div className='header'>
        <div class="container">
        <h2>Login Page</h2>
        <br></br>
        {/* <br></br> */}
        <form id='loginForm' onSubmit={onSubmit} >
        <div class="form-group">
            <label for="exampleInputusername1">Username</label>
            <input type="text" class="form-control" value={username} id="exampleInputname1" aria-describedby="usernameHelp" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}></input>
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}></input>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
            <label class="form-check-label" for="exampleCheck1">Stay signed in util you sign out</label>
        </div>
              <p>Don't have account <Link to="/register">Registration</Link></p>  
            <center>
         <div class="d-grid gap-2">
        <button type="submit" class="btn btn-info" onClick={() => {validateForm()}}>Submit</button>
        </div>
        </center>   
        </form>
        </div>
        </div>
        </div>

        </>
     );
}

export default LoginPage;