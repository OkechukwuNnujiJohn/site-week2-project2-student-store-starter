import React from 'react';

const ProductDetail = ({product}) => {

  return (
    <div>
        <div>
          <h2>{product.name}</h2>
          <img src={product.image}/>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
        </div>
    </div>
  );
};

export default ProductDetail;