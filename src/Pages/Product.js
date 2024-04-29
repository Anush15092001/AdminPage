import React, { useState,useEffect } from "react";


const Details=({id})=>{
    const[data,setData]=useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    });
    return (
        <div>
            {data && (
                <>
                    <div className="flex md:flex-row lg:flex-row sm:flex-col xxs:flex-col mt-[100px] m-6 border rounded-lg  p-4">
                    <div className=" mt-4 px-4 md:w-1/2 sm:w-full ">
                        <img className="border" src={data.image} style={{width:600}} alt="" />
                    </div>
                    <div className="px-5 md:w-1/2 sm:w-full mt-6">
                        <div>
                            <h4 className="text-lg font-semibold">{data.title}</h4>
                        </div>
                        <div className="flex mt-4">
                            <p className="badge bg-green-500">{data.rating?.rate}<span className="pl-2"></span></p>
                            <p className="text-gray-500 text-sm ml-2">& {data.rating?.count} Reviews</p>
                        </div>
                        <div className="flex">
                            <h3 className="text-black">${data.price}</h3>
                        </div>
                        <div className="border rounded-lg mt-4 p-4">
                            <h3 className="text-lg">Product Description</h3>
                            <p>{data.description}</p>
                        </div>
                    </div>
                    </div>
                </>
                
            )}
            
        </div>
    );
}

export default Details
    