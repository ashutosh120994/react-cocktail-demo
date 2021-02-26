import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='nav-center'>
                    <Link className='navbar-brand' to='/'  data-testid="navbar-brand"></Link>
                    <ul className='nav-links'>
                        <li>
                            <Link className='navbar-brand' to='/about'>About Us</Link>
                        </li>
                        <li>
                            <Link className='navbar-brand' to='/contact-us'>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Navbar;
