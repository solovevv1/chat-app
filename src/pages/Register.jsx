import React from 'react'
import Add from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chat App</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder='enter name'  />
                <input type="email" placeholder='emial'  />
                <input type="password" placeholder='enter password'  />
                <input style={{display: 'none'}} type="file" id="file" />
                <label htmlFor="file">
                  <img src={Add} alt="" />
                  <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Do you have an account? Login</p>
        </div>
       
    </div>
  )
}

export default Register