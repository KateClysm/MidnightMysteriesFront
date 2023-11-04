import React from "react";
import './footer.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FiFigma } from 'react-icons/fi';
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="container-footer">
      <div className="container-footer-access">

      <div className="developers-container">
            <h4>DEVELOPERS</h4>
            <div className="dev-container">
              <p className="dev-name">Milagros Torres</p>
              <FaLinkedin className="footer-icon"/>
              <FaGithub className="footer-icon"/>
            </div>

            <div className="dev-container">
              <p className="dev-name">Maria Monchot</p>
              <FaLinkedin className="footer-icon"/>
              <FaGithub className="footer-icon"/>
            </div>

            <div className="dev-container">
              <p className="dev-name">Daniela Fernandez</p>
              <FaLinkedin className="footer-icon"/>
              <FaGithub className="footer-icon"/>
            </div>

            <div className="dev-container">
              <p className="dev-name">Martina Garcia</p>
              <FaLinkedin className="footer-icon"/>
              <FaGithub className="footer-icon"/>
            </div>

            <div className="dev-container">
              <p className="dev-name">Ludmila Agostinelli</p>
              <FaLinkedin className="footer-icon"/>
              <FaGithub className="footer-icon"/>
            </div>
           
        </div>

        <div>
            <div className="icons-container">
              <h4>INSIDE THIS PROJECT:</h4>
              <FaGithub className="footer-icon"/>
              <FiFigma className="footer-icon"/>
            </div>

            <div className="links-container">
              <NavLink to="/">CONTACT</NavLink>
              <NavLink to="/">ABOUT US</NavLink>
            </div>

            
        </div>        
      </div>

      <p className="copyright">© All rights reserved</p>
    </div>
  );
};

export default Footer;