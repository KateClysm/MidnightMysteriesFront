import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';


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
                <input type="text" placeholder='Enter your character name' className='charname' size={35} onChange={(e) => setValue(e.target.value)}/>
                <button type="submit" className='submit'>Confirm</button>
            </form>
            <h3 className={`${submitted ? 'visible' : ''}`}>Hi <span onClick={() => submit(!submitted)}>{value}</span> are you ready?</h3>
            <img src={`${imgUrl}`} alt="selected-character"/>
            <div className='button-menu'>
                <button className='newgame-button' onClick={() => select(!selected)}>Back</button>
                <NavLink className='newgame-button' to='/'>Next</NavLink>
            </div>
        </div>
    )
}

export default SelectedCharacter;