import React from 'react'

import {useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    const HandleClick = () => {
        navigate("/auth");
    }

  return (
    <>
        <div className='Intro-div'>
            <h1 className='Headline'>To-Do App</h1>

            <button onClick={HandleClick}>Get Started</button>

            <p>&copy; Om Ghante 2024 | Copyrights Not Reserved</p>
            <p>Made With &hearts; by Om Ghante</p>
            <p>Code for this you can find <a href="https://github.com/om-ghante/Web.dev-Practice-Projects/tree/main/Reacjs-Projects/To-do-app" target='_blank' title="It Will Redirect to Github"> here</a></p>
        </div>
    </>
  )
}

export default Home
