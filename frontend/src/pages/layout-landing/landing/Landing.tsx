import React, { useState, useEffect } from "react";
import './landing.scss';
import Description from "../components/description/Description";
import Title from "../components/title/Title";
import Footer from "../../../components/footer/Footer";

const Landing: React.FC = () => {
  const [showTitle, setShowTitle] = useState(true);
  const [fadeTitle, setFadeTitle] = useState(false);
  // const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    //a partir de dos segundos, activa un fade
    const fade = setTimeout(() => {
      setFadeTitle(true);

      //luego del inicio del fade, después de 4 segundos, desaparece el componente Title
      const timeoutTitle = setTimeout(() => {
        setShowTitle(false);
        // setShowDescription(true);
      }, 4000);

      return () => {
        clearTimeout(timeoutTitle);
      };
    }, 2000);

    return () => {
      clearTimeout(fade);
    };
  }, []);

  return (
    <div className='landing'>

      {showTitle &&(
          <div className={`title-opacity ${fadeTitle && 'fade-out'}`}>
              <Title/>
          </div>
      )}

      {!showTitle &&(
          <div className='description-opacity fade-in'>
              <Description/>
          </div>
      )}

      <div className="white-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;