import React from "react";
import './nav.scss';
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
            {hasGameInProgress ? null : <NavLink to="/PlayGame">PLAY</NavLink>}
            {hasGameInProgress ? <NavLink to="/NewGame">NEW GAME</NavLink> : null}
            <button onClick={() => handleSave()} className="nav-item">SAVE GAME</button>
        </div>

        <div className="container-right">
            <button onClick={() => handleLogOut()} className="nav-item">LOGOUT</button>
            <NavLink to="/perfil" className="user-icon-container">
                <FontAwesomeIcon icon={faCircleUser} />
            </NavLink>
        </div>
    </div>
  );
};

export default Nav;