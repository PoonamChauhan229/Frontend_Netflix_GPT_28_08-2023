import { Route, Routes,Navigate } from "react-router-dom";
import Login from "./Components/Login";
import { useState } from "react";
import Home from "./Components/Home";
import './App.css'
import Profile from "./Components/Profile";
import { ProfileNavbar } from "./Components/ProfileNavbar";
import WatchPage from "./Components/WatchPage";
import Browse from "./Components/Browse";
import { WatchList } from "./Components/WatchList";
import TVShowsBrowse from "./Components/TVShows/TVShowsBrowse";
import MoviesBrowse from "./Components/Movies/MoviesBrowse";
import NewPopularBrowse from "./Components/NewPopular/NewPopularBrowse";
import Footer from "./Components/Footer";

function App() {
const [isSignInForm, setIsSignInForm] = useState(false);
const[isSignUpForm,setIsSignUpForm]=useState(false)

const [isAuthenticated,setIsAuthenticated]=useState(false)
  return (
   
        <div>          
          
            <Routes>
              <Route exact path='/' element={<Home isSignInForm={isSignInForm} setIsSignInForm={setIsSignInForm} 
               isSignUpForm={isSignUpForm} setIsSignUpForm={setIsSignUpForm}
              
              />}/>

              <Route exact path="/login" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}
              isSignInForm={isSignInForm} setIsSignInForm={setIsSignInForm}   
              isSignUpForm={isSignUpForm} setIsSignUpForm={setIsSignUpForm}       
              />}/>

            <Route exact path='/profile/:username' element={<Browse/>}/>
         

                  <Route path="/login/:param" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}
                  isSignInForm={isSignInForm} setIsSignInForm={setIsSignInForm}
                  isSignUpForm={isSignUpForm} setIsSignUpForm={setIsSignUpForm}  
                  />} />

            {isAuthenticated ? (
          <Route exact path="/profile" element={<Profile />} />
        ) : (
          // Redirect to the home page if the user is not authenticated
          <Route path="/profile" element={<Navigate to="/" />} />          
        )}  
        <Route path='/watchpage' element={<WatchPage/>}/>

       

        {/* ProfileNavbar Routes */}
          <Route path='/tvshows' element={<TVShowsBrowse/>}/>
          <Route path='/movies' element={<MoviesBrowse/>}/>
          <Route path='/newpopular' element={<NewPopularBrowse/>}/>
          <Route path='/home' element={<Browse/>}/>
          <Route path='/watchlist' element={<WatchList/>}/>
              
            </Routes>
            <Footer/>
        </div>
  
  );
}

export default App;

