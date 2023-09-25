
import './App.css'
import Landing from './pages/landing-page/Landing'
import Login from './pages/login-page/Login'
import Register from './pages/register/Register'
import Home from './pages/home-page/Home'
import Create from './pages/create-page/Create'
import { useState ,useEffect} from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { UserContext } from './Context/UserContext'
import OthersPage from './pages/others-page/Otherspage'
function App() {
  const storedUserValue = JSON.parse(localStorage.getItem('userValue'));
  const [userValue, setUserValue] = useState(storedUserValue || null);

  useEffect(() => {
    if (userValue) {
      // Update userValue in local storage whenever it changes
      localStorage.setItem('userValue', JSON.stringify(userValue));
    }
  }, [userValue]);

  return (
    <UserContext.Provider value={{userValue,setUserValue}}>

      <BrowserRouter>
        <Routes>
            <Route path= "/" element ={ <Landing/>} />
            <Route path ="/register" element = { <Register/>} />
            <Route path ="/login" element = {<Login/>}/>
            <Route path="/home" element = {<Home/>}/>
            <Route path="/create" element = {<Create/>}/>
            <Route path="/others" element = {<OthersPage/>}/>

          </Routes>
       
      </BrowserRouter>
   
      </UserContext.Provider>

   
  )
}

export default App
