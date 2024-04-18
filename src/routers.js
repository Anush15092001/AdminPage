import React from "react";
import Dash from "./Pages/Dashboard";
import Calender from "./Pages/Calendar";
import Forms from "./Pages/Forms";
import Profile from "./Pages/Profile";
import Tasks from "./Pages/Tasks";

const routes = [
    { path: '/dashboard', name: 'Dashboard', element: Dash },
    { path: '/calender', name:'Calender' , element: Calender},
    { path: '/forms', name:'forms' , element: Forms},
    { path: '/profile', name:'profile' , element: Profile},
    { path: '/task', name:'task' , element: Tasks},

]



export default routes