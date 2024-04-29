import React from "react";
import Navbar from "./Navbar";

function Dashboard({toogle,settoggle}){
    return(
        <div className="w-full overflow-hidden fixed top-0" >
             <Navbar toogle={toogle} settoggle={settoggle}/>
        </div>
    )
}


export default Dashboard