import React from "react";
import { useState,useEffect } from "react";
import {IoStar} from "react-icons/io5"
import {IoMdPricetag,IoMdCart,IoIosThunderstorm} from  "react-icons/io"
import { Link } from "react-router-dom";

function SingleProd({sendid,addcart}){
    console.log(sendid);
    const [getid,setid]=useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${sendid}`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setid(data);
          });
      }, []);
      console.log(getid)
    return(
        <div className="d-md-flex d-sm-flex flex-md-row  flex-sm-column mt-2">
          {getid &&(
            <>
           <div className="mt-4 px-4 col-md-5 col-sm-12" >
                <img  className="border"src={getid.image} style={{width:'-webkit-fill-available'}}></img>
                <div className="d-flex mt-5 ms-4 flex-wrap">
                   <button className='btn btn-lg btn-warning text-white h6' onClick={() => {addcart(getid)}}><span className="me-1"><IoMdCart /></span>Add To Cart</button>
                   <Link to={"/payment"}><button className="btn btn-lg btn-info text-white h6 ms-md-3" onClick={() => {addcart(getid)}}><span className="me-1"><IoIosThunderstorm/></span>Buy Now</button></Link>
                </div>
            </div>
            <div className="px-5 col-md-7 col-sm-12">
               <div>
               <h4 className="h4 ">{getid.title}</h4>
               </div>
               <div className="d-flex mt-4 ">
                <p className="badge bg-success">{getid.rating?.rate}<span className="ps-2"><IoStar color="white"/></span></p>
                <p className="text-muted h6 ms-2"> & {getid.rating?.count} Reviews</p>
               </div>
               <div className="d-flex">
                  <h3 className="text-dark">${getid.price}</h3>
                  <h5 className="ms-3 mt-1 text-muted text-decoration-line-through">${(getid.price+50)}</h5>
               </div>
               <div className="mt-3">
                  <h5 className="fw-bold">Available offers</h5>
                  <p><span className="me-2"><IoMdPricetag color="green" size={20}/></span><span className="fw-bold me-1">Bank Offer</span>Get ₹25* instant discount for the 1st Flipkart Order using Flipkart UPI T&C</p>
                  <p><span className="me-2"><IoMdPricetag color="green" size={20}/></span><span className="fw-bold me-1">Bank Offer</span>Flat ₹2,500 off on HDFC Bank Credit Card EMI Txns on 6 and 9 months tenure, Min. Txn Value: ₹50,000 T&C</p>
                  <p><span className="me-2"><IoMdPricetag color="green" size={20}/></span><span className="fw-bold me-1">Bank Offer</span>Flat ₹3,500 off on HDFC Bank Credit Card EMI Txns on 12 months tenure, Min. Txn Value: ₹50,000 T&C</p>
                  <p><span className="me-2"><IoMdPricetag color="green" size={20}/></span><span className="fw-bold me-1">Special Price</span>Get extra ₹4901 off (price inclusive of cashback/coupon) T&C</p>
               </div>
               <div className="card">
                 <div className="card-body" >
                     <h3 className="card-text">Product Description</h3>
                 </div>
                 <div className="border card-body">
                     <p>{getid.description}</p>
                 </div>
               </div>
            </div>
            </>
            )}
            
        </div>
    )
}

export default SingleProd