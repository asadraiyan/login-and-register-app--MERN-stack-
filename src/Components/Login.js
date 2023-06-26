import React from 'react'
import { useState } from 'react'
const Login = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({
            ...userData,
            [name]: value
        })
    }
    return (
        <>
            <div className='login-box'>
                <div className="login-heading">
                    <h1 className='log'>Login</h1>
                </div>
                <div className="email-container">
                    <label className='email-address'>Email Address</label>
                    <input className='email' type="text" placeholder='Enter your email' value={userData.email} name='email' onChange={handleChange} />
                </div>
                <div className="password-container">
                    <label className='password'>Password</label>
                    <input className='pass' type="password" placeholder='Enter your password' value={userData.password} name='password' onChange={handleChange} />
                </div>
                <div className="btn-container">
                    <button className='submit'>Login</button>
                    <span>or</span>
                    <button className='submit'>Register</button>
                </div>
            </div>
        </>
    )
}

export default Login
