import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"


export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null); // State variable to store the fetched data
  const [cartItems, setCartItems] = React.useState([]);
  const [subtotal, setSubtotal] = React.useState(0);
  const taxRate = 0.1; // 10% tax rate

  const handleOnToggle = (newState) => {
    setIsOpen(newState);
  };

  // Function to calculate subtotal, tax, and total
  const calculateCartTotal = (items) => {
    const subTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subTotal * taxRate;
    const total = subTotal + tax;
    return { subTotal, tax, total };
  };

  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // Update the quantity of the existing product
      const updatedItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
      const { subTotal, tax, total } = calculateCartTotal(updatedItems);
      setSubtotal(subTotal);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      const { subTotal, tax, total } = calculateCartTotal([...cartItems, { ...product, quantity: 1 }]);
      setSubtotal(subTotal);
      // Update tax and total if needed
    }
  };

  const removeFromCart = (productId) => {
    const updatedItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedItems);
    const { subTotal, tax, total } = calculateCartTotal(updatedItems);
    setSubtotal(subTotal);
    
  };

  useEffect(() => {
    // Fetch data from the API
    fetch("https://codepath-store-api.herokuapp.com/store")
      .then(response => response.json())
      .then((data) => {
        // Update the state variable with the fetched data
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <div className="app">
      <Router>
        <main>
          <Navbar />
          <Sidebar cartItems={cartItems} removeFromCart={removeFromCart} subtotal={subtotal} taxRate={taxRate}/>
          <Routes>
          <Route exact path="/" element={<Home data={data} addToCart={addToCart} />} />
          <Route path="/products/:id" element={<Home data={data} addToCart={addToCart} />} />
          {/* Add other routes as needed */}
        </Routes>
        </main>
      </Router>
    </div>
  )
}