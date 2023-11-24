import React from 'react';


interface charProps {
    imgUrl: any
}

const SelectedCharacter:React.FC<charProps> = ({imgUrl}: charProps) =>  {
    
    
    return (
        <div className='selected-character'>
            <form action="">
                <input type="text" placeholder='Your character name' className='charname'/>
                <input type="submit" value="confirm" className='submit'/>
            </form>
            <h3>Hi <span></span> are you ready?</h3>
            <img src={`${imgUrl}`} alt="selected-character" className='character'/>
            <div className='button-menu'>
                <button className='newgame-button'>Back</button>
                <button className='newgame-button'>Next</button>
            </div>
        </div>
    )
}

export default SelectedCharacter;