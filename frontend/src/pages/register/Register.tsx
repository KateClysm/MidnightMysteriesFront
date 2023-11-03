import React from 'react'
import './register.scss'
import Footer from '../../components/footer/Footer'

const Register: React.FC = () => {
  return (
    <><div className='container-register'>
      <form action=''>
        <header>
          <h2>Midnight Mysteries</h2>
        </header>
        <h3>Sign Up</h3>
        <label>Username</label>
        <i className="gg-user"></i>
        <input type="text"
          placeholder='Username'
          required />
        <label>Email@gmail.com</label>
        <input type="text"
          placeholder='Email@gmail.com'
          required />
        <label>Password</label>
        <input type="password"
          placeholder='Password'
          required />
        <label>Repeat Password</label>
        <input type="password"
          placeholder='Repeat Password'
          required />
          <div className='btn'>
        <button className="button"> Sign Up
        </button>
        </div>
      </form>
    </div>
    <div>
        <Footer></Footer>
      </div></>
  )
}

export default Register