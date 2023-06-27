import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Register = () => {
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",

    })
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({
            ...userData,
            [name]: value
        })
    }

    const registerHandle = () => {
        const { userName, email, password, confirmPassword } = userData
        if (userName && email && password && (password === confirmPassword)) {
            axios.post("http://localhost:8000/register", userData)
                .then(res => console.log(res))
        }
        else {
            alert("invalid inputs")
        }

    }
    console.log(userData)
    return (
        <>
            <div className='signup-box'>
                <div className="login-heading">
                    <h1 className='sign' >Register</h1>
                </div>
                <div className="user-container">
                    <label className='email-address'>User Name</label>
                    <input className='email' type="text" placeholder='Enter your name' value={userData.userName} name='userName' onChange={handleChange} />
                </div>
                <div className="email-container">
                    <label className='email-address'>Email Address</label>
                    <input className='email' type="text" placeholder='Enter your email' value={userData.email} name='email' onChange={handleChange} />
                </div>
                <div className="password-container">
                    <label className='password'>Password</label>
                    <input className='pass' type="password" placeholder='Enter your password' value={userData.password} name='password' onChange={handleChange} />
                </div>
                <div className="password-container">
                    <label className='password'>Confirm Password</label>
                    <input className='pass' type="password" placeholder='Enter your password' value={userData.confirmPassword} name='confirmPassword' onChange={handleChange} />
                </div>
                <div className="btn-container">
                    <button className='submit' onClick={registerHandle}>Register</button>
                    <span>or</span>
                    <button className='submit'>Login</button>
                </div>
            </div>
        </>
    )
}

export default Register
