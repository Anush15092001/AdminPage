import React from "react";
import { useState,useEffect } from "react";

const Profile =({logdetails})=>{
    const[input,setInput]=useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/users`)
            .then((res) => res.json())
            .then((data) => setInput(data));
    }, []);
    const filtered = input.filter((row)=>row.email===logdetails.email)
    console.log(filtered)
    return(
        <div className="mt-16 flex justify-center place-items-center grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xxs:grid-cols-1 flex flex-col justify-center">
            <div className="h-full mt-16 flex flex-col justify-center  bg-white shadow-xl border rounded-xl  p-4 md:w-[500px] sm:w-[300px] xxs:w-[300px]">
                <div className="text-center">
                    <h3 className="font-bold text-2xl">USER DETAILS</h3>
                </div>
                <div className="mt-8 mx-4">
                    <h3 className="text-xl font-bold">First Name : <span className="text-blue-500 mx-4">{filtered.map((row)=>(row.name.firstname).toUpperCase())}</span></h3>
                </div>
                <div className="mt-2 mx-4">
                    <h3 className="text-xl font-bold">Last Name : <span className="text-blue-500 mx-4">{filtered.map((row)=>(row.name.lastname).toUpperCase())}</span></h3>
                </div>
                <div className="mt-2 mx-4">
                    <h3 className="text-xl font-bold">Phone No : <span className="text-blue-500 mx-6">{filtered.map((row)=>(row.phone).toUpperCase())}</span></h3>
                </div>
                <div className="mt-2 mx-4">
                    <h3 className="text-xl font-bold">User Name : <span className="text-blue-500 mx-4">{filtered.map((row)=>(row.username))}</span></h3>
                </div>
                <div className="mt-2 mx-4">
                  <h3 className="text-xl font-bold">Email ID : <span className="text-blue-500 mx-10">{filtered.map((row)=>(row.email))}</span></h3>
                </div>
            </div>
        </div>
    )
}

export default Profile;