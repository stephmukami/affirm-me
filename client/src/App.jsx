
import './App.css'
import Landing from './pages/landing-page/Landing'
import Login from './pages/login-page/Login'
import Register from './pages/register/Register'
import Home from './pages/home-page/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path= "/" element ={ <Landing/>} />
      <Route path ="/register" element = { <Register/>} />
      <Route path ="/login" element = {<Login/>}/>
      <Route path="/home" element = {<Home/>}/>
    </Routes>
    </BrowserRouter>
      
   
    </>
  )
}

export default App
