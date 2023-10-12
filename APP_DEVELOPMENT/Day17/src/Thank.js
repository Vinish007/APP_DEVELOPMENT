import React from 'react'
import './Thank.css'
const Thank = () => {
  return (
    <div>
    <div className="card">
    <h3>✔ Payment successful</h3>
    <h4>Reference number - DON-4123123</h4>
    <p id="counter">The page will redirect back to portal in 9 seconds...</p>
    <a href="/dashboard">Go back to portal</a>
  </div>
  
    </div>
  )
}

export default Thank
