import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from "../app/actions";
import Birthday from "../assets/images/birthday.avif"
import marriage from"../assets/images/marriage.jpg"
import farewell from "../assets/images/farewell.jpg"
import dj from "../assets/images/dj.jpg"
import wd from "../assets/images/wd-1.jpg"
import wd1 from "../assets/images/wd-2.jpg"
import wd2 from "../assets/images/wd-3.jpeg"
import wd3 from "../assets/images/wd-4.jpeg"
import '../assets/css/dashboard.css';

const Dashboard = () => {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="sidebar-nav">
          <li>
            <button onClick={() => navigate('/dashboard')}>Dashboard</button>
          </li>
          <li>
            <button onClick={() => navigate('/profile')}>Profile</button>
          </li>
          <li>
            <button onClick={() => navigate('/donation')}>Donation</button>
          </li>
          <li>
            <button onClick={() => navigate('/aboutus')}>About Us</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome <span className="user_name">{username}</span></h1>
        <p className="welcome-text">Let's begin your journey with us!</p>
        <p className="sub-text">Donation</p>

        {/* Image Rows */}
        <div className="image-row">
          <img src={wd}alt="Image 1" className="dashboard-image" />
          <img src={wd1} alt="Image 2" className="dashboard-image" />
        </div>
        <div className="image-row">
          <img src={wd2} alt="Image 3" className="dashboard-image" />
          <img src={wd3}alt="Image 4" className="dashboard-image" />
        </div>
        
        {/* You can display other user-related information here */}
      </main>
    </div>
  );
}

export default Dashboard;
