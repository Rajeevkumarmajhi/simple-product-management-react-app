import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header'

function Login() {
  const navigate = useNavigate();
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  useEffect(()=>{

    if(localStorage.getItem('userInfo')){
      navigate('/add');
    }
  },[navigate]);

  async function login(){
    let item = { email,password };
    let result = await fetch("http://localhost:8000/api/user/login",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json()
    localStorage.setItem("userInfo",JSON.stringify(result))
    navigate('/add')
  }

  return (
    <div>
      <Header />
      <h1>Login Page</h1>
      <div className='col-sm-6 offset-sm-3'>
        <label>Email</label>
        <input type="text" className='form-control' placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" className='form-control' placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={login} type='button' className='btn btn-primary'>Login</button>
      </div>
    </div>
  )
}

export default Login