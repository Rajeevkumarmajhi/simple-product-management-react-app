import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{

    if(localStorage.getItem('userInfo')){
      navigate('/add');
    }
  },[navigate]);


  async function signUp() {
    let item = { name, email, password };

    let result = await fetch("http://localhost:8000/api/user/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }

    });
    result = await result.json();

    localStorage.setItem("userInfo", JSON.stringify(result))
    navigate('/add');

  }


  return (
    <div>
      <Header/>
      <h1>Register Page</h1>
      <div className='col-sm-6 offset-sm-3'>
        <div className='form-group'>
          <label>Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} className='form-control' placeholder='Name' />
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='Email' />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type="password" onChange={(e) => setPassword(e.target.value)} className='form-control' placeholder='Password' />
        </div>
        <div className='form-group'>
          <button onClick={signUp} className='btn btn-primary'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Register