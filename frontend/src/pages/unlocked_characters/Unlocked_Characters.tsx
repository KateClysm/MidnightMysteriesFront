import React from "react";
import './unlocked_characters.scss'
import Lupa from '../../assets/lupa.png'
import charactersData from "./characters.json"
import Card  from "../../components/card/card";
import { ICharacter } from "../../interfaces&types/ICharacter";

const Characters: React.FC = () => {
    return (
        <div className="container_characters">
            <h1 className="container_characters_title">Unlocked Characters</h1>
            { charactersData && charactersData.length > 0 ? (
                <div className="container_cards">
                    {charactersData.map( (character: ICharacter) => 
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
            ) : (
                <div className="container_error_characters">
                    <div className="container_img ">
                        <img src={Lupa} alt="Icono de lupa" />
                    </div>
                    <p className="container_error_characters_info animate__animated animate__shakeX">Keep playing to unlock new characters!</p>
                </div>
            )}
            
            
        </div>
    );
}

export default Characters;