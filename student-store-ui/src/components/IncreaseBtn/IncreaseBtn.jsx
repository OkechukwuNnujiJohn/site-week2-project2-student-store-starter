import React, { useState } from "react";
import "./IncreaseBtn.css";

export default function IncreaseBtn({ addToCart, name }) {
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
          onClick={() => {
            if (selectedIncrement > 0) {
              setSelectedIncrement(selectedIncrement - 1);
            }
          }}
          className="button-card"
        >
          <i className="material-icons">remove</i>
        </button>
      </div>
      <p>{selectedIncrementValue()}</p>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
}
