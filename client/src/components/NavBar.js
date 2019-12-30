import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className='navbar bg-dark'> 
                <h1><Link to='/'>Jalbert Design</Link></h1>
                <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
