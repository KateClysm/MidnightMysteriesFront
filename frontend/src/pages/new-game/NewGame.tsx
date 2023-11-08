import React from 'react';
import { NavLink } from 'react-router-dom';
import './newgame.scss';


const NewGame: React.FC = () => {
    
    
    return (
        <>
        <div className={`container-main`}>
            <h1 className='title'>Midnight Mysteries</h1>
           <div className='art'></div>
           <NavLink className='newgame-button' to='/newgame/synopsis'>Start</NavLink>
        </div>
        </>
        
    )
};

export default NewGame; 