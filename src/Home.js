import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import Header from './Header'

function Home() {
  const [data,setData] = useState([]);

  useEffect(()=>{
    load();
  },[]);

  const load = async () => {
    let result = await fetch('http://localhost:8000/api/product');
    result = await result.json();
    setData(result[0])
  }

  async function destroy(id)
  {
    let result = await fetch("http://localhost:8000/api/product/"+id,{
      method:"DELETE"
    });
    result = await result.json();
    alert(result.message);
    load();
  }


  return (
    <div>
      <Header/>
      <h1>Product List</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { data?
            data.map((item)=>
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <img style={{width:160}} src={'http://localhost:8000'+item.image} alt={item.name} />
              </td>
              <td>
                <button className='btn btn-danger' onClick={()=>destroy(item.id)}>Delete</button>
              </td>
            </tr>
            )
            : null
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Home
