import React from "react";
import { Link} from "react-router-dom";
import { useState } from "react";
import { PiNumberCircleOneBold,PiNumberCircleTwoBold } from "react-icons/pi";

function Payment({pay,emptyCart}){
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (id) => {
      setSelectedImage(id);
    };
    
    return(
        <div className="m-2">
        <div className="ms-5">    
              <h3 className="h2">Payment </h3>
        </div>
        <div className="ms-5">
           <h3 className="h4">Your Total Amount <span className="text-primary">${pay}</span></h3>
        </div>
        <div className="ms-5 mt-3">
            <h3 className="h4">Choose payment method below</h3>
        </div>
        <div className="d-md-flex d-sm-flex flex-md-row  flex-sm-column  ms-5 mt-4  w-100">
            <img id="image1"   className={`border me-md-5  mt-sm-4 mt-xs-4 ${selectedImage === 'image1' ? 'bg-light border-5 border-success' : ''}`} width={300} height={200}  onClick={() => handleImageClick('image1')} src="upi.png" alt=""/>
            <img id="image2"   className={`border me-md-5 mt-sm-4 mt-xs-4 ${selectedImage === 'image2' ? 'bg-light border-5 border-success' : ''}`} width={300} height={200}  onClick={() => handleImageClick('image2')} src="credit.png" alt=""/>
            <img id="image3"   className={`border me-md-5 mt-sm-4 mt-xs-4 ${selectedImage === 'image3' ? 'bg-light border-5 border-success' : ''}`} width={300} height={200}  onClick={() => handleImageClick('image3')} src="apple.png" alt=""/>
        </div>
        <div className="d-md-flex d-sm-flex flex-md-row  flex-sm-column md-justify-content-around mt-5 ">
            <div className="border rounded-start w-100">
                <h3 className="ms-5 mt-4"><span className="me-2 h3"><PiNumberCircleOneBold color="blue"/></span>Billing Info</h3>
                <form className="m-5">
                  <div class="">
                    <label for="name" class="form-label h6">Full Name</label>
                   <input type="text" class="form-control" id="name" placeholder="Enter Your Name" name="name" />
                    </div>
                 <div class="mt-3">
                   <label for="add" class="form-label h6">Billing Address</label>
                   <input type="text" class="form-control" id="add" placeholder="Enter Delivery Address" name="add" />
                 </div>
                 <div className="d-md-flex">
                 <div class="mt-3">
                   <label for="city" class="form-label h6">City</label>
                   <input type="text" class="form-control" id="city" placeholder="City" name="city" />
                 </div>
                 <div class="mt-3 ms-md-5">
                   <label for="code" class="form-label h6">Zip  Code</label>
                   <input type="text" class="form-control" id="code" placeholder="Zip Code" name="code" />
                 </div>
                 </div>
                 <div class="mt-3">
                   <label for="country" class="form-label h6">Country</label>
                   <select class="form-select">
                           <option selected hidden>Country</option>
                           <option>India</option>
                           <option>Japan</option>
                           <option>America</option>
                           <option>Africa</option>
                   </select>
                 </div>
                 </form>
            </div >
            <div className="border rounded-start sm-mt-5 w-100 ms-md-5">
                <h3 className="ms-5 mt-4"><span className="me-2 h3"><PiNumberCircleTwoBold color="blue"/></span>CreditCard Details</h3>
                <form className="m-5">
                  <div class="">
                    <label for="cdname" class="form-label h6">CreditCardHolder's Name</label>
                   <input type="text" class="form-control" id="cdname" placeholder="Name" name="cdname" />
                    </div>
                 <div class="mt-3">
                   <label for="card" class="form-label h6">Card No</label>
                   <input type="text" class="form-control" id="card" placeholder="Enter Card No" name="card" />
                 </div>
                 <div className="d-md-flex flex-wrap">
                 <div class="mt-3">
                   <label for="city" class="form-label h6">Exp Month</label>
                   <select class="form-select">       
                           <option selected hidden>Month</option>
                           <option>01</option>
                           <option>02</option>
                           <option>03</option>
                           <option>04</option>
                           <option>05</option>
                           <option>06</option>
                           <option>07</option>
                           <option>08</option>
                           <option>09</option>
                           <option>10</option>
                           <option>11</option>
                           <option>12</option>
                   </select>
                 </div>
                 <div class="mt-3 ms-md-5">
                 <label for="city" class="form-label h6">Exp Year</label>
                   <select class="form-select">
                           <option selected hidden>Year</option>
                           <option>2035</option>
                           <option>2034</option>
                           <option>2033</option>
                           <option>2032</option>
                           <option>2031</option>
                           <option>2030</option>
                           <option>2029</option>
                           <option>2028</option>
                           <option>2027</option>
                           <option>2026</option>
                           <option>2025</option>
                           <option>2024</option>
                   </select>
                 </div>
                 </div>
                 <div class="mt-3">
                   <label for="cvv" class="form-label h6">CVV No</label>
                   <input type="text" class="form-control" id="cvv" placeholder="Enter CVV" name="cvv" />
                 </div>
                 </form>
            </div>
             <div>
            </div>
            
        </div>
        <div className="d-flex justify-content-between mt-4 flex-wrap">
        <div className="ms-5">
        <Link to={"/cart"}><button className="btn btn-outline-dark">Return To Cart</button></Link>
        </div>
         <div className="me-lg-5 pe-lg-5">
         <Link to={"/proceed"}><button className="btn btn-primary" onClick={()=>emptyCart()}>Proceed</button></Link>
         </div>
        </div>
        </div>
    )
}


export default Payment;