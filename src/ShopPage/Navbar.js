import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {IoCartOutline} from "react-icons/io5";


function ShopNavbar({prod,cart}){
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        const filteredSuggestions = prod.filter(prod=>
          prod.title.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions.slice(0,3));
        }
        const handleRedirect = (url) => {
            window.location.href = url;
          };
    return(
        <div>
        <div className="navbar navbar-expand-sm bg-dark" >
            <nav className="container-fluid">
            <ul className="navbar-nav ">
                <li className="nav-item h4"><Link to="/" className="nav-link text-white">Product</Link></li> 
                <div className="d-flex">
                   <li className="nav-item h4 "><Link to="/cart" className="nav-link text-white">Cart</Link></li>
                   {cart.length > 0 &&
                   <p className="badge bg-danger rounded-pill flex justify-content-center" style={{maxHeight:"22px"}}>{cart.length}</p>
                    }
                </div>           
                <li className="nav-item h4 "><Link to="/payment" className="nav-link text-white">Payment</Link></li>
                <div className=" h-50 w-75 py-2 ">
                <input type="text" value={searchTerm} placeholder="Search For Products" className="rounded-start border-none form-control" onChange={handleChange}/>
                </div>
            </ul>
             <div >
                <IoCartOutline color="white" size={50}/>
             </div>
            </nav>
        </div>
        {suggestions.length > 0 && (
                 <ul className="list-group position-absolute w-40 " style={{ zIndex: "10",left: "250px"}}>
                 {suggestions.map((prod, id) => (
                     <li key={id} className="list-group-item" onClick={() => handleRedirect(`/product/${prod.title}`)}>
                         {prod.title}
                     </li>
                 ))}
             </ul>
                 )}
     </div>
    )
}


export default ShopNavbar;