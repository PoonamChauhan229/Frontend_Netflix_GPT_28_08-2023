import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Components/Header"
import Browse from "./Components/Browse";

function App() {
  return (
   
        <div>          
           <Header/>
            <Routes>
              <Route exact path="/" element={<Login/>} />
             
              <Route exact path="/browse" element={<Browse/>} />
              
              
            </Routes>
        </div>
  
  );
}

export default App;

