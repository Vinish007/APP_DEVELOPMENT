import React from 'react'
import './Analysis.css'
import {Link} from 'react-router-dom'
const Analysis = () => {
  return (
    <div id='body'>
    <>
    <input type="checkbox" name="" id="menu-toggle" />
    <div className="overlay">
      <label htmlFor="menu-toggle"></label>
    </div>
    <div className="sidebar1">
      <div className="sidebar-container1"> 
        <div className="sidebar-card">
          <div className="side-card-icon">
            <span className="lab la-codiepie" />
          </div>
          <div className='black'>
            <h4>Make Project</h4>
            <p>add images and videos</p>
          </div>
          <button className="btn btn-main btn-block"><Link to ='/crud'>Create now</Link></button>
        </div>
      </div>
    </div>
    <div className="main-content">
      <header>
        <div className="header-wrapper">
          <label htmlFor="menu-toggle">
            <span className="las la-bars" />
          </label>
          <div className="header-title">
            <h1>Analytics</h1>
            
          </div>
        </div>
       
      </header>
      <main>
        <section>
          <div className="analytics">
            <div className="analytic">
              <div className="analytic-icon">
                <span className="las la-eye" />
              </div>
              <div className="analytic-info">
                <h4>Total views</h4>
                <h1>10.3M</h1>
              </div>
            </div>
            <div className="analytic">
              <div className="analytic-icon">
                <span className="las la-clock" />
              </div>
              <div className="analytic-info">
                <h4>Watch time (hrs)</h4>
                <h1>
                  20.9k <small className="text-danger">5%</small>
                </h1>
              </div>
            </div>
            <div className="analytic">
              <div className="analytic-icon">
                <span className="las la-users" />
              </div>
              <div className="analytic-info">
                <h4>Subscribers</h4>
                <h1>
                  1.3k <small className="text-success">12%</small>
                </h1>
              </div>
            </div>
            <div className="analytic">
              <div className="analytic-icon">
                <span className="las la-heart" />
              </div>
              <div className="analytic-info">
                <h4>Total likes</h4>
                <h1>3.4M </h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="block-grid">
            <div className="revenue-card">
              <h3 className="section-head">Total Revenue</h3>
              <div className="rev-content">
                <img
                  src="https://tse4.mm.bing.net/th?id=OIP.p5ji203FdESFCmgIs1EO-QHaHa&pid=Api&P=0&h=180"
                  alt="profile"
                />
                <div className="rev-info">
                  <h3>Nagalakshmi</h3>
                  <h1>
                    3.5M <small>Subscribers</small>
                  </h1>
                </div>
                <div className="rev-sum">
                  <h4>Total Amount</h4>
                  <h2>$70.859</h2>
                </div>
              </div>
            </div>
            <div className="graph-card">
              <h3 className="section-head">Graph</h3>
              <div className="graph-content">
                <div className="graph-head">
                  
                  <div className="graph-select">
                    
                  </div>
                </div>
                <div className="graph-board">
                  <img src="https://tse1.mm.bing.net/th?id=OIP.fV_o5vymBV8MislYFxcfWQHaHa&pid=Api&P=0&h=180"  />
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </>
  
    </div>
  )
}

export default Analysis
