 import React from "react";
 import '../index.css'
 import { CgProfile } from "react-icons/cg";
 import { RiAdminFill } from "react-icons/ri";
 import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({toogle,settoggle}){
    return(
        <div className="w-full">
            <header className="h-[60px] bg-gray-800 flex justify-between w-full" >
                <div className="flex">
                <div className="mt-3">
                   <FaBars size={30} color="white" onClick={()=>settoggle(!toogle)}/>
                </div>
                <div className="flex mt-3 mx-4">
                    <RiAdminFill size={30} color="white"/>
                    <h3 className="text-white text-2xl font-bold mx-2">Nichi-IN Software Solutions</h3>
                </div>
                </div>
                <div className="relative mx-4 mt-1">
                    <button className="text-white group">
                       <CgProfile  size={40} color="white" />
                       <div className="z-10 hidden absolute rounded-lg bg-gray-800 w-32 h-16 group-focus:block top-full right-0">
                        <ul className="mt-3 text-white">
                            <li className="font-bold"><Link>Profile</Link></li>
                            <li className="font-bold"><Link to="/login">Logout</Link></li>
                        </ul>
                       </div>
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Navbar