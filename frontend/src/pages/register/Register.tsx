import React from 'react';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import './register.scss';
import Footer from '../../components/footer/Footer';

type formData = {
  userName: string;
  email: string;
  password: string;
  repeatPassword: string;
};


const Register: React.FC = () => {

      const schema: ZodType<formData> = z
      .object({
        userName: z.string().min(2).max(20),
        email: z.string().email(),
        password: z.string().min(5).max(20),
        repeatPassword: z.string().min(5).max(20),
      }).refine((data) => data.password === data.repeatPassword, {
        message: "Password do not match",
        path: ["repeatPassword"]
      });

      const { register, handleSubmit } = useForm<formData>({
        resolver: zodResolver(schema),
      });

      const submitData = (data: formData) => {
        console.log("lo hicimos!!", data)
      }

  return (
    <>
    <div className='container-register'>
    <h2>Midnight Mysteries</h2>
      <form onSubmit={handleSubmit(submitData)}>
        <h3>Sign Up</h3>
        <label>Username</label>
        <input type="text"
          placeholder='Username'
          required 
          {...register("userName")}/>
        <label>Email</label>
        <input type="text"
          placeholder='Email@gmail.com'
          required 
          {...register("email")}/>
        <label>Password</label>
        <input type="password"
          placeholder='Password'
          required 
          {...register("password")}/>
        <label>Repeat Password</label>
        <input type="password"
          placeholder='Repeat Password'
          required 
          {...register("repeatPassword")}/>
          <div className='btn'>
        <button className="button" type='submit'> Sign Up
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

export default Register