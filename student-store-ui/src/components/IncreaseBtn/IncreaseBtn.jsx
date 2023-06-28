import React, { useState } from "react";
import "./IncreaseBtn.css";

export default function IncreaseBtn({ addToCart, removeFromCart, name }) {
  const [selectedIncrement, setSelectedIncrement] = useState(0);

  function selectedIncrementValue() {
    if (selectedIncrement <= 0) {
      return "";
    } else {
      return selectedIncrement;
    }
  }

  const handleAddToCart = () => {
    addToCart(name);
    // setSelectedIncrement(0);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(name);
    // setSelectedIncrement(selectedIncrement);
    
  };

  return (
    <div className="incrementBtn">
      <div className="row">
        <button
          onClick={() => {
            setSelectedIncrement(selectedIncrement + 1);
            handleAddToCart();
          }}
          className="button-card"
        >
          <i className="material-icons">add</i>
        </button>
        <button
          onClick= {() => {
            if (selectedIncrement > 0) {
              setSelectedIncrement(selectedIncrement - 1);
              handleRemoveFromCart();
            }
            else{
              return "Add item to cart"
            }
          }}
          className="button-card"
        >
          <i className="material-icons">remove</i>
        </button>
      </div>
      <p>{selectedIncrementValue()}</p>
      {/* <button onClick={handleAddToCart} className="add-to-cart-button">
        Add to Cart
      </button> */}

      {/* <button onClick={handleRemoveFromCart} className="remove-from-cart-button">
        RemoveCart
      </button> */}
    </div>
  );
}
