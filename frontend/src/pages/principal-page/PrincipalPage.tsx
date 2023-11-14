import React from "react";
import './principalpage.scss';

const PrincipalPage: React.FC = () => {

  return (
    <div className="container-principal-page">

      {/* <h1>MIDNIGHT MYSTERIES</h1> */}

      <div className="container-game">
        <p>There's a killer among us, would you be able to catch them?</p>
        <div className="provitional-ilustration"></div>
      </div>

      <button className="resume-game">RESUME GAME</button>
    </div>
  );
};

export default PrincipalPage;