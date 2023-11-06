import React from 'react';
import './newgame.scss';

const NewGame: React.FC = () => {
    
    return (
        <>
        <div className='container-main'>
            <h1>Midnight Mysteries</h1>
           <div className='art'></div>
           <button className='newgame-button'>New Game</button>
        </div>
        </>
    )
};

export default NewGame; 