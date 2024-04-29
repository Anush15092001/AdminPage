import React from "react";
import Dash from "./Pages/Dashboard";
import Calender from "./Pages/Calendar";
import Forms from "./Pages/Forms";
import Profile from "./Pages/Profile";
import Tasks from "./Pages/Tasks";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";
import { SiGoogleforms } from "react-icons/si";
import { ImProfile } from "react-icons/im";
import { FaRegCalendarAlt } from "react-icons/fa";

const routes = [
    { path: '/dashboard', name: 'Dashboard', element: Dash , icon:<LuLayoutDashboard color="white" className="mt-4"/>},
    { path: '/calender', name:'Calender' , element: Calender ,icon:<FaTasks color="white" className="mt-4"/>},
    { path: '/forms', name:'Forms' , element: Forms, icon:<SiGoogleforms color="white" className="mt-4"/>},
    { path: '/profile', name:'Profile' , element: Profile, icon:<ImProfile color="white" className="mt-4"/>},
    { path: '/task', name:'Products' , element: Tasks,icon:<FaRegCalendarAlt color="white" className="mt-4"/>},
]


export default routes