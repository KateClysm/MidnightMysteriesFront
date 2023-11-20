import React from "react";
import './footer.scss';
// import { FaGithub, FaLinkedin } from 'react-icons/fa6';
// import { FiFigma } from 'react-icons/fi';
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    // <div className="container-footer">
    //   <div className="container-footer-access">

    //     <div className="networks-container">
    //       <div className="developers-container">
    //           <h4>DEVELOPERS</h4>
    //           <div className="dev-container">
    //             <p className="dev-name">Milagros Torres</p>
    //             <FaLinkedin className="footer-icon"/>
    //             <FaGithub className="footer-icon"/>
    //           </div>

    //           <div className="dev-container">
    //             <p className="dev-name">Maria Monchot</p>
    //             <FaLinkedin className="footer-icon"/>
    //             <FaGithub className="footer-icon"/>
    //           </div>

    //           <div className="dev-container">
    //             <p className="dev-name">Daniela Fernandez</p>
    //             <FaLinkedin className="footer-icon"/>
    //             <FaGithub className="footer-icon"/>
    //           </div>

    //           <div className="dev-container">
    //             <p className="dev-name">Martina Garcia</p>
    //             <FaLinkedin className="footer-icon"/>
    //             <FaGithub className="footer-icon"/>
    //           </div>

    //           <div className="dev-container">
    //             <p className="dev-name">Ludmila Agostinelli</p>
    //             <FaLinkedin className="footer-icon"/>
    //             <FaGithub className="footer-icon"/>
    //           </div>
            
    //       </div>
    //       <div className="icons-container">
    //           <h4>INSIDE THIS PROJECT:</h4>
    //           <FaGithub className="footer-icon"/>
    //           <FiFigma className="footer-icon"/>
    //       </div>
    //     </div>

    //     <div className="container-info">
    //         <p>We're a dedicated team of developers who love creating illustrations, crafting stories, and coding, brought together by our shared passion for horror, psychology, and mystery.</p>

    //         <div className="links-container">
    //           <NavLink to="/">CONTACT</NavLink>
    //           <NavLink to="/">ABOUT US</NavLink>
    //         </div>
    //     </div>        
    //   </div>

    //   <p className="copyright">© All rights reserved</p>
    // </div>

    <div className="container-footer">
      <div className="container-footer-access">
        <NavLink to="/">CONTACT</NavLink>
        <p>|</p>
        <NavLink to="/">ABOUT US</NavLink>
        <p>|</p>
        <NavLink to="/">LINKTREE</NavLink>
      </div>
      <p className="footer-description">We're a dedicated team of developers who love creating illustrations, crafting stories, and coding, brought together by our shared passion for horror, psychology, and mystery.</p>
      <p className="copyright">© All rights reserved</p>
    </div>
  );
};

export default Footer;