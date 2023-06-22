import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Product from "../Product/Product"
import "./App.css"


export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null); // State variable to store the fetched data

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
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar isOpen={isOpen} handleOnToggle={handleOnToggle} />
          <Home data={data} /> {/* Pass the fetched data to the Home component */}
        </main>
      </BrowserRouter>
    </div>
  )
}
