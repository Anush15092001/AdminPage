import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "../Pages/Login";


function Dashboard({toogle,settoggle}){
    return(
        <div className="w-full overflow-hidden" >
             <Navbar toogle={toogle} settoggle={settoggle}/>
        </div>
    )
}


export default Dashboard