import React from "react";
import '../button-help/button-help.scss'
import { NavLink } from "react-router-dom";

const ButtonHelp: React.FC = () => {
    return(
        <div className="button-help-container">
            <NavLink to="/home/help">Help</NavLink>
        </div>
    );
};

export default ButtonHelp;