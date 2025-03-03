
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import Signup from './Signup/Signup';
import Sidebar from './Sidebar/Sidebar';
import Layout from './Layout/Layout';

function App() {


  return (
    <>
      <Router>
        <Layout/>
      
      <Routes>
        <Route path="/Login" element={<Login />} />
  
        <Route path="/forget-password" element={<ForgetPassword/>} />
        <Route path="/forget-password" element={<ForgetPassword/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/Navbar" element={<Sidebar/>} />




    
      </Routes>
    </Router>
    
    </>
  )
}

export default App
