import React from "react";
import './nav.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';

const Nav: React.FC = () => {

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
            </div>
        </div>
    </div>
  );
};

export default Nav;