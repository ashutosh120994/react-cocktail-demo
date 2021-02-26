import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='nav-center'>
                    <Link to='/'></Link>
                    <ul className='nav-links'>
                        <li>
                            <Link to='/about'>About Us</Link>
                        </li>
                        <li>
                            <Link to='/contact-us'>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Navbar;
