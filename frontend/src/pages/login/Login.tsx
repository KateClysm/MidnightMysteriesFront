import React from "react";
import BloodButton from "../../components/blood-button/BloodButton";
import '../register/register.scss';
import { NavLink } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="container-register">
      <h1>MIDNIGHT MYSTERIES</h1>

      <div className="container-form">
        <h2>SIGN IN</h2>

        <form action="">
          <label>Email@gmail.com</label>
          <input type="text" placeholder="Email@gmail.com" required />
          <label>Password</label>
          <input type="password" placeholder="Password" required />
          <BloodButton buttonName="SIGN UP" type="submit" />
        </form>
        

        <div className="redirect">
          <p>You don't have an account?</p>
          <NavLink to="/register">Register</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
