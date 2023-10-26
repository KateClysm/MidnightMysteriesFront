import React from 'react';
import { IGame } from '../../interfaces/IGame';

const GameCard: React.FC<{game:IGame}> = ({ game }) => {

  if (!game) {
    return (
      <div className="game-card">
        <p>You don't have any games yet. Why don't you start one?</p>
      </div>
    );
  }

  return (
    <div className="game-card">
      <div className="game-image" style={{ backgroundImage: `url(${game.characterImage})` }}></div>
      <h3>{game.characterName}</h3>
      <p>"{game.characterState}"</p>
      <p>"{game.characterEnding}"</p>
    </div>
  );
};

export default GameCard;