import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Filters = ({ }) => {
    const [takeid,settakeid] = useState(null)

    const fetchid = (tak) => {
      settakeid(tak);
    };
    return(
    <div className="cointainer py-4 px-3">
    <div className="d-flex flex-wrap">
       <button id='button1' className={`btn btn-outline-primary  ${takeid=== 'button1' ? 'bg-primary' : ''}`} onClick={()=>fetchid('button1')} style={{marginLeft:"10px",marginBottom:"10px"}}><Link className="text-dark h5 text-decoration-none" to={"/mens"}>Mens</Link></button>
       <button id="button2" className={`btn btn-outline-primary  ${takeid=== 'button2' ? 'bg-primary' : ''}`} onClick={()=>fetchid("button2")} style={{marginLeft:"10px",marginBottom:"10px"}} ><Link className="text-dark h5 text-decoration-none" to={"/womens"}>Womens</Link></button>
       <button id="button3" className={`btn btn-outline-primary  ${takeid=== 'button3' ? 'bg-primary' : ''}`} onClick={()=>fetchid("button3")} style={{marginLeft:"10px",marginBottom:"10px"}}><Link className="text-dark h5 text-decoration-none" to={"/electronics"}>Electronics</Link></button>
       <button id="button4" className={`btn btn-outline-primary  ${takeid=== 'button4' ? 'bg-primary' : ''}`} onClick={()=>fetchid("button4")} style={{marginLeft:"10px",marginBottom:"10px"}}><Link className="text-dark h5 text-decoration-none" to={"/jewelery"}>Jewelery</Link></button>
    </div>
    </div> 
    )
}

export default Filters