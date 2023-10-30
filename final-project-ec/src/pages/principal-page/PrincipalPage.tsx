import React from "react";
import './principalpage.css';

const PrincipalPage: React.FC = () => {

  return (
    <div className="container-principal-page">

      <h1>MIDNIGHT MYSTERIES</h1>

      <div className="container-game">
        <p>There's a killer among us, would you be able to catch them?</p>
        <div className="provitional-ilustration"></div>
      </div>

      <p className="resume-game">RESUME GAME</p>
    </div>
  );
};

export default PrincipalPage;