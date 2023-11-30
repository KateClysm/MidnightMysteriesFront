import React from "react";
import './principalpage.scss';
import BloodButton from "../../components/blood-button/BloodButton";
import flashlight from '../../assets/flashlight1.png'

const PrincipalPage: React.FC = () => {

  return (
    <div className="container-principal-page">
      <div className="flashlight-container">
        <img src={flashlight} alt="Flashlight" className="flashlight"/>
      </div>
      
      {/* <div className="flashlight-container"></div> */}
      <div className="container-game">
        <p>There's a killer among us, would you be able to catch them?</p>
        <div className="provitional-ilustration"></div>
      </div>

      <BloodButton buttonName="RESUME GAME" type="submit" />
    </div>
  );
};

export default PrincipalPage;