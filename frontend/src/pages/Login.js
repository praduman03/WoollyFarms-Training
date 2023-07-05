import React from 'react'
import "../App.css"

function Login() {
  return (
    <div className='Login-page'>
        <div className="Login-container">
            <div className='Login-form'>
                <h1>Create Account</h1>
                <div className='google'>
                    <a href='#' className='google-a-tag'> <i class="fab fa-google-plus-g"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button>Sign Up</button>
            </div>
            <div className='above'>
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                    <button id='signin-Button'>Sign In</button>
            </div>
        </div>
    </div> 
  )
}

export default Login
