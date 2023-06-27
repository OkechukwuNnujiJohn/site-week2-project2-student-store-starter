import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"


export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null); // State variable to store the fetched data
 const [cartDetails, setCartDetails] = useState({});

  const addToCart = (name, quantity) => {
    setCartDetails((prevCartDetails) => {
      if (prevCartDetails.hasOwnProperty(name)) {
        return {
          ...prevCartDetails,
          [name]: prevCartDetails[name] +  quantity,
        };
      } else {
        return {
          ...prevCartDetails,
          [name]: quantity,
        };
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
          <Route exact path="/" element={<Home data={data} addToCart={addToCart}/>} />
          <Route path="/products/:id" element={<Home data={data} />} />
          {/* Add other routes as needed */}
        </Routes>
        </main>
      </Router>
    </div>
  )
}