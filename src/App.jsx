
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import Signup from './Signup/Signup';
import NavBar from './NavBar/NavBar';

function App() {


  return (
    <>
      <Router>
      
      <Routes>
        <Route path="/Login" element={<Login />} />
  
        <Route path="/forget-password" element={<ForgetPassword/>} />
        <Route path="/forget-password" element={<ForgetPassword/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/Navbar" element={<NavBar/>} />




    
      </Routes>
    </Router>
    
    </>
  )
}

export default App
