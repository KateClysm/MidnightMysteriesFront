import React from 'react';
import './newgame.scss';
import character1 from '../../assets/character-1.png';
import character2 from '../../assets/character-2.png';
import character3 from '../../assets/character-3.png';
import SelectedCharacter from './SelectedCharacter';

const ChooseCharacter: React.FC = () => {
    const[selected, select] = React.useState(false);
    const [img, change] = React.useState(character1);

    return(
        <>
        <div className={`container-character ${selected ? 'disabled' : ''}`}>
            <h3>Choose your character skin</h3>
            <div className='character-options'>
                <img src={character1} alt="character-1" onClick={() => change(character1)}/>
                <img src={character2} alt="character-2" onClick={() => change(character2)}/>
                <img src={character3} alt="character-3" onClick={() => change(character3)}/>
            </div>
            <button className='newgame-button' onClick={() => select(!selected)}>Next</button>
        </div>
        {selected ? <SelectedCharacter imgUrl={img}/> : null}
        </>
    )
}

export default ChooseCharacter;