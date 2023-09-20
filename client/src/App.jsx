
import './App.css'
import Landing from './pages/landing-page/Landing'
import Login from './pages/login-page/Login'
import Register from './pages/register/Register'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path= "/" element ={ <Landing/>} />
      <Route path ="/register" element = { <Register/>} />
      <Route path ="/login" element = {<Login/>}/>
    </Routes>
    </BrowserRouter>
      
   
    </>
  )
}

export default App
