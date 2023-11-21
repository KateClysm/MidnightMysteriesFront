import React from "react";
import './character.scss';
import Card  from "../card/card";
import CharacterData from "./characters.json";
import { ICharacter } from "../../interfaces&types/ICharacter";

const Character: React.FC = () => {
    return (
        <div className="container_cards">
            {CharacterData.map( (character: ICharacter) => 
                <Card 
                    id={character.id}
                    name={character.name} 
                    phrase={character.phrase} 
                    age={character.age}
                    sanity={character.sanity}
                    state={character.state}
                    image={character.image}
                    ending={character.ending}
                    />
            )}
        </div>
    );
};

export default Character;