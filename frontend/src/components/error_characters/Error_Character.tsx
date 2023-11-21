import React from "react";
import 'animate.css';
import './error_characters.scss'
import Lupa from '../../assets/lupa.png'

const ErrorCharacters: React.FC = () => {
    return (
        <div className="container_error_characters">
            <div className="container_img ">
                <img src={Lupa} alt="Icono de lupa" />
            </div>
            <p className="container_error_characters_info animate__animated animate__shakeX">Keep playing to unlock new characters!</p>
        </div>
    );
};

export default ErrorCharacters;