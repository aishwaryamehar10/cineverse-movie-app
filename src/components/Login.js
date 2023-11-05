import React, { useState } from 'react';
import "../styles/Login.css";
import {useDispatch, useSelector} from 'react-redux';
import { loginSuccess, loginFailure } from '../reducers/userSlice';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [credentials, setCredentials] = useState({email : '', password : ''})
    const isAunthenticated = useSelector(state => state.user.isAunthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
      if(credentials.email === 'admin@admin.com' && credentials.password === 'admin123') {
      dispatch(loginSuccess());
      navigate('/home');
      }
      else {
        dispatch(loginFailure());
        navigate('/');
      }
    }

  return (
    <div className='login-page'>
       <input type = "Email"
       placeholder = "Email address"
        value={credentials.email}
        onChange={(e)=>setCredentials({...credentials,email : e.target.value})}
       />
       <input type = "password"
       placeholder = "Enter password"
       value={credentials.password}
       onChange={(e)=>setCredentials({...credentials,password : e.target.value})}
       />
       <button onClick = {handleClick}>Login</button>
       {isAunthenticated && <p>Successfully logged in!!</p>}
    </div>
  )
}

export default Login
