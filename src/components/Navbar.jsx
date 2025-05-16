import '../assets/navbar.css';
import constants from '../../utils/constants';
import { useState } from 'react';

const Navbar = () => {
    const [btnNameReact,setBtnNameReact] = useState('Login');
    // let btnName = 'Login';
    // console.log(btnName);
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={constants.LOGO_URL} alt="" />
                </div>
                {console.log('Navbar re-renderd')}
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
                <div className="auth-links">
                    <a href="#" className="login" onClick={
                        ()=>{
                            setBtnNameReact('Logout');//the whole Navbar component will be rerendered
                            // not just the login button
                        }
                    }>{btnNameReact}</a>
                    <a href="#" className="sign-up">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;