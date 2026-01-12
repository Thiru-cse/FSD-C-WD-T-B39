import React from "react";
// import CompA from "./components/propsDrilling/CompA";
import Product from "./components/Array/Product";

function App() {
  const products = [
    { id: 1, img:"https://m.media-amazon.com/images/I/41ToI4s9NNL._SX300_SY300_QL70_FMwebp_.jpg", name: "Acer laptop", price: 35000, category: "Electronics" },
    { id: 2, name: "Dell laptop", price: 50000, category: "Electronics" },
    { id: 3, name: "Lenovo laptop", price: 70000, category: "Electronics" },
    { id: 4, name: "PS5", price: 5000, category: "toys" },
    { id: 5, name: "Remote Car", price: 40000, category: "toys" },
  ];

  const electronics = products.filter(
    (item) => item.category === "Electronics"
  );

  const handleSubmit = (e) => {
    const catValue = e.target.value; // Electronics
    const catArr = products.filter((item) => item.category === catValue);
    console.log(catArr);
  }

  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
  console.log(totalPrice);
  

  return (
    <div>
      <h1>App Component</h1>
      {/* <CompA a={a} /> */}
      {products.map((item) => (
        <Product
          key={item.id}
          name={item.name}
          price={item.price}
          category={item.category}
        />
      ))}
      <button value="Electronics" onClick={(e) => handleSubmit(e)}>
        Electronics
      </button>
    </div>
  );
}

export default App;
