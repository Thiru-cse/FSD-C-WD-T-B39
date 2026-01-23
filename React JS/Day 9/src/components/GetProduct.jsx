import React from 'react'

function GetProduct({products}) {
  return (
    <div>
      {products.map((item) => (
        <>
          <div>
            <h3>{item.productName}</h3>
            <h3>{item.productPrice}</h3>
            <h3>{item.id}</h3>
          </div>
        </>
      ))}
    </div>
  );
}

export default GetProduct