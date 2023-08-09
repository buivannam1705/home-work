import React, { useState } from 'react';
import axios from 'axios';



const Register = () => {
  const [values, setValues] = useState({
    email: '',
    password:''
  })
const handleChange = (e) => {
  setValues({...values, [e.target.email]:[e.target.value]})
}
const handleSubmit = (e) => {
  e.prevenDefault();
  axios.post('http://localhost:3002/signup',values)
  .then(res => {
    console.log("sucess",res);
  })
  .catch(err => {
    console.log(err);
    
  })
}
    
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='email' onChange={handleChange} placeholder="Username" />
      <input type="password" name='password' onChange={handleChange} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;