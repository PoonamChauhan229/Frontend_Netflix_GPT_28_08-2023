import { Route, Routes,Navigate } from "react-router-dom";

import { useState } from "react";
import './App.css'
import Profile from "./Components/Navbar_ProfilePage/Profile";
import Browse from "./Components/HomePage/Browse";
import TVShowsBrowse from "./Components/TVShowsPage/TVShowsBrowse";
import MoviesBrowse from "./Components/MoviesPage/MoviesBrowse";
import NewPopularBrowse from "./Components/NewPopularPage/NewPopularBrowse";

import BottomHeader from "./Components/HomeFrontPageHeader/BottomHeader";
import { WatchList } from "./Components/WatchListPage/WatchList";
import WatchPage from "./Components/WatchListPage/WatchPage";
import Login from "./Components/Login";
import Footer from "./Components/Footer";

function App() {
const [isSignInForm, setIsSignInForm] = useState(false);
const[isSignUpForm,setIsSignUpForm]=useState(false)

const [isAuthenticated,setIsAuthenticated]=useState(false)
  return (
   
        <div>  
          <Routes>
            <Route exact path='/' element={<BottomHeader isSignInForm={isSignInForm} setIsSignInForm={setIsSignInForm} 
              isSignUpForm={isSignUpForm} setIsSignUpForm={setIsSignUpForm}
            
            />}/>

            <Route exact path="/login" element={<Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}
            isSignInForm={isSignInForm} setIsSignInForm={setIsSignInForm}   
            isSignUpForm={isSignUpForm} setIsSignUpForm={setIsSignUpForm}       
            />}/>


            
         

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
       

       

        {/* ProfileNavbar Routes */}

         {/* Protected Routes */}
         {isAuthenticated && (
          <>
          <Route exact path='/profile/:username' element={<Browse/>}/>
          <Route path='/watchpage' element={<WatchPage/>}/>
          <Route path='/tvshows' element={<TVShowsBrowse/>}/>
          <Route path='/movies' element={<MoviesBrowse/>}/>
          <Route path='/newpopular' element={<NewPopularBrowse/>}/>
          <Route path='/home' element={<Browse/>}/>
          <Route path='/watchlist' element={<WatchList/>}/>
          </>
        )}
      </Routes>

          
            {
            isAuthenticated && <Footer/>}
           
        </div>
  
  );
}

export default App;

