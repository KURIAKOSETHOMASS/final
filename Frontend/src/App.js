import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import About from './Components/About';
import Card from './Components/Card';
import Home from './Components/Home';
import View from './Components/View';
import Admin from './Components/Admin';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/card" element={<Card/>} />
        <Route path='/Admin' element={<View/>}/>
        <Route path='/ad' element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
