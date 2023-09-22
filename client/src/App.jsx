
import './App.css'
import Landing from './pages/landing-page/Landing'
import Login from './pages/login-page/Login'
import Register from './pages/register/Register'
import Home from './pages/home-page/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { UserProvider } from './Context/Context'
function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element ={ <Landing/>} />
          <Route path ="/register" element = { <Register/>} />
          <Route path ="/login" element = {<Login/>}/>
          <Route path="/home" element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
   
      
   
  )
}

export default App
