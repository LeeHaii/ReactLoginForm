import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import BeforeAuth from './BeforeAuth/BeforeAuth'
import AfterAuth from './AfterAuth/AfterAuth'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  
  return (
    <BeforeAuth />
  )

}

export default App
