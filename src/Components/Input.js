import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Input() {
    const [number,setNumber]=useState()

const otp=(e)=>{
    e.preventDefault();
      const { name, value } = e.target
        setNumber({
            ...number,
            [name]: value

        })
        console.log(number);
}
const otpsent=(e)=>{
    toast.success("OTP Sent");
    e.preventDefault();
    axios.post('https://api.oopacks.com/api/auth/sendotp', number)
        .then(res => {
            console.log(res);
        })
}

    return (
        <div>
            <div>
                <div>
                    <div className="login-card">
                        <h2>Profile Recovery</h2>
                        <form className="login-form">
                            <h3 className='dull'>Enter OTP </h3>  
                            <input name='phonenumber' type="text" placeholder="Phone Number" onChange={otp} />
                            <button type="submit" onClick={otpsent} >Sent OTP</button>
                            <input name='phonenumber' type="text" placeholder="Enter OTP" />
                            <button type="submit"  >Confirm</button>
                            <a  href="/">🔄Back to Login</a>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
