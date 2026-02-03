import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../features/Example2/ProductSlice';

function Card() {
    const ProductData = useSelector((state) => state.proReducer.data);
    const error = useSelector((state) => state.proReducer.error);
    const status = useSelector((state) => state.proReducer.status);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch])

    if (status === "Loading") {
        return <div>Loading...</div>
    }

    if (status === "Failed") {
        return <div>Error:{ error}</div>;
    }

  return (
    <div>
      <h1>Product</h1>
          {ProductData.map((item, index) => {
              return (
                <>
                    <div key={index} style={{border: "1px solid black", display: "flex", flexDirection: "row"}}>
                    <li>{ item.productName}</li>
                    <img src={item.productImage} alt="img" />
                  </div>
                </>
              );
      })}
    </div>
  );
}

export default Card