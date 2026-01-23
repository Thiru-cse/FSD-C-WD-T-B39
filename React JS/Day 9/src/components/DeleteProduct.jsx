import axios from 'axios';
import React, { useState } from 'react'

function DeleteProduct({ fetchData }) {
  const [id, setId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `https://6694b1874bd61d8314c84020.mockapi.io/api/product/${id}`,
      );
      console.log("Product Deleted", response.data);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Delete Product</h1>
      <form onSubmit={handleSubmit}>
        <label>Product ID:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeleteProduct