import React from "react";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./register.scss";
import BloodButton from "../../components/blood-button/BloodButton";
import { NavLink } from "react-router-dom";

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
      password: z.string().min(5, "La contraseña debe tener al menos cinco caracteres").max(20),
      repeatPassword: z.string().min(5).max(20),
    })
    .refine((data) => data.password === data.repeatPassword, {
      message: "Password do not match",
      path: ["repeatPassword"],
    });

  const { register, handleSubmit } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: formData) => {
    console.log("lo hicimos!!", data);
  };

  return (
    <div className="container-register">

      <h1>MIDNIGHT MYSTERIES</h1>
      
      <div className="container-form">
        <h2>SIGN UP</h2>
        
        <form onSubmit={handleSubmit(submitData)}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          {...register("userName", {
            minLength: {
              value: 2,
              message: "El nombre de usuario debe tener al menos dos letrasaa"
            }
          })}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Email@gmail.com"
          required
          {...register("email")}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          required
          {...register("password")}
        />
        <label>Repeat Password</label>
        <input
          type="password"
          placeholder="Repeat Password"
          required
          {...register("repeatPassword")}
        />
        <BloodButton buttonName="SIGN UP" type="submit" />
      </form>

      <div className="redirect">
        <p>You already have an account?</p>
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
     

     
    </div>
  );
};

export default Register;
