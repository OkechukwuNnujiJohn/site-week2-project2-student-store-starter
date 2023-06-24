import React from "react";
import Product from "../Product/Product";
import "./ProductGrid.css";

const ProductGrid = ({ products,selectedCategory }) => {
    console.log(products);
    const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  return (
    <>
    
    <h3 className='product-header'>Best Selling Products</h3>
    <div className="product-grid">
      {filteredProducts ? (
        filteredProducts.map((product )=> (
            <div key={product.id}>

              <Product
                name={product.name}
                price={product.price}
                image={product.image}
                id ={product.id}
              />
        
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
};

export default ProductGrid;
