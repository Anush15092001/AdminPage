import React, { useEffect, useState } from "react";
import Navbar from "./PageComp/Navbar";
import "./index.css";
import Sidebar from "./PageComp/Sidebar";
import routes from "./routers";
import { Routes, Route, Navigate,useLocation } from "react-router-dom";
import Dashboard from "./PageComp/Dashboard";
import Calender from "./Pages/Calendar";
import Forms from "./Pages/Forms";
import Profile from "./Pages/Profile";
import Tasks from "./Pages/Tasks";
import Login from "./Pages/Login";
import Dash from "./Pages/Dashboard";
import SignUp from "./Pages/Signup";
import Forgot from "./Pages/ForgotPassword";
function App() {
  const[toogle,settoggle]=useState(true);
  const path = useLocation();
  const [isLogin,setLogin] = useState(true);
  const [input,setInput]=useState([]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values, [name]: value}))
  }
  useEffect(()=>{
    const pathName = path.pathname;
    if(pathName=="/login")
    {
      setLogin(true)
    }
    else if(pathName=="/signup"){
       setLogin(true)
    }
    else if(pathName=="/forgotpassword"){
      setLogin(true)
    }
    else {
      setLogin(false)
    }
  },[path])
  return (
    <>
    {(isLogin ? 
    <div>
       <Routes>
       <Route path="/login" element={<Login input={input}/>} />
       <Route path="/signup" element={<SignUp input={input} handleChange={handleChange}/>} />
       <Route path="/forgotpassword" element={<Forgot input={input} handleChange={handleChange} />} />
       </Routes> 
    </div>
    :
    // <div className="grid grid-cols-1 sm:grid-cols-1">
    // <div  className="flex flex-row h-screen w-screen overflow-hidden">
    //   <div className=""> 
    //     <Sidebar toogle={toogle} />
    //   </div>
    //   <div className="h-screen w-screen overflow-y-auto"> 
    //   <div className="overflow-hidden">
    //     <Dashboard toogle={toogle} settoggle={settoggle} />  
    //   </div>
    //     <Routes>
    //       <Route path="/dashboard" element={<Dash  toogle={toogle}/>} />
    //       <Route path="/calender" element={<Calender toogle={toogle}/>} />
    //       <Route path="/forms" element={<Forms toogle={toogle}/>} />
    //       <Route path="/profile" element={<Profile toogle={toogle}/>} />
    //       <Route path="/tasks" element={<Tasks toogle={toogle}/>} />
    //     </Routes>
    //     </div>
    //     </div>
    // </div>)}
    <div className="grid grid-cols-1 sm:grid-cols-1">
      <div className="flex flex-row h-screen w-screen overflow-hidden">
        <Sidebar toogle={toogle} />
        <div className="h-screen w-screen overflow-y-auto">
          <div className="">
          <Dashboard toogle={toogle} settoggle={settoggle} />
            <Routes>
              <Route path="/dashboard" element={<Dash toogle={toogle} settoggle={settoggle}/>} />
              <Route path="/calendar" element={<Calender toogle={toogle} />} />
              <Route path="/forms" element={<Forms toogle={toogle} />} />
              <Route path="/profile" element={<Profile toogle={toogle}/>} />
              <Route path="/tasks" element={<Tasks toogle={toogle} />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
    )}
    </>
  );
}

export default App;
