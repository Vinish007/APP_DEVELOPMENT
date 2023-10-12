import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Loginfrist = () => {
  
  return (
    <div className='rbody'>
    <nav>
	
    <div className="header">
    <Link to="/" className="logo">DONATING HANDS</Link><br></br>
    <div className="header-right">
    <ul>
    <Link to="/login"><li>LOGIN</li></Link>
    <Link to="/signup"><li>SIGNUP</li></Link>
    </ul>
    </div>
      </div>
      </nav>
	  </div>
  )
}


export default Loginfrist