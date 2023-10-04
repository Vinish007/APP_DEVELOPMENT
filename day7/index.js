

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import Register from './RegisiterPage';

import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './homepage';
import Deer from './Deer';
import AboutUs from './AboutUspage';
import ContactUs from './ContactUs';
import Tiger from './Tiger';
import Lion from './Lion';
import Blackpanther from './Blackpanther';
import ShelvesPage from './Rhinoceros';
import Donate from './Donate';
import Profile from './Profile';
import { Provider } from 'react-redux'; // Import the Provider component
import store from './store'; // Import the Redux store
import { SearchProvider } from './searchContext';
import AddProductPage from './addproductpage';
import Rhinoceros from './Rhinoceros';
import Pp from './Pp';
import Faq from './Faq';
import Tac from './Tac';
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
        <Route path="/Deer" element={<Deer/>} />
        <Route path="/Tiger" element={<Tiger/>} />
        <Route path="/Lion" element={<Lion/>} />
        <Route path="/Blackpanther" element={<Blackpanther/>} />
        <Route path="/Rhinoceros" element={<Rhinoceros/>} />
        <Route path="/Donate" element={<Donate/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/AddProduct" element={<AddProductPage/>} />
        <Route path="/privacy" element={<Pp/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/tac" element={<Tac/>} />

      </Routes>
    </React.StrictMode>
    </SearchProvider>
  </Router>,
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();