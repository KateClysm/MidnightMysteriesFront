import React from "react";
import './nav.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

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
            <NavLink to="/PrincipalPage" className="nav-item">HOME</NavLink>
            <NavLink to="/Help" className="nav-item">HELP</NavLink>
            {hasGameInProgress ? null : <NavLink to="/NewGame">NEW GAME</NavLink>}
            <button onClick={() => handleSave()} className="nav-item">SAVE GAME</button>
        </div>

        <div className="container-right">
            <button onClick={() => handleLogOut()} className="nav-item">LOGOUT</button>
            <NavLink to="/PlayerProfile" className="user-icon-container">
                <FontAwesomeIcon icon={faCircleUser} />
            </NavLink>
        </div>
    </div>
  );
};

export default Nav;