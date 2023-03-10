import React, { useState } from 'react'
import Header from './Header'

function Add() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function add()
  {
    const formData = new FormData();
    formData.append('name',name);
    formData.append('price',price);
    formData.append('description',description);
    formData.append('image',image);

    let result = await fetch("http://localhost:8000/api/product", {
      method: "POST",
      body: formData,
    });
    result = await result.json();
    alert(result.message)
  }


  return (
    <div>
      <Header />
      <h1>Add Page</h1>
      <div className='col-sm-6 offset-sm-3'>
        <div className='form-group text-left'>
          <label>Name</label>
          <input type="text" className='form-control' onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className='form-group text-left'>
          <label>Description</label>
          <input type="text" className='form-control' onChange={(e)=>setDescription(e.target.value)} />
        </div>
        <div className='form-group text-left'>
          <label>Price</label>
          <input type="number" className='form-control' onChange={(e)=>setPrice(e.target.value)} />
        </div>
        <div className='form-group text-left'>
          <label>Image</label>
          <input type="file" className='form-control' onChange={(e)=>setImage(e.target.files[0])} />
        </div>
        <button onClick={add} className='btn btn-primary'>Add</button>
      </div>

    </div>
  )
}

export default Add