import React from "react";
import { Link } from "react-router-dom";

function SignUp({input,handleChange}){
    console.log(input)
    return(
        <div className="bg-gray-50 min-h-screen flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 max-w-3xl w-full mt-5">
          <div className="bg-gray-50 shadow-xl rounded-lg p-8">
            <h3 className="text-black font-bold text-center text-3xl mb-8">
              NICHI-IN SOFTWARE SOLUTIONS
            </h3>
            <div className="space-y-4">
              <div>
                <h2 className="font-bold text-xl">NEW ACCOUNT</h2>
              </div>
              <div>
                <label className="font-bold italic">First Name</label>
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  name="fname"
                  className="text-gray-700 font-bold bg-white w-full px-3 py-2 rounded border"
                  required
                />
              </div>
              <div>
                <label className="font-bold italic">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Last Name"
                  name="lname"
                  className="text-gray-700 font-bold bg-white w-full px-3 py-2 rounded border"
                  required
                />
              </div>
              <div>
                <label className="font-bold italic">Email ID</label>
                <input
                  type="email"
                  placeholder="Enter Your E-MailId"
                  name="email"
                  className="text-gray-700 font-bold bg-white w-full px-3 py-2 rounded border"
                  value={input.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="font-bold italic">Password</label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  className="text-gray-700 font-bold bg-white w-full px-3 py-2 rounded border"
                  value={input.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="font-bold italic">Phone No</label>
                <input
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  name="phone"
                  className="text-gray-700 font-bold bg-white w-full px-3 py-2 rounded border"
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  value="Remember Me"
                  className="rounded border-gray-300 text-blue-500 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
                <p className="text-gray-700 ml-2 text-sm">Remember Me</p>
              </div>
              <div>
                <Link to={"/login"}>
                  <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg w-full h-10 mt-4">
                    SIGN UP
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default SignUp