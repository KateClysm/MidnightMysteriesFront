import React from 'react'

const Login: React.FC = () => {
  return (
      <div className="container-register">
        <h2>Midnight Mysteries</h2>
        <form action="">
          <h3>Sign In</h3>
          <label>Email@gmail.com</label>
          <input type="text" placeholder="Email@gmail.com" required />
          <label>Password</label>
          <input type="password" placeholder="Password" required />
          <div className="btn">
            <button className="button"> Sign In</button>
          </div>
        </form>
      </div>
  );
}

export default Login;