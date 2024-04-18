import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Forgot(input){
    const[forgotdetails,setforgotdetails]=useState([])
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setforgotdetails(values => ({...values, [name]: value}))
      }
    return(
        <div className="bg-gray-50 flex justify-center  min-h-screen">
        <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-4 max-w-xl md:max-w-2xl w-full">
        <div className="mt-4"> 
           <p className="text-black font-bold text-center text-3xl ">NICHI-IN SOFTWARE SOLUTIONS</p>
        <div className="bg-white shadow-lg space rounded mt-8 p-4">
            <div className="">
                <h2 className="font-bold text-xl">Forgot Password ?</h2>
            </div>
            <div className="mt-4">
                <label className="font-bold italic">Email ID</label>
                <input type="email" placeholder="Enter Your E-MailId" name="email" className="text-gray-700 font-bold bg-white w-full px-3 py-2 rounded border" value={forgotdetails.name}  onChange={handleChange}required/>
            </div>
            {input.email===forgotdetails.email ?
            <div className="text-center">
                <p>{input.email===forgotdetails.email ? "Email Sent" : "Email Doesnt Exist"}</p>
            </div>:""}
            <div className="mt-4">
                 <Link to="/login"><button className="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg w-full h-10 mt-4">LOGIN</button></Link>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Forgot