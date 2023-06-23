import React from "react";
import Product from "../Product/Product";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

const ProductGrid = ({ products,selectedCategory }) => {
    console.log(products);
    const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;
  return (
    <div className="product-grid">
      {filteredProducts ? (
        filteredProducts.map(product => (
        //   <ProductCard
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
