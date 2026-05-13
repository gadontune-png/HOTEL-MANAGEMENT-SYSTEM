import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import './App.css'


function App() {


  return (
    
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>    
    
    </Routes>
    
    </Router>
  )
}

export default App
