import React from "react";
import GameCard from "../../components/game-card/GameCard";
import { ICharacter } from "../../interfaces&types/ICharacter";


const Perfil: React.FC = () => {

  const userCharacterData: ICharacter = {
    image: "url_de_la_imagen",
    name: "David",
    sanity: "Good",
    state: true, //Está vivo
    age: null, //no le asignamos edad al personaje principal
    relatives: "Mother, Besto Friendo, etc"
  };

  return (

    // renderización del personaje con el que se está jugando
    <div className="container-perfil">
      <GameCard userCharacter={userCharacterData} />
    </div>


    // se tiene que hacer algo similar para la tarjeta del usuario con sus datos usando el type TUser

    // decidir si va a haber una sección de 'personajes desbloqueados' con o sin sus datos en esta perfil-page o si se podrá verlos una vez dentro del juego en una especie de 'diario'
  );
};
  

export default Perfil;