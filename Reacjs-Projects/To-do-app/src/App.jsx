import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Intro.Page/index'
import Auth from './components/BasicAuth.Page/index'
import Dashboard from './components/ToDoApp.Page'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index path='/' element={<Home />}/>
          <Route path='/auth' element={<Auth />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
