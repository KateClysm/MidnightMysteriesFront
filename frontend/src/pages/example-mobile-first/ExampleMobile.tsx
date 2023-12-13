import React from "react";
import './example-mobile.scss';

//characters
import char1 from '../../assets/Character1-MM.png';
import char2 from '../../assets/Character2-MM.png';
import char3 from '../../assets/Character 3-MM.png';

const ExampleMobile: React.FC = () => {

  return (
    <div className="main-container">

      <h2>MY PROFILE</h2>

        <div className="main-box">

            <div className="user-box">
                <h4>USER</h4>
                <p>NAME: Luna Lime</p>
                <p>USERNAME: User_123</p>
                <p>EMAIL: email@gmail.com</p>
                <p>AGE: 22</p>
                <p>TIME SPEND: 120hs</p>
            </div>

            

            <div className="char-image-container">
                <img src={char1} alt="character" className="char-image"/>
            </div>

            <div className="char-box">
                <h4>ACTIVE PLAYTHROUGH</h4>
                <p>NAME: David</p>
                <p>STATE: Alive</p>
                <p>ENDING: Still Playing</p>
                <div className="button-center">
                    <button className="resume-game">RESUME GAME</button>
                </div>
            </div>
        </div>


        <div className="images-examples">
            <div className="image-container">
                <img src={char1} alt="character" className="char-image"/>
            </div>

            <div className="image-container">
                <img src={char2} alt="character" className="char-image"/>
            </div>

            <div className="image-container">
                <img src={char3} alt="character" className="char-image"/>
            </div>
        </div>
        
    </div>
  );
};

export default ExampleMobile;