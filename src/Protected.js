import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    let Cmp = props.Cmp;
    const navigate = useNavigate();

    useEffect(()=>{

        if(!localStorage.getItem('userInfo')){
        navigate('/register');
        }
    },[navigate]);

  return (
    <div>
     <Cmp/>
    </div>
  )
}

export default Protected