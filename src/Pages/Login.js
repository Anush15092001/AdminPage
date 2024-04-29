import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";


function Login({logdetails,setlogdetails}){
    const[input,setInput]=useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/users`)
            .then((res) => res.json())
            .then((data) => setInput(data));
    }, []);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setlogdetails(values => ({...values, [name]: value}))
      }
      console.log(logdetails)
      console.log(input.map((row)=>row.email).includes(logdetails.email))
    return(
        <div className="bg-gray-50 flex justify-center  min-h-screen">
        <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-4 max-w-xl md:max-w-2xl w-full">
        <div className="mt-4"> 
           <p className="text-black font-bold text-center text-3xl ">NICHI-IN SOFTWARE SOLUTIONS</p>
        <div className="bg-white shadow-lg space rounded mt-8 p-4">
            <div className="">
                <h2 className="font-bold text-xl">Enter Your Details</h2>
            </div>
            <div className="mt-4">
                <label className="font-bold italic">Email ID</label>
                <input type="email" placeholder="Enter Your E-MailId" name="email" className="text-gray-700 font-bold bg-white w-full px-3 py-2 rounded border" value={logdetails.email} onChange={handleChange} required/>
            </div>
            <div className="mt-4">
                <label className="font-bold italic">Password</label>
                <input type="password" placeholder="Enter Your Password" name="password" className="text-gray-700 font-bold bg-white w-full px-3 py-2 rounded border" value={logdetails.password} onChange={handleChange} required/>
            </div>
            <div className="flex md:flex-row sm:flex-col  xs:flex-col justify-between mt-4  ">
                <div className="flex">
                   <input type="checkbox" value="Remember Me"  className="mt-1" />
                    <p className="mx-2 text-sm font-bold">Remember Me</p>
                </div> 
                <div className="">
                <a href="/forgotpassword" className="underline underline-blue text-blue-500 font-bold text-sm">Forgot Password</a>
                </div>
            </div>
            <div className="mt-4 text-center">
                <h2 className="font-bold text-sm">No Account ?<a href="/signup" className="underline underline-blue text-blue-500 text-sm  mx-2">Click Here</a></h2>
            </div>
            {input.map((row)=>row.email).includes(logdetails.email) && input.map((row)=>row.password).includes(logdetails.password)? 
            <div className="mt-4 text-center">
                 <p className="text-green-500">{input.map((row)=>row.email).includes(logdetails.email) && input.map((row)=>row.password).includes(logdetails.password) ? "The Email And Password Matched" :"Wrong Email or Password" }</p>
            </div> : 
            ""
            }
            {input.map((row)=>row.email).includes(logdetails.email) && input.map((row)=>row.password).includes(logdetails.password) ? 
            <div className="mt-4 ">
                <Link to="/dashboard"><button className="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg w-full h-10 mt-4">LOGIN</button></Link>
            </div>
            :
            <div className="mt-4">
                 <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg w-full h-10 mt-4">LOGIN</button>
            </div>
            }
        </div>
        </div>
        </div>
        </div>
    )
}

export default Login
