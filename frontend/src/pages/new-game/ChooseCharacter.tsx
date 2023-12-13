import React from 'react';
import { NavLink } from 'react-router-dom';
import './newgame.scss';
import './choose-character.scss';
import character1 from '../../assets/Character1profile-MM.png';
import character2 from '../../assets/Character2profile-MM.png';
import character3 from '../../assets/Character 3profile-MM.png';
import SelectedCharacter from './SelectedCharacter';

const ChooseCharacter: React.FC = () => {
    const[selected, select] = React.useState(false);
    const [img, change] = React.useState(character1);

    return(
        <>
        <div className={`container-character ${selected ? 'disabled' : ''}`}>
            <h3>Choose your character skin</h3>
            <div className='character-options'>
                <img src={character1} alt="character-1" onClick={() => change(character1)} className='character'/>
                <img src={character2} alt="character-2" onClick={() => change(character2)} className='character'/>
                <img src={character3} alt="character-3" onClick={() => change(character3)} className='character'/>
            </div>
            <div className='button-menu'>
                <NavLink to='/newgame' className='newgame-button'>BACK</NavLink>
                <button className='newgame-button' onClick={() => select(!selected)}>NEXT</button>
            </div>
        </div>
        {selected ? <SelectedCharacter imgUrl={img} selected={selected} select={select}/> : null}
        </>
    )
}

export default ChooseCharacter;