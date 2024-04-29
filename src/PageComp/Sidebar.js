import React, { useEffect, useState } from "react";
import "../index.css"
import { Link } from "react-router-dom";
import routes from "../routers";

function Sidebar({toogle,settoggle}){
    const [select,setSelect]=useState(true)
    function handleClick(){
        console.log(window.innerWidth)
        setSelect(false) 
        settoggle(!toogle)
        if(window.innerWidth < 680){
            console.log(toogle)
            settoggle(!toogle)
        }else{ 
            console.log("bye")           
            setSelect(true)
        }
    }
    useEffect(()=>{
            console.log(toogle)
            setSelect(true)
    },[toogle])
    return( 
        <div className={`${toogle ? `${select ?  "": "xl:visible lg:visible md:visible xxs:invisible sm:invisible"}` : `hidden` } shadow-lg bg-gray-800 sm:w-[250px] h-full lg:relative xxs:fixed xxs:top-14 md:relative sm:fixed md:top-0 sm:top-10 left-0 z-30`}>
        <div className="mt-4">
        <div className="m-2 grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        {routes.map((values) => (
        <div className="flex hover:shadow hover:bg-blue-500 rounded " key={values.path}>
                <div>{values.icon}</div>
                  <Link to={values.path} onClick={()=>{handleClick()}}><p className="text-white font-bold p-3 mx-2 hover:text-white">{values.name}</p></Link> 
               </div>
               ))}
        </div>
        </div>
    </div>
    )
}

export default Sidebar