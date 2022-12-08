import React, { useState } from 'react'
import './registration.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
export default function Registration() {
    const [state, setstate] = useState(false)
    const [credential, setCredential] = useState()


    const validMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validPhoneno = /^\d{10}$/;



    const submit = (e) => {
        e.preventDefault();
        if (credential.emailorphonenumber.match(validMail) || credential.emailorphonenumber.match(validPhoneno)) {

            toast.success("Registration Successfull");
            axios.post('https://api.oopacks.com/api/test/register', credential)
                .then(res => {
                    console.log(res);
                    localStorage.setItem('token', JSON.stringify(res.data.token))
                })
        } else {
            setstate(true)
        }
    }


    const registration = (e) => {
        const { name, value } = e.target
        setCredential({
            ...credential,
            [name]: value

        })
        console.log(credential);
    }

    return (
        <div>
            <div className="registation-card">
                <h2><b>Registration</b></h2>
                <h3>Enter your credentials</h3>
                <form className="login-form">
                    <input name='emailorphonenumber' type="text" placeholder="Email/Phone Number" onChange={registration} />
                    {state === true ? <span style={{ color: 'red' }}>Invalid Phone Number or Email</span> : ""}
                    <input name='firstName' type="text" placeholder="First Name" onChange={registration} />
                    <input name='lastName' type="text" placeholder="Last Name" onChange={registration} />
                    <input name='password' type="password" placeholder="Password" onChange={registration} />
                    <button onClick={submit} type="submit">Register</button>
                    <a href="/input">Recover Profile</a>
                    <a  href="/">🔄 Back to Login</a>
                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}
