import { Link } from 'react-router-dom'
import ProfileImg from '../assets/profile.png'
const Navbar = () => {
    return (
        <div>
            <nav className='navbar f-r-sb-c'>
                <h1 className='logo'>LOGO</h1>
                <div className='functions f-r-sb-c'>
                    <Link to="/">HOME</Link>
                    <Link to="./weekendTours">WEEKEND TOUR</Link>
                    <Link to="./longTours">LONG TOUR</Link>
                    <Link to="./ourTeam">OUR TEAM</Link>
                    <Link to="/profile" className='f-r-c-c'><img src={ProfileImg} alt="Profile" /></Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
