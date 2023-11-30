import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './newgame.scss';
import './selected-character.scss';

interface charProps {
    imgUrl: any,
    select: any,
    selected: any
}

const SelectedCharacter:React.FC<charProps> = ({imgUrl, selected, select}: charProps) =>  {
    
    const [value, setValue] = useState("");
    const [submitted, submit] = useState(false);

    return (
        <div className='selected-character'>
            <form action="" onSubmit={e => {
                e.preventDefault();
                submit(!submitted);
            }} className={ `${submitted ? 'hidden' : ''}`}>
                <input type="text" placeholder='Enter your character name' className='charname' size={40} onChange={(e) => setValue(e.target.value)} required/>
                <button type="submit" className='submit'>Confirm</button>
            </form>
            <h4 className={`${submitted ? 'visible' : ''}`}>Hi <span onClick={() => submit(!submitted)}>{value}</span>, are you ready?</h4>
            <img src={`${imgUrl}`} alt="selected-character"/>
            <div className='button-menu'>
                <button className='newgame-button' onClick={() => select(!selected)}>BACK</button>
                <NavLink className='newgame-button' to='/home'>NEXT</NavLink>
            </div>
        </div>
    )
}

export default SelectedCharacter;