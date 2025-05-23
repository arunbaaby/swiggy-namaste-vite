import '../assets/navbar.css';
import constants from '../../utils/constants';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [btnNameReact,setBtnNameReact] = useState('Login');
    // let btnName = 'Login';
    // console.log(btnName);

    // if there is no dependency array the use effect will work in every render
    // if dependency array = empty => use effect onn initial render (just once)
    // if depenency array has anything => use effect will be called
    // and when the dependency changes
    // if dependency [] is [btnNameReact] => use effect will be called:
    // when btnNameReact gets updated
    
    // useEffect(
    //     ()=>{
    //         console.log('use effect working');
            
    //     }
    // ,[btnNameReact]);
    // console.log('header rendered');

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={constants.LOGO_URL} alt="" />
                </div>
                {console.log('Navbar re-renderd')}
                <ul className="nav-links">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
                    <li><Link to={'/cart'}>Cart</Link></li>
                </ul>
                <div className="auth-links">
                    <a href="#" className="login" onClick={
                        ()=>{
                            btnNameReact === 'Login'?setBtnNameReact('Logout'):setBtnNameReact('Login');//the whole Navbar component will be rerendered
                            // not just the login button
                            // the whole component is updated in the virtual DOM 
                            // but react compares the previous version and refrehes the only changed element
                        }
                    }>{btnNameReact}</a>
                    <a href="#" className="sign-up">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;