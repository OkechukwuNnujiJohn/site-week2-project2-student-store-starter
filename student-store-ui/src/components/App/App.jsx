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
  const [cartTotal, setCartTotal] = useState(0)

  const addToCart = (name, price) => {
    //increment the cummulative subTotal by adding price
    setCartTotal(cartTotal + price)

    setCartDetails((prevCartDetails) => {
      if (prevCartDetails.hasOwnProperty(name)) {
        console.log("types when adding: ", typeof prevCartDetails[name].price, typeof prevCartDetails[name].subTotal)
        return {
          ...prevCartDetails,
          [name]: {
            ...prevCartDetails[name],
            quantity: prevCartDetails[name].quantity + 1,
            subTotal: prevCartDetails[name].subTotal + price
          },
        };
      }
      else {
        return {
          ...prevCartDetails,
          [name]: {
            quantity: 1,
            price: price,
            subTotal: price
          },
        };
      }
    });
  }

  const removeFromCart = (name) => {
    setCartDetails((prevCartDetails) => {
      if (prevCartDetails.hasOwnProperty(name)) {
        //decrement our cummulative subTotal by the value of price
        const newCart = {
          ...prevCartDetails,
          [name]: {
            ...prevCartDetails[name],
            quantity: prevCartDetails[name].quantity - 1,
            subTotal: prevCartDetails[name].subTotal - prevCartDetails[name].price
          },
        }
        if (newCart[name].quantity === 0) {
          delete newCart[name]
        }
        if (Object.keys(prevCartDetails).length === 0) {
          setCartTotal(0);
        } else {
          setCartTotal(cartTotal - prevCartDetails[name].price)
        }
        return newCart;
      }
      else {
        return prevCartDetails;
      }
    });
  }

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
          <Sidebar cart={cartDetails} cartTotal={cartTotal} data={data}  />
          <Routes>
            <Route exact path="/" element={<Home data={data} addToCart={addToCart} removeFromCart={removeFromCart} />} />
            <Route path="/products/:id" element={<Home data={data} />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}