import { Calendar } from "antd";
import React from "react";

function Calender({toogle}){
    return(
        <div className="mt-16 fixed grid md:grid-cols-1 sm:grid-cols-1 xxs:grid-cols-1 lg:grid-cols-1">
            <Calendar style={{height:300}}/>          
         </div>
    )
}

export default Calender;