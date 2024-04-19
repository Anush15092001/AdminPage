import React from "react";
import "../index.css"
import { LuLayoutDashboard } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";
import { ImProfile } from "react-icons/im";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar({toogle}){
    return(
        <div className={`${toogle ? "" : "hidden"} shadow-lg bg-gray-800 mt-0 sm:w-[250px] h-full`}>
        <div className="mt-8">
        <div className="text-center">
            <h3 className="text-white font-bold">MENU</h3>
        </div>
        <div className="m-2 grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
            <div className="flex hover:shadow hover:bg-blue-500 rounded hover:p-2">
                <LuLayoutDashboard color="white" className="mt-4"/>
                <Link to={"/dashboard"}><p className="text-white font-bold p-3 mx-2 hover:text-white">Dashboard</p></Link> 
            </div>
            <div className="flex hover:shadow hover:bg-blue-500 rounded hover:p-2">
                <FaRegCalendarAlt color="white" className="mt-4"/>
                <Link to={"/calender"}><p className="text-white font-bold p-3 mx-2 hover:text-white">Calendar</p></Link>
            </div>
            <div className="flex hover:shadow hover:bg-blue-500 rounded hover:p-2">
                <ImProfile color="white" className="mt-4"/>
                <Link to={"/profile"}><p className="text-white font-bold p-3 mx-2 hover:text-white">Profile</p></Link>
            </div>
            <div className="flex hover:shadow hover:bg-blue-500 rounded hover:p-2">
                <FaTasks color="white" className="mt-4"/>
                <Link to={"/tasks"}><p className="text-white font-bold p-3 mx-2 hover:text-white">Tasks</p></Link>
            </div>
            <div className="flex hover:shadow hover:bg-blue-500 rounded hover:p-2">
                <SiGoogleforms color="white" className="mt-4"/>
                <Link to={"/forms"}><p className="text-white font-bold p-3 mx-2 hover:text-white">Forms</p></Link>
            </div>
        </div>
        </div>
    </div>
    
    
    )
}

export default Sidebar