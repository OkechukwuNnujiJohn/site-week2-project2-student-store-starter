import React from "react";
import Product from "../Product/Product";
import "./ProductGrid.css";

const ProductGrid = ({ products }) => {
    console.log(products);
  return (
    <div className="product-grid">
      {products ? (
        products.map(product => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductGrid;
