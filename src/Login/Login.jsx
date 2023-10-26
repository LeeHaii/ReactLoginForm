import { useState, useEffect } from "react";
import './Login.css'

function Login() {

    return (
        <>
            <input className='Input' id='EmailInput' type="text" placeholder='Email Address' />
            <div className="pass">
                <input className='Input' id='PasswordInput' type="password" placeholder='Password' />
                <a className='ForgotPassword' href="">Forgot password?</a>
            </div>
            <button className='LoginButton'>Login</button>
            <div className='SignupNow'>
                Not a member?
                <a href="">Signup now</a>
            </div>
        </>
    )
}

export default Login