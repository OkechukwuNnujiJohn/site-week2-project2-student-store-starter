import React from 'react';
import { Link } from 'react-router-dom';


const Product = (props) => {
  return (
    <Link to={`/products/${props.id}`}>
    <div>
        <img src={props.image} style={{width:"100%",height:"100%"}}></img>
        <h3>{props.name}</h3>
        <p>Price: ${props.price}</p>
        {/* Additional JSX for displaying other product details */}
  </div>

    </Link>
   
  )
};

export default Product;