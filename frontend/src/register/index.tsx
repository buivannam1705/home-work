import React, { useState } from 'react';
import { registerUser } from '../auth/registerUser'; 
import { useNavigate } from "react-router-dom";



const Register = () => {
const [username, setUsername]= useState('')
const [password, setPassword]= useState('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          const response = await registerUser(username,password)
          console.log(response);
          console.log('oke');
          
          
        } catch (error) {
          console.error(error);
          console.log('loi');
        }
      };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;