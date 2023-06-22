import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NotFound from '../NotFound/NotFound';
import ProductView from '../ProductView/ProductView';

function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemToCart
}) {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    axios.get(`/store/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        setProduct(null);
      });
  }, [productId]);

  if (!product) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (product.notFound) {
    return <NotFound />;
  }

  return (
    <div className="product-detail">
      <ProductView
        product={product}
        productId={productId}
        quantity={product.quantity}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      />
    </div>
  );
}

export default ProductDetail;
