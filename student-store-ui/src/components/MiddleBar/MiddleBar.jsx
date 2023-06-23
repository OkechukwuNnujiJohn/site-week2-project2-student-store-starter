import * as React from "react"
import "./MiddleBar.css"

// import React from "react";
// ...

const Sidebar = ({ setSelectedCategory }) => {
  const handleCategoryClick = category => {
    setSelectedCategory(category);
  };

  return (
    <div className="middlebar">
      <button onClick={() => handleCategoryClick("clothing")}>Clothing</button>
      <button onClick={() => handleCategoryClick("food")}>Food</button>
      <button onClick={() => handleCategoryClick("accessories")}>Accessories</button>
      <button onClick={() => handleCategoryClick("tech")}>Tech</button>
    </div>
  );
};

export default Sidebar;

