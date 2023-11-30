import React, { ReactNode } from "react";
import './spiralbackground.scss'
import spiral1 from '../../assets/Spiral.png';
import spiral2 from '../../assets/Spiral2.png';

interface SpiralBackgroundProps {
    children?: ReactNode; 
    className?: string;
}

const SpiralBackground: React.FC<SpiralBackgroundProps> = ({ children, className }) => {
  return (
    <div className={`container-spiral-background ${className}`}>
        <div className="container-component">
            {children}
        </div>

        <div className="spiral-container">
            <img className="spiral-image spiral-image1" src={spiral1} alt="Spiral 1" />
            <img className="spiral-image spiral-image2" src={spiral2} alt="Spiral 2" />
        </div>
    </div>
  );
};

export default SpiralBackground;