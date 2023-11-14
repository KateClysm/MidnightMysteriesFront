import React from "react";
import './profile.scss'
import { ICharacter } from "../../interfaces&types/ICharacter";
import { TUser } from "../../interfaces&types/TUser";

const Perfil: React.FC <{userCharacter: ICharacter, playerProfile: TUser}> = ({userCharacter, playerProfile}) => {
  if (!userCharacter && !playerProfile) {
    return (
      <div>
        <p>Error en la carga de datos</p>
      </div>
    )
  }

  return (
    <div className="container_profile">

    <main>
    <div className="container_img" style={{ backgroundImage: `url(${userCharacter.image})` }}></div>

      <div className="container_cards">
        <div className="card_profile card">
          <h2 className="card_title" >PROFILE</h2>
          <ul className="card_list_data">
            <li className="card_sub_title">USERNAME: <span>{ playerProfile.username }</span></li>
            <li className="card_sub_title">AGE: <span>{ playerProfile.age }</span></li>
            <li className="card_sub_title">UNLOCKED CHARACTERS: <span>{ playerProfile.unlocked_characters}</span></li>
            <li className="card_sub_title">DAYS PLAYING: <span>{ playerProfile.times_played}</span></li>
            <li className="playtime">Member since: { playerProfile.member_since } months</li>
          </ul>
          
        </div>

        <div className="card_character card">
          <h2 className="card_title">CHARACTER DATA</h2>
          <ul className="card_list_data">
            <li className="card_sub_title">NAME: <span>{ userCharacter.name }</span></li>
            <li className="card_sub_title">SANITY: <span>{ userCharacter.sanity }</span></li>
            <li >{userCharacter.state? (<p className="card_sub_title">STATE: <span>Alive</span></p>):(<p className="card_sub_title">STATE: <span>Dead</span></p>)}</li>
            <li className="card_sub_title">ENDING: <span>{ userCharacter.ending }</span></li>
          </ul>
        </div>
      </div>
      
    </main>
    
    </div>
  );
};

export default Perfil;