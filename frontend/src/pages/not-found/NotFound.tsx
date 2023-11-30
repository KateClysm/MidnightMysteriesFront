import React from "react";
import './notfound.scss'
import notFound from '../../assets/notFound.png';
import BloodNavLink from "../../components/blood-button/BloodNavLink";

const NotFound: React.FC = () => {

  return (
    <div className="container-notfound">

      <h1>Oops!</h1>
      <img src={notFound} alt="404" className="not-found-img" />
      <p className="p-notfound">No pudimos encontrar la página que estás buscando :(</p>
      <BloodNavLink route="/home" buttonName="HOME" />

    </div>
  );
};

export default NotFound;