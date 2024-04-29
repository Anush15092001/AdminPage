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
import Details from "./Pages/Product";
function App() {
  const[logdetails,setlogdetails]=useState([])
  const[toogle,settoggle]=useState(true);
  const path = useLocation();
  const [isLogin,setLogin] = useState(true);
  const [input,setInput]=useState([]);
  const [id,setId]=useState([]);
  const [data,setData]=useState([])
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((data) => setData(data));
}, []);
  
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values, [name]: value}))
  }
  useEffect(()=>{
    const pathName = path.pathname;
    if(pathName=="/")
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
       <Route path="/" element={<Login logdetails={logdetails} setlogdetails={setlogdetails}/> } />
       <Route path="/signup" element={<SignUp input={input} handleChange={handleChange}/>} />
       <Route path="/forgotpassword" element={<Forgot input={input} handleChange={handleChange} />} />
       </Routes> 
    </div>
    :
<div className="grid grid-cols-1 sm:grid-cols-1">
  <div className="flex flex-row h-screen w-screen overflow-hidden sm:overflow-x-auto">
    <Sidebar toogle={toogle}  settoggle={settoggle}/> 
    <div className=" h-screen w-screen overflow-y-auto flex flex-col flex-grow">
      <div className="flex-shrink-0">
        <Dashboard toogle={toogle} settoggle={settoggle} />
      </div>
      <div className={`${toogle ? "lg:not-sr-only md:not-sr-only xxs:sr-only sm:sr-only" : ""} overflow-y-auto flex-grow`}>
        <Routes>
          <Route path="/dashboard" element={<Dash toogle={toogle} settoggle={settoggle} />} />
          <Route path="/calender" element={<Calender toogle={toogle} />} />
          <Route path="/forms" element={<Forms toogle={toogle} />} />
          <Route path="/profile" element={<Profile toogle={toogle} logdetails={logdetails}  />} />
          <Route path="/task" element={<Tasks toogle={toogle} setid={setId}/>} />
          {data.map((row) => (
            <Route
              key={row.id} 
              path={`/products/${row.id}`} 
              element={<Details id={row.id} />} 
            />
          ))}
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
