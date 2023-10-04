// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import LoginPage from './LoginPage';
// import Register from './RegisiterPage';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//     {/* <LoginPage/> */}
//     {/* <Register/> */}
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import Register from './RegisiterPage';

import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './homepage';
import Reptiles from './Reptiles';
import AboutUs from './AboutUspage';
import ContactUs from './ContactUs';
import Tiger from './Tiger';
import Lion from './Lion';
import Blackpanther from './Blackpanther';
import Birds from './Birds';
import Fish from './Fish';
import Termsa from './Termsa';
import Feed from './Feed';
import Profile from './Profile';
import { Provider } from 'react-redux'; // Import the Provider component
import store from './store'; // Import the Redux store
import { SearchProvider } from './searchContext';
import AddProductPage from './addproductpage';

import Pp from './Pp';
// import { Provider } from 'react-redux'
// import store1 from './Redux/store.js'

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <SearchProvider>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contactus" element={<ContactUs/>} />
       <Route path="/Reptiles" element={<Reptiles/>} />
        <Route path="/Tiger" element={<Tiger/>} />
        <Route path="/Termsa" element={<Termsa/>} />
        <Route path="/Lion" element={<Lion/>} />
        <Route path="/Blackpanther" element={<Blackpanther/>} />
        <Route path="/Birds" element={<Birds/>} />
        <Route path="/Feed" element={<Feed/>} />
        <Route path="/Fish" element={<Fish/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/AddProduct" element={<AddProductPage/>} />
        <Route path="/privacy" element={<Pp/>} />

      </Routes>
    </React.StrictMode>
    </SearchProvider>
  </Router>,
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();