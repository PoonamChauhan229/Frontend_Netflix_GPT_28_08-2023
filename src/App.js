import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Header from "./Components/Header"

function App() {
  return (
   
        <div>          
           
            <Routes>
              <Route exact path="/" element={<Login/>} />
              <Route exact path="/" element={<Header/>} />
              
              
            </Routes>
        </div>
  
  );
}

export default App;

