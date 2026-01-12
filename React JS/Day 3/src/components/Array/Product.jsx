import "./Product.css"

function Product(props) {
  return (
    <div>
          <li>{props.name}</li>
          <li>{props.category}</li>
          <li>{props.price}</li>
    </div>
  );
}

export default Product