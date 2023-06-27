import React, { useState } from "react";
import Welcome from "../welcomeSection/welcomeSection"
import SearchBar from "../Search/Search"
import HelpLink from "../Help/Help"
import CartButton from "../ShoppingCart/ShoppingCart"
import Footer from "../Footer/Footer"
import About from "../About/About"
import ContactUs from "../ContactUs/ContactUs"
import ProductGrid from "../ProductGrid/ProductGrid";
import MiddleBar from "../MiddleBar/MiddleBar"
import ProductDetail from "../ProductDetail/ProductDetail";
import { useParams } from 'react-router-dom';

import "./Home.css"



export default function Home(props) {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchResults, setSearchResults] = useState(null);

  console.log(props);
  const productId = parseInt(useParams().id);
  console.log("id: ",typeof productId);
  const product = props.data?.products.find((product) => product.id === productId )
  console.log("product",product)
  // Handle search
  const handleSearch = (searchQuery) => {
    // Filter products based on the search query
    const results = props.data?.products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  // Mock data for products
  // const products = [
  //   { id: 1, name: "Product 1", price: 9.99, description: "Product 1 description" },
  //   { id: 2, name: "Product 2", price: 19.99, description: "Product 2 description" },
  //   { id: 3, name: "Product 3", price: 29.99, description: "Product 3 description" },
  // ];

  return (
    <div className="home">
      <Welcome />
        <div className="middle_home">

        <SearchBar handleSearch={handleSearch}/>
        <HelpLink/>
        <CartButton/>
        </div>
        <MiddleBar setSelectedCategory={setSelectedCategory} />
      <div className="gridSection">
    
      {/* if there's no id*/}
      {!productId ?
        <ProductGrid products={searchResults || props.data?.products} selectedCategory={selectedCategory} addToCart={props.addToCart}/>
      : <ProductDetail product={product} />
      }
      {/* <ProductDetails product={product} /> */}
      </div>
     
    
      <ContactUs/>
      <About/>
      <Footer/>
    </div>
  );
}