import React from 'react'
import Footer from '../../components/footer/Footer'

const Login: React.FC = () => {
  return (
    <>
    <div className='container-register'>
    <h2>Midnight Mysteries</h2>
      <form action=''>
        <h3>Sign In</h3>
        <label>Email@gmail.com</label>
        <input type="text"
          placeholder='Email@gmail.com'
          required />
        <label>Password</label>
        <input type="password"
          placeholder='Password'
          required />
          <div className='btn'>
        <button className="button"> Sign In
        </button>
        </div>
      </form>
    </div>
    <div>
        <Footer></Footer>
      </div>
      </>
  )
}

export default Login