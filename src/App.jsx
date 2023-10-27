import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import BeforeAuth from './BeforeAuth/BeforeAuth'
import AfterAuth from './AfterAuth/AfterAuth'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BeforeAuth />} />
        <Route path='/AfterAuth' element={<AfterAuth />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
