import React from 'react';
import './App.css';
import Home from './header/home';
import { Route, Routes } from 'react-router-dom';
import Login from './login';
import Register from './register';
import Test from './test';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='home' element={<Home />} />
      <Route path='test' element={<Test />} />
    </Routes>
  );
}

export default App;
