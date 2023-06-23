import * as React from "react"
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import {BsCart4, BsX, BsList} from "react-icons/bs";
import "./Sidebar.css"
import { FaBars, FaTimes } from "react-icons/fa";

// import React from "react";
// ...

const Sidebar = ({ setSelectedCategory }) => {
  const handleCategoryClick = category => {
    setSelectedCategory(category);
  };

  return (
    <div className="sidebar">
      <button onClick={() => handleCategoryClick("clothing")}>Clothing</button>
      <button onClick={() => handleCategoryClick("food")}>Food</button>
      <button onClick={() => handleCategoryClick("accessories")}>Accessories</button>
      <button onClick={() => handleCategoryClick("tech")}>Tech</button>
    </div>
  );
};

export default Sidebar;

