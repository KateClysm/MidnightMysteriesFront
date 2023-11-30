import React from "react";
import './footer.scss';
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="container-footer">
      <div className="container-footer-access">
        <NavLink to="/">CONTACT</NavLink>
        <p>|</p>
        <NavLink to="/">ABOUT US</NavLink>
        <p>|</p>
        <a href="https://linktr.ee/midnightmysteries06"> LINKTREE</a>
      </div>
      <p className="footer-description">We're a dedicated team of developers who love creating illustrations, crafting stories, and coding, brought together by our shared passion for horror, psychology, and mystery.</p>
      <p className="copyright">© All rights reserved</p>
    </div>
  );
};

export default Footer;