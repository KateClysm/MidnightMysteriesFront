import React from "react";
import './title.scss';
import spiral from '../../../../assets/spiral.png';

const Title: React.FC = () => {

  return (
    <div className="container-title">

        <div className="title">
          <h1>MIDNIGHT MYSTERIES</h1>
        </div>

        <div className="spiral-container">
            <img className="spiral-image spiral-image1" src={spiral} alt="Spiral 1" />
            <img className="spiral-image spiral-image2" src={spiral} alt="Spiral 2" />
            <img className="spiral-image spiral-image3" src={spiral} alt="Spiral 3" />

            <img className="spiral-image spiral-image4" src={spiral} alt="Spiral 4" />
            <img className="spiral-image spiral-image5" src={spiral} alt="Spiral 5" />
            <img className="spiral-image spiral-image6" src={spiral} alt="Spiral 6" />

            <img className="spiral-image spiral-image7" src={spiral} alt="Spiral 7" />
            <img className="spiral-image spiral-image8" src={spiral} alt="Spiral 8" />
            <img className="spiral-image spiral-image9" src={spiral} alt="Spiral 9" />
        </div>
    </div>
  );
};

export default Title;