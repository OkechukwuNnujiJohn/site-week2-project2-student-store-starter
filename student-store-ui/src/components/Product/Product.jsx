import React from 'react';


const Product = (props) => {
  return (
    <div>
        <img src={props.image}></img>
        <h3>{props.name}</h3>
        <p>Price: ${props.price}</p>
        {/* Additional JSX for displaying other product details */}
  </div>
   
  )
};

export default Product;
