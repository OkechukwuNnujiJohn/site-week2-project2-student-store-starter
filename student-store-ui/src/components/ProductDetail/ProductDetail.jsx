// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import NotFound from '../NotFound/NotFound';
// import ProductView from '../ProductView/ProductView';

// function ProductDetail({
//   handleAddItemToCart,
//   handleRemoveItemToCart
// }) {
//   const [product, setProduct] = useState(null);
//   const { productId } = useParams();

//   useEffect(() => {
//     axios.get(`/store/${productId}`)
//       .then(response => {
//         setProduct(response.data);
//       })
//       .catch(error => {
//         setProduct(null);
//       });
//   }, [productId]);

//   if (!product) {
//     return <h1 className="loading">Loading...</h1>;
//   }

//   if (product.notFound) {
//     return <NotFound />;
//   }

//   return (
//     <div className="product-detail">
//       <ProductView
//         product={product}
//         productId={productId}
//         quantity={product.quantity}
//         handleAddItemToCart={handleAddItemToCart}
//         handleRemoveItemToCart={handleRemoveItemToCart}
//       />
//     </div>
//   );
// }

// export default ProductDetail;


// ProductDetails.jsx

import React from 'react';

const ProductDetails = ({ data }) => {
  const { id } = useParams();
  const product = data?.products.find((product) => product.id === id);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      {/* Add more JSX for displaying other product details */}
    </div>
  );
};


export default ProductDetails;
