
import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
function Navbar({ toogle, settoggle }) {
    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    };
    return (
        <div className="w-full">
            <header className="fixed top-0 z-50 sm:relative w-full h-[60px] bg-gray-800 flex justify-between items-center px-4 sm:px-6 md:px-8">
                <div className="flex items-center">
                    <FaBars size={30} color="white" onClick={() => settoggle(!toogle)} />
                    <div className="flex items-center ml-4">
                        <RiAdminFill size={30} color="white" />
                        <h3 className="text-white text-xl font-bold ml-2">Nichi-IN Software Solutions</h3>
                    </div>
                </div>
                <div className="relative xxs:absoulte">
                    <button className="text-white relative" onClick={toggleDropdown}>
                        <CgProfile size={40} color="white" />
                        {dropdown && (
                            <div className="absolute top-full right-0 mt-2 w-32 bg-gray-800 rounded-lg py-1">
                                <ul className="text-white">
                                    <li className="font-bold"><Link to="#">Profile</Link></li>
                                    <li className="font-bold"><Link to="/">Logout</Link></li>
                                </ul>
                            </div>
                        )}
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
