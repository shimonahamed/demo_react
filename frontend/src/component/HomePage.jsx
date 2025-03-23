import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await getData();
    })();
  }, []);

  // Get data from API
  const getData = async () => {
    let res = await axios.get('/api/categories');
    setData(res.data);
  };

const deleteData=async (id)=>{
  await axios.delete(`/api/categories/${id}`)
  await getData()
}
const UpdateCategory=async (event)=>{
  event.preventDefault();
  let formdata= new FormData(event.target);

  let name=formdata.get('name')
  let code=formdata.get('code')
  let img=formdata.get('img')
  let category=formdata.get('category')
  let qty=formdata.get('qty')
  let price=formdata.get('price')
  // await axios.post 

}
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Categories</h1>
      <ul className="list-group mb-5">
        {data.map((category) => (
          <li key={category._id} className="list-group-item">{category.name}</li>
        ))}
      </ul>
      
      <h2 className="text-center mb-4">User Information</h2>
      <div className="row">
        {data.map((user) => (
          <div key={user._id} className="col-md-4 mb-4">
            <div className="card shadow-sm p-3 bg-success text-white">
              <h5 className="card-title">{user.name}</h5>
              <p className="mb-1"><strong>Age:</strong> {user.age}</p>
              <p className="mb-1"><strong>City:</strong> {user.city}</p>
              <p className="mb-1"><strong>Profession:</strong> {user.profession}</p>
              <p className="mb-1"><strong>Email:</strong> {user.email}</p>
              <p className="d-flex justify-content-between pt-3"> 
                <a className="btn bg-info"><i className="fa fa-eye"></i>view</a>
              <a onClick={() => deleteData(user._id)} className="btn bg-danger justify-content-end"><i className="fa fa-trash"></i>Delete</a>
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
