import React from "react";
import { NavLink } from "react-router-dom";
import './test-buttton.scss'

const TestButton: React.FC = () => {
    return(
        <NavLink to="/home/help" className="test-button">Help</NavLink>
    );
};

export default TestButton;