import React from "react";
import { Link } from "react-router-dom";

function Cart({items,payment,remove}){
    return(
         <div className="">
          {items.map((products) => (
             <div className="d-md-flex d-sm-flex flex-md-row  flex-sm-column  border bg-light mb-2">
                  <div className="">
                     <img className="m-3" src={products.image} width={200} height={200}/>
                  </div>
                  <div className="m-3">
                      <p className="h6">{products.title}</p>
                      <div className="d-flex">
                      <h5 className="mt-1 text-muted text-decoration-line-through">${((products.price+50))}</h5>
                      <h3 className="text-dark fw-bold ms-3">${products.price}</h3>
                      </div>
                      <div>
                        <p className="text-success fw-bold">8% Off 4 offers applied</p>
                      </div>
                      <div className="mt-5 pt-2">
                      <button className='btn btn-danger rounded-start' onClick={() => {remove(products)}}>Remove</button>
                      </div>
                  </div>
                  <div class="container">
                         <div class="sm-col md-row">
                             <div class="col-sm-3"></div> 
                                 <div class="col-auto">
                                 <p className="mb-0 fw-">Delivered by 25th April</p>
                                 <p className="mt-1 text-muted ">$5 Delivery Charges</p>
                                 </div>
                              </div>
                          </div>
                   </div>
             ))}
             <div className="bg-white">
                 <h3 className="text-center">Total Amount ${payment}</h3>
                 <div className="text-center">
                   <Link to="/payment" className=""><button className='btn btn-lg btn-warning rounded-pill fw-bold text-white w-10' style={{width:"150px"}}>Buy</button></Link>
                 </div>
             </div>
         </div>
    )
}


export default Cart;