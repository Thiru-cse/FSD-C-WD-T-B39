import axios from 'axios';
import { useEffect, useState } from 'react'
import GetProduct from './components/GetProduct';
import PostProduct from './components/PostProduct';
import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/DeleteProduct';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async () => {
    try {
      const response = await axios.get("https://6694b1874bd61d8314c84020.mockapi.io/api/product/");
      setProducts(response.data);
      console.log("Products", products);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(products);
  
  return (
    <div>
      <GetProduct products={products} />
      <PostProduct fetchData={fetchData} />
      <UpdateProduct fetchData={fetchData} />
      <DeleteProduct fetchData={fetchData} />
    </div>
  );
}

export default App
