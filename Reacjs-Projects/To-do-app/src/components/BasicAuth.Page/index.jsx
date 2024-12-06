import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [ userName, setUserName ] = useState('');
  const [ userPassword, setUserPassword ] = useState('');

  const navigate = useNavigate();

  const HandleSubmit = () => {

    if( userName == "admin" && userPassword == "Pass@123" ) {
      navigate('/dashboard');
    } else {
      alert("Username & Password Dosen't Match...!!");
    }
  }

  return (
    <>
        <div className='auth-main-div'>
            <h1>To-Do App</h1>
            <h4>Hello,Again!</h4>

            <div className='auth-div'>

              <input 
                type="text" 
                name="userName"
                value={userName}
                placeholder="Username" 
                onChange={(e) => setUserName(e.target.value)}
              />

              <input 
                type="Password" 
                name="userPassword"
                value={userPassword}
                placeholder='Password'
                onChange={(e) => setUserPassword(e.target.value)}
              />
              
              <button onClick={HandleSubmit}>
                Login
              </button>
            </div>
        </div>
    </>
  )
}

export default Auth
