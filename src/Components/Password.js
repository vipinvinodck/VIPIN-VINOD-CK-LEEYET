import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Password() {

    const [password, setPassword] = useState()
    const changing = (e) => {
       
        const { name, value } = e.target
        setPassword({
            ...password,
            [name]: value

        })
    }

    console.log(password);
    const passwordChange = (e) => {
        toast.success("Password Changed Successfully");
        e.preventDefault();
        axios.put('https://api.oopacks.com/api/test/forgotpassword', password)
            .then(res => {
                console.log(res);

            })
    }
    console.log(password);
    return (
        <div>
            <div>
                <div className="login-card">
                    <h2>Reset Password</h2>

                    <form className="login-form">
                        <input name='emailorphonenumber' type="text" placeholder="Username" onChange={changing} />
                        <input name='password' type="password" placeholder="Password" onChange={changing} />
                        <button type="submit" onClick={passwordChange} >RESET</button>
                        <a  href="/">🔄 Back to Login</a>
                        <ToastContainer />

                    </form>
                </div>
            </div>
        </div>
    )
}
