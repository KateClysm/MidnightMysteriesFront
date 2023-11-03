import React from 'react';
import {FaUserCircle} from 'react-icons/fa';
import './navbar-style.css';
import { useState } from 'react';

const NavBar: React.FC = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    
    return (
        <nav className="navbar">
            <div>
                <button><a href="">Help</a></button>
            </div>
            <div className='align'>
                <button><a href="">Logout</a></button>
                <button className='dropdown-btn' onClick={toggleDropdown}><FaUserCircle className='user-icon'/></button>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'active': ''}`}>
                    <li>Profile</li>
                    <li>Items</li>
                    <li>Settings</li>
                </ul>
            </div>

        </nav>
    )
}

export default NavBar