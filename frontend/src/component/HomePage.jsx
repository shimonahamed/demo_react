import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the categories!', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Categories</h1>
      <ul className="list-group mb-5">
        {categories.map((category) => (
          <li key={category._id} className="list-group-item">{category.name}</li>
        ))}
      </ul>
      
      <h2 className="text-center mb-4">User Information</h2>
      <div className="row">
        {categories.map((user) => (
          <div key={user._id} className="col-md-4 mb-4">
            <div className="card shadow-sm p-3">
              <h5 className="card-title">{user.name}</h5>
              <p className="mb-1"><strong>Age:</strong> {user.age}</p>
              <p className="mb-1"><strong>City:</strong> {user.city}</p>
              <p className="mb-1"><strong>Profession:</strong> {user.profession}</p>
              <p className="mb-1"><strong>Email:</strong> {user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
