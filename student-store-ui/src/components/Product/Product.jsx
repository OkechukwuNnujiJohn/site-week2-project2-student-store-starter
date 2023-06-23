import React from 'react';


const Product = (props) => {
  return (
    <div>
        <img src={props.image} style={{width:"100%",height:"100%"}}></img>
        <h3>{props.name}</h3>
        <p>Price: ${props.price}</p>
        {/* Additional JSX for displaying other product details */}
  </div>
   
  )
};

export default Product;