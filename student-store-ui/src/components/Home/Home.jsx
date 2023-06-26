import React, { useState } from "react";
import Welcome from "../welcomeSection/welcomeSection";
import SearchBar from "../Search/Search";
import HelpLink from "../Help/Help";
import CartButton from "../ShoppingCart/ShoppingCart";
import Footer from "../Footer/Footer";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import ProductGrid from "../ProductGrid/ProductGrid";
import MiddleBar from "../MiddleBar/MiddleBar";
import ProductDetail from "../ProductDetail/ProductDetail";
import { useParams } from "react-router-dom";
// import SidebarCart from "../ShoppingCart/ShoppingCart";

import "./Home.css";

export default function Home(props) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const productId = parseInt(useParams().id);
  const product = props.data?.products.find((product) => product.id === productId);

  const handleSearch = (searchQuery) => {
    const results = props.data?.products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If the item already exists in the cart, update the quantity
      const updatedItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      // If the item doesn't exist, add it to the cart with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedItems);
  };

  return (
    <div className="home">
      <Welcome />
      <div className="middle_home">
        <SearchBar handleSearch={handleSearch} />
        <HelpLink />
        <CartButton />
      </div>
      <MiddleBar setSelectedCategory={setSelectedCategory} />
      <div className="container">
        {!productId && (
          <ProductGrid
            products={searchResults || props.data?.products}
            selectedCategory={selectedCategory}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        )}
        {productId && product ? (
          <ProductDetail product={product} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <ContactUs />
      <About />
      <Footer />
      {/* <SidebarCart cartItems={cartItems} removeFromCart={removeFromCart} /> */}
    </div>
  );
}
