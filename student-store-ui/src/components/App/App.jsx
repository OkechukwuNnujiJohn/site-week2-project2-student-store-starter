import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"


export default function App() {
  const [isOpen, setIsOpen] = useState(false); //track whther a sidebar is open or closed
  const [data, setData] = useState(null); // State variable to store the fetched data
 const [cartDetails, setCartDetails] = useState({}); //store the items added to the cart and their quantities.

  const addToCart = (name) => {
    setCartDetails((prevCartDetails) => {
      if (prevCartDetails.hasOwnProperty(name)) {
        return {
          ...prevCartDetails,
          [name]: prevCartDetails[name] +  1,
        };
      } else {
        return {
          ...prevCartDetails,
          [name]: 1,
        };
      }
    });
  }

  const removeFromCart = (name) => {
    setCartDetails((prevCartDetails) => {
      if (prevCartDetails.hasOwnProperty(name)) {
        const newCart = {
          ...prevCartDetails,
          [name]: prevCartDetails[name] - 1,
        }
        if (newCart[name] === 0) {
          delete newCart[name]
        }
        return newCart;
      } else {
        return "cart is empty";
      }
    });
  }
  //   setCartDetails({...cartDetails, [name] : 1})
  //   console.log("addToCart", {...cartDetails, [name] : 1})
  // }

  const handleOnToggle = (newState) => {
    setIsOpen(newState);
  };

  useEffect(() => {
    // Fetch data from the API
    fetch("https://codepath-store-api.herokuapp.com/store")
      .then(response => response.json())
      .then(data => {
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
          <Sidebar cart={cartDetails} data={data}/>
          <Routes>
          <Route exact path="/" element={<Home data={data} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
          <Route path="/products/:id" element={<Home data={data} />} />
          {/* Add other routes as needed */}
        </Routes>
        </main>
      </Router>
    </div>
  )
}