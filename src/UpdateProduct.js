import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useNavigate , useParams } from 'react-router-dom'

function UpdateProduct() {

  const navigate = useNavigate();

  const [id,setId] = useState(useParams().id)
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [description,setDescription] = useState("");
  const [image,setImage] = useState("");

  useEffect(()=>{
    load();
  },[]);

  const load = async () => {
    let result = await fetch('http://localhost:8000/api/product/'+id);
    result = await result.json();
    setId(result[0].id)
    setName(result[0].name)
    setDescription(result[0].description)
    setPrice(result[0].price)
    setImage(result[0].image)
  }

  const update = async () =>{

    const formData = new FormData();
    formData.append('name',name);
    formData.append('price',price);
    formData.append('description',description);
    formData.append('image',image);
    formData.append('_method','PUT');

    let result = await fetch("http://localhost:8000/api/product/"+id, {
      method: "POST",
      body: formData,
    });
    result = await result.json();
    alert(result.message)
    navigate('/')
  }

  return (
    <div>
      <Header/>
      <h1>Update Page</h1>
      <div className='col-sm-6 offset-sm-3'>
        <div className='form-group text-left'>
          <label>Name</label>
          <input type="text" className='form-control' onChange={(e)=>setName(e.target.value)} value={name} />
        </div>
        <div className='form-group text-left'>
          <label>Description</label>
          <input type="text" className='form-control' onChange={(e)=>setDescription(e.target.value)} value={description} />
        </div>
        <div className='form-group text-left'>
          <label>Price</label>
          <input type="number" className='form-control' onChange={(e)=>setPrice(e.target.value)} value={price} />
        </div>
        <div className='form-group text-left'>
          <label>Image</label>
          <input type="file" className='form-control' onChange={(e)=>setImage(e.target.files[0])} />
        </div>
        <button onClick={update} className='btn btn-primary'>Update</button>
      </div>
    </div>
  )
}

export default UpdateProduct 
