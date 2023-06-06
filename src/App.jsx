import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/navbar'
import Home from './pages/home'


function App() {

  return (
    <>
      <BrowserRouter>
      
        <Navbar />
        <Routes>
          <Route exact path="/" >
            <Route path='' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
