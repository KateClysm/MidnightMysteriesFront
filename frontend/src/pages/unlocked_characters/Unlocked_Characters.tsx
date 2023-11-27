import React from "react";
import ErrorCharacters from "../../components/error_characters/Error_Character";
import './unlocked_characters.scss'
import Character from "../../components/characters/character";
import charactersData from "../../components/characters/characters.json"

const Characters: React.FC = () => {
    return (
        <div className="container_characters">
            <h1 className="container_characters_title">Unlocked Characters</h1>
            { charactersData && charactersData.length > 0 ? (
                <Character />
            ) : (
                <ErrorCharacters />
            )}
            
            
        </div>
    );
}

export default Characters;