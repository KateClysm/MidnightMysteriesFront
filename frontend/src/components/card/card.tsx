import React from "react";
import './card.scss';
import { FaCircle } from "react-icons/fa";
import { ICharacter } from "../../interfaces&types/ICharacter";


const Card: React.FC<ICharacter> = (props) => {

  return (
    <div className="card">
      <div className="face face_front">
        <img src={props.image} alt="Character_photo" />
      </div>
      <div className="face face_back">
        <FaCircle className="circle"/>
        <h3>{props.name}</h3>
        <p className="face__back__phrase">"{props.phrase}"</p>       
        <p className="face__back__fact"><span>AGE:</span> {props.age}</p>     
        <p className="face__back__fact"><span>SANITY:</span> {props.sanity}</p>
        {props.state? (<p className="face__back__fact"><span>STATE:</span> Alive</p>):(<p className="face__back__fact"><span>STATE:</span> dead</p>)}
        <p className="face__back__fact"><span>ENDING:</span> {props.ending}</p>            
        </div>
    </div>
  );
};

export default Card;