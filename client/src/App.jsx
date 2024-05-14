import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import OurTeam from './components/OurTeam';
import WeekendTours from './components/WeekendTours';
import LongTours from './components/LongTours';
import Footer from './components/Footer';
import Profile from './components/Profile';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ourTeam" element={<OurTeam />} />
          <Route exact path="/weekendTours" element={<WeekendTours />} />
          <Route exact path="/longTours" element={<LongTours />} />
          <Route exact path="/profile" element={<Profile/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
