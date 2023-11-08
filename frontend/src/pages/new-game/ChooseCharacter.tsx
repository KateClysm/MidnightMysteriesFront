import React from 'react';
import './newgame.scss';

const ChooseCharacter: React.FC = () => {
    return (
        <div className='container-character'>
            <h3>Choose your character skin</h3>
            <div className='character-options'>
                <div className='character'></div>
                <div className='character'></div>
                <div className='character'></div>
            </div>
            <button className='newgame-button'>Next</button>
        </div>
    )
}

export default ChooseCharacter;