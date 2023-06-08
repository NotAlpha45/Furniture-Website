import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/navbar'
import Home from './pages/home'
import Furniture from './pages/furniture'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="" >
            <Route path='/' element={<Home />} />
            <Route path='/furniture/:id' element={<Furniture />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
