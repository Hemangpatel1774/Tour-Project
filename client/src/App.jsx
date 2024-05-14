import './App.css'
import { useState ,useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import OurTeam from './components/OurTeam';
import WeekendTours from './components/WeekendTours';
import LongTours from './components/LongTours';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Register from './components/Register';
function App() {
  const [isLogin, setIsLogin] = useState("false");
  
  useEffect(() => {
    if(localStorage.getItem('isLogin')){
      console.log("getitem");
    }
    else{
      console.log("setitem");
      localStorage.setItem('isLogin',"false");
    }
    setIsLogin(localStorage.getItem('isLogin'));
  }, [])
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={(isLogin==="true") ? <Home /> : <Register />} />
          <Route exact path="/ourTeam" element={<OurTeam />} />
          <Route exact path="/weekendTours" element={<WeekendTours />} />
          <Route exact path="/longTours" element={<LongTours />} />
          <Route exact path="/profile" element={(isLogin==="true") ? <Profile /> : <Register/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
