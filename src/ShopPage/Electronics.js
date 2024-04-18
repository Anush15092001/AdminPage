import React from "react";
import { Link } from "react-router-dom";
import Filters from "./Filters";



const Electronics = ({ items,addcart,toogle,id}) => {
    return (  
      <div>
      <Filters />
      <div className="container-fluid"> 
      <div className="row">
    {items.map((products) => (
        <div className='col-md-3 mb-3' key={products.id}>
          <div className='card d-flex align-items-center justify-content-center border rounded-start'>
            <div className='w-50 py-3'>
              <Link to={`/product/${products.title}`}>
                <img src={products.image} height={150} className='card-img' alt={products.title} />
              </Link>
            </div>
            <div className='card-body'>
              <h5 className='card-title h6'>{(products.title).substring(0,20)}..</h5>
              <p className='m-0 mb-1'>Category: {products.category}</p>
              <p className='m-0 mb-1'>Price: {products.price} $</p>
              <div className='d-flex mt-4'>
                  <button className='btn btn-success rounded-start' onClick={() => {addcart(products)}}>Add To Cart</button>
                  <button className='btn btn-primary rounded-start' style={{marginLeft:"10px"}} onClick={()=>{
                    id(products.id);
                  }}><Link to={"/productDetails"} className='text-white text-decoration-none'>View Details</Link></button>
              </div>
            </div>
          </div>
        </div>
    ))}
        </div>
  </div>
  </div>  
    );
  };


export default Electronics