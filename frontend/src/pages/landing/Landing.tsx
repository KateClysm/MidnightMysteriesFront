// import { NavLink } from "react-router-dom";
// import './layout-landing.scss';
// import SpiralBackground from "../../components/spiral-background/SpiralBackground";
// import { useEffect, useState } from "react";

// const Landing = () => {
//     const [showTitle, setShowTitle] = useState(true);
//     const [fadeTitle, setFadeTitle] = useState(false);
  
//     useEffect(() => {
//       const fade = setTimeout(() => {
//         setFadeTitle(true);
  
//         const timeoutTitle = setTimeout(() => {
//           setShowTitle(false);
//         }, 4000);
  
//         return () => {
//           clearTimeout(timeoutTitle);
//         };
//       }, 4000);
  
//       return () => {
//         clearTimeout(fade);
//       };
//     }, []);
  

//     return (
//       <div className="container-landing">
//         {showTitle && (
//           <SpiralBackground
//             className={`title-opacity ${fadeTitle && "fade-out"}`}
//           >
//             <h1>MIDNIGHT MYSTERIES</h1>
//           </SpiralBackground>
//         )}

//         {!showTitle && (
//           <div className="description-opacity fade-in">
//             <div className="container-description">
//               <h1>MIDNIGHT MYSTERIES</h1>

//               <div className="description">
//                 <p>
//                   En el pacífico pueblo de Shadowvale, donde la mayoría de los
//                   habitantes se conocen, ha comenzado a circular un siniestro
//                   rumor. Las conversaciones susurradas hablan de personas
//                   desaparecidas y perturbadores hallazgos de cuerpos mutilados
//                   en rincones ocultos de la comunidad.
//                 </p>
//                 <p>
//                   Forma alianzas, espía a los sospechosos, descubre pistas y
//                   toma decisiones cruciales para desentrañar el siniestro
//                   enigma. El destino de nuestro protagonista, así como el
//                   desenlace de esta inquietante historia de horror psicológico e
//                   investigación, está en tus manos. ¡El pueblo de Shadowvale y
//                   la cordura de nuestro personaje dependen de tus elecciones!
//                 </p>
//               </div>

//               <div className="access">
//                 <p>You need an account to Play</p>
//                 <div className="buttons">
//                   <NavLink to="/register" className="nav-item">
//                     REGISTER
//                   </NavLink>
//                   <NavLink to="/login" className="nav-item">
//                     LOGIN
//                   </NavLink>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
// };
// export default Landing;


import './landing.scss';
import { NavLink } from 'react-router-dom';

const Landing = () => {

    return (
      <div className="container-landing">
          {/* <SpiralBackground>
            <h1>MIDNIGHT MYSTERIES</h1>
          </SpiralBackground> */}

          <div className="description-opacity fade-in">
            <div className="container-description">
              <h1>MIDNIGHT MYSTERIES</h1>

              <div className="description">
                <p>
                  En el pacífico pueblo de Shadowvale, donde la mayoría de los
                  habitantes se conocen, ha comenzado a circular un siniestro
                  rumor. Las conversaciones susurradas hablan de personas
                  desaparecidas y perturbadores hallazgos de cuerpos mutilados
                  en rincones ocultos de la comunidad.
                </p>
                <p>
                  Forma alianzas, espía a los sospechosos, descubre pistas y
                  toma decisiones cruciales para desentrañar el siniestro
                  enigma. El destino de nuestro protagonista, así como el
                  desenlace de esta inquietante historia de horror psicológico e
                  investigación, está en tus manos. ¡El pueblo de Shadowvale y
                  la cordura de nuestro personaje dependen de tus elecciones!
                </p>
              </div>

              <div className="access">
                <p>You need an account to Play</p>
                <div className="buttons">
                  <NavLink to="/register" className="nav-item">
                    REGISTER
                  </NavLink>
                  <NavLink to="/login" className="nav-item">
                    LOGIN
                  </NavLink>
                </div>


              </div>
            </div>
          </div>
      </div>
    );
};
export default Landing;