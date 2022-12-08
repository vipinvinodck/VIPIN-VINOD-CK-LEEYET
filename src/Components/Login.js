import React, { useState } from 'react'
import './registration.css'

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {

    const [logDetails, setLogdetails] = useState()
    const logData = (e) => {
        const { name, value } = e.target
        setLogdetails({
            ...logDetails,
            [name]: value

        })
        console.log(logDetails);
    }
    const login = (e) => {
        toast.success("Login Successfull");
        e.preventDefault();
        axios.post('https://api.oopacks.com/api/test/login', logDetails)
            .then(res => {
                console.log(res);

            })
    }
    console.log(logDetails);

  
    return (
        <div>
            <div className="login-card">
                <h2>Login</h2>
                <h3>Enter your credentials</h3>
                <form className="login-form">
                    <input name='emailorphonenumber' type="text" placeholder="Username" onChange={logData} />
                    <input name='password' type="password" placeholder="Password" onChange={logData} />
                    
                    <button type="submit" onClick={login}>LOGIN</button>
                    <a href="/pass">Forgot your password?</a>
                    <a href="/reg">New User? <span style={{ color: 'green' }}>Register</span></a>
                    <a  href="/input">Recover Profile</a>
                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}
