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
    addToCart(name, selectedIncrement);
    setSelectedIncrement(0);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(name, selectedIncrement);
    setSelectedIncrement(selectedIncrement);
    if (selectedIncrement > 0) {
      setSelectedIncrement(selectedIncrement - 1);
    }
  };

  return (
    <div className="incrementBtn">
      <div className="row">
        <button
          onClick={() => {
            setSelectedIncrement(selectedIncrement + 1);
          }}
          className="button-card"
        >
          <i className="material-icons">add</i>
        </button>
        <button
          onClick= {handleRemoveFromCart}
          className="button-card"
        >
          <i className="material-icons">remove</i>
        </button>
      </div>
      <p>{selectedIncrementValue()}</p>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        Add to Cart
      </button>

      {/* <button onClick={handleRemoveFromCart} className="remove-from-cart-button">
        RemoveCart
      </button> */}
    </div>
  );
}
