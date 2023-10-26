import { useState, useEffect } from "react";
import './Signup.css'

function SignUp() {

    return (
        <>
            <input className='Input' id='UserNameInput' type="text" placeholder='User Name' />
            <input className='Input' id='EmailInput' type="text" placeholder='Email Address' />
            <input className='Input' id='PasswordInput' type="password" placeholder='Password' />
            <button className='LoginButton'>SignUp</button>
        </>
    )
}

export default SignUp