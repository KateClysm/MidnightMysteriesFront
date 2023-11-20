import React from "react";
import './nav.scss';
import { NavLink } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';

const Nav: React.FC = () => {

    // const [hasGameInProgress, setHasGameInProgress] = useState(false);
    const hasGameInProgress = true;

    const handleSave = () => {
        console.log('Game Saved')
    };

    const handleLogOut = () => {
        console.log('User Logged Out')
    };

  return (
    <div className="container-nav">
        <div className="container-left">
            <NavLink to="/" className="nav-item">HOME</NavLink>
            {hasGameInProgress ? null : <NavLink to="/PlayGame">PLAY</NavLink>}
            {hasGameInProgress ? <NavLink to="/NewGame">NEW GAME</NavLink> : null}
            <button onClick={() => handleSave()} className="nav-item">SAVE GAME</button>
        </div>

        <div className="container-right">
            <button onClick={() => handleLogOut()} className="nav-item">LOGOUT</button>
            <NavLink to="/profile" className="user-icon-container">
                <FaCircleUser className="user-icon"/>
            </NavLink>
        </div>
    </div>
  );
};

export default Nav;