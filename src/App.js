import { Route, Routes,Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Components/Header"
import Browse from "./Components/Browse";
import { useState } from "react";
import Home from "./Components/Home";
import './App.css'

function App() {
const [isAuthenticated,setIsAuthenticated]=useState(false)
  return (
   
        <div>          
          
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path="/login" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>} />

              {/* <Route path="/login/:showSignUpForm" element={<Navigate replace to ="/login"/>}/> */}

                  <Route path="/login/:param" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>} />

            {isAuthenticated ? (
          <Route exact path="/browse" element={<Browse />} />
        ) : (
          // Redirect to the home page if the user is not authenticated
          <Route path="/browse" element={<Navigate to="/" />} />
        )}  
              
            </Routes>
        </div>
  
  );
}

export default App;

