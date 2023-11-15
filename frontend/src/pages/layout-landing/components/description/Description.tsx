import React from "react";
import './description.scss';
import { NavLink } from "react-router-dom";

const Description: React.FC = () => {

  return (
    <div className="container-description">

        <h1>MIDNIGHT MYSTERIES</h1>

       <div className="description">
            <p>En el pacífico pueblo de Shadowvale, donde la mayoría de los habitantes se conocen, ha comenzado a circular un siniestro rumor. Las conversaciones susurradas hablan de personas desaparecidas y perturbadores hallazgos de cuerpos mutilados en rincones ocultos de la comunidad.</p>
            <p>Forma alianzas, espía a los sospechosos, descubre pistas y toma decisiones cruciales para desentrañar el siniestro enigma. El destino de nuestro protagonista, así como el desenlace de esta inquietante historia de horror psicológico e investigación, está en tus manos. ¡El pueblo de Shadowvale y la cordura de nuestro personaje dependen de tus elecciones!</p>
       </div>
        
        <div className="access">
          <p>You need an account to Play</p>
          <div className="buttons">
            <NavLink to="/Register" className="nav-item">REGISTER</NavLink>
            <NavLink to="/" className="nav-item">LOGIN</NavLink>
          </div>
        </div>
    </div>
  );
};

export default Description;