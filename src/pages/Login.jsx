import React from 'react'
import Add from '../img/addAvatar.png'

const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chat App</span>
            <span className="title">Login</span>
            <form>                
                <input type="email" placeholder='emial'  />
                <input type="password" placeholder='enter password'  />                
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
       
    </div>
  )
}

export default Login