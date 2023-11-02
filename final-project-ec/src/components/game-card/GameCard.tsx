import React from "react";
import { ICharacter } from "../../interfaces&types/ICharacter";

const GameCard: React.FC<{ userCharacter: ICharacter }> = ({userCharacter}) => {
  if (!userCharacter) {
    return (
      <div>
        <p>You don't have any games yet. Why don't you start one?</p>
      </div>
    );
  }

  return (
    <div className="container-perfil">
      
      <div className="user-character-card">

        <h2>CHARACTER DATA</h2>

        <div className="game-image" style={{ backgroundImage: `url(${userCharacter.image})` }}></div>

        <h3>NAME: {userCharacter.name}</h3>

        <p>SANITY: {userCharacter.sanity}</p>

        {userCharacter.state? (<p>STATE: Alive </p>):(<p>STATE: Dead </p>)}

      </div>

    </div>
  );
};

export default GameCard;
