import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './SampleRedux/UserSlice';
import { Link } from 'react-router-dom';

function Profile() {
    const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const username = user ? user.username : "Guest";
  const email = user ? user.email : "Guest123@gmail.com";
  return (
    <div>
   
      <Link to = "/admin">{username}</Link><br/>
      {email}
    
    </div>
  )
}

export default Profile
