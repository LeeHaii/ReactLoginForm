import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import Login from './Login/Login'
import Signup from './SignUp/Signup'
import './BeforeAuth.css'

function BeforeAuth() {
  const [check, setCheck] = useState(true)
  const [name, setName] = useState("Sign Up")

  let LoginScreen = document.getElementById('LoginScreenButton')
  let SignupScreen = document.getElementById('SignupScreenButton')

  let user = 'otry'
  let pass = '123'

  const handleLoginClick = () => {
    setCheck(false);
    setName("Login");
    LoginScreen.style.background = "linear-gradient(45deg, rgb(83, 83, 233),rgb(194, 76, 194))"
    SignupScreen.style.background = "rgb(245, 245, 245)"
  };

  const handleSignupClick = () => {
    setCheck(true);
    setName("Sign Up");
    SignupScreen.style.background = "linear-gradient(45deg, rgb(83, 83, 233),rgb(194, 76, 194))"
    LoginScreen.style.background = "rgb(245, 245, 245)"
  };

  return (
    <>
      <div className="loginForm">
        <div className="chit">
          <div className='txtLoginHeader' id="HeaderLR">{name}</div>
          <div className="TwoScreenButton">
            <button className='ScreenButton' id='LoginScreenButton' onClick={handleLoginClick}>Login</button>
            <button className='ScreenButton' id='SignupScreenButton' onClick={handleSignupClick}>Signup</button>
          </div>
          {check ? <Signup /> : <Login />}
        </div>
      </div>
    </>
  )
}

export default BeforeAuth