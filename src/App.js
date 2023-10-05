import { Route, Routes,Navigate } from "react-router-dom";
import Login from './components/Login'
import { useState } from "react";
import './App.css'
import Profile from "./components/Navbar_ProfilePage/Profile";
import Browse from "./components/HomePage/Browse";
import TVShowsBrowse from "./components/TVShowsPage/TVShowsBrowse";
import MoviesBrowse from "./components/MoviesPage/MoviesBrowse";
import NewPopularBrowse from "./components/NewPopularPage/NewPopularBrowse";
import Footer from "./components/Footer";
import BottomHeader from "./components/HomeFrontPageHeader/BottomHeader";
import { WatchList } from "./components/WatchListPage/WatchList";
import WatchPage from "./components/WatchListPage/WatchPage";
import LoaderBrowse from "./components/LoaderPage/LoaderBrowse";

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

