import React from 'react';
import { NavLink } from 'react-router-dom';
import './newgame.scss';
import './synopsis.scss';

const Synopsis: React.FC = () => {
    
    return (
        <div className='container-synopsis'>
            <h1 className='title fade-in'>MIDNIGHT MYSTERIES</h1>
            <div className='synopsis fade-in'>
                <p>In the peaceful town of Shadowvale, where most people know each other, a sinister rumor about a murderer has begun to spread 
                around when people started to dissappear and corpses started to be found.</p>
                <p>Form alliances, spy on suspects, find clues and make crucial decisions to unravel the enigma. 
                The fate of our character, as well as the outcome of this unsettling story, is in your hands. The town of Shadowvale and our character's sanity depend of your choices!</p>
            </div>
            <NavLink className='newgame-button' to='/newgame/character'>START</NavLink>
        </div>
    )
}

export default Synopsis;