import React from "react";
import './profile.scss'
import { ICharacter } from "../../interfaces&types/ICharacter";
import { TUser } from "../../interfaces&types/TUser";
import UrlImage from '../../assets/Alexfull.png';

const Profile: React.FC = () => {
  /*if (!userCharacter && !playerProfile) {
    return (
      <div>
        <p>Error en la carga de datos</p>
      </div>
    )
  }
  */

  // Ejemplo
const Character: ICharacter= {
  id: "1",
  image: UrlImage,
  phrase: "",
  name: "David",
  sanity: "Alive",
  state: true,
  age: 16,
  ending: "End 1",
};

const User: TUser = {
id: 1,
  username: "Apolo123",
  email: "apol@gmail.com",
  age: 13,
  unlocked_characters: 2,
  unlocked_endings: 1,
  unlocked_objects: 3,
  times_played: 10,
  member_since: 2,
};

  return (
    <div className="container_profile">

    <main>
    <div className="container_img_character"  style={{ backgroundImage: `url(${Character.image})` }}></div> 

      <div className="profile_container_cards">
        <div className="card_profile card_style">
          <h2 className="card_style_title" >PROFILE</h2>
          <ul className="card_style_list_data">
            <li className="card_style_sub_title">USERNAME: <span>{ User.username }</span></li>
            <li className="card_style_sub_title">AGE: <span>{ User.age }</span></li>
            <li className="card_style_sub_title">UNLOCKED CHARACTERS: <span>{ User.unlocked_characters}</span></li>
            <li className="card_style_sub_title">DAYS PLAYING: <span>{ User.times_played}</span></li>
            <li className="playtime">Member since: { User.member_since } months</li>
          </ul>
          
        </div>

        <div className="card_character card_style">
          <h2 className="card_style_title">CHARACTER DATA</h2>
          <ul className="card_style_list_data">
            <li className="card_style_sub_title">NAME: <span>{ Character.name }</span></li>
            <li className="card_style_sub_title">SANITY: <span>{ Character.sanity }</span></li>
            <li >{Character.state? (<p className="card_style_sub_title">STATE: <span>Alive</span></p>):(<p className="card_style_sub_title">STATE: <span>Dead</span></p>)}</li>
            <li className="card_style_sub_title">ENDING: <span>{ Character.ending }</span></li>
          </ul>
        </div>
      </div>
      
    </main>
    
    </div>
  );
};

export default Profile;