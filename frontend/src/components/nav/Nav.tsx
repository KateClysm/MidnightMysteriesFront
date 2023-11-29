import React, {useState} from "react";
import './nav.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';
import { BsCaretDownFill } from "react-icons/bs";
import { TUser } from "../../interfaces&types/TUser";

const Nav: React.FC = () => {
// A modo de ejemplo

    const User: TUser = {
        id: 1,
        username: "Apolo123",
        email: "apol@gmail.com",
        age: 13,
        unlocked_characters: 2,
        unlocked_endings: 1,
        unlocked_objects: 3,
        times_played: 10,
        member_since: 2,
      };

    const location = useLocation();
    const isProfileOrCharacters =
    location.pathname.includes('/home/profile') ||
    location.pathname.includes('/home/characters') ||
    location.pathname.includes('/home/help');

    const hasGameInProgress = true;

    const handleSave = () => {
        console.log('Game Saved')
    };

    const handleLogOut = () => {
        console.log('User Logged Out')
    };


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


  return (
    <div className={`container-nav-absolute ${isProfileOrCharacters ? 'white-nav' : ''}`}>
        <div className="container-nav">
            <div className="container-left">
                <NavLink to="/home" className="nav-item">HOME</NavLink>
                {hasGameInProgress ? null : <NavLink to="/playGame">PLAY</NavLink>}
                {hasGameInProgress ? <NavLink to="/newGame">NEW GAME</NavLink> : null}
                <button onClick={() => handleSave()} className="nav-item">SAVE GAME</button>
            </div>

            <div className="container-right">
                <button onClick={() => handleLogOut()} className="nav-item">LOGOUT</button>
                <NavLink to="/home/profile" className="user-icon-container">
                    <FaCircleUser className="user-icon"/>
                </NavLink>
            
                <div className={`dropdown-container ${isDropdownOpen ? 'show' : ''}`} onClick={handleToggleDropdown}>
                        <BsCaretDownFill className="user-bar" />
                        <ul>
                            <li className="user-name">Welcome <span>{User.username}</span> !</li>
                            <li><NavLink to="/home/profile" className="opc-bar">Profile</NavLink></li>
                            <li><NavLink to="/home/characters" className="opc-bar">Unlocked characters</NavLink></li>
                        </ul>
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default Nav;