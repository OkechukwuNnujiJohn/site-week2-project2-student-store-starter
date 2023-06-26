import * as React from "react"
import "./IncreaseBtn.css"
import { useState } from "react"

export default function IncreaseBtn({ product, addToCart, removeFromCart }) {
  const [selectedIncrement, setSelectedIncrement] = useState(0);
  
  const handleIncrement = () => {
    setSelectedIncrement(selectedIncrement + 1);
    addToCart(product);
  };

  const handleDecrement = () => {
    if (selectedIncrement > 0) {
      setSelectedIncrement(selectedIncrement - 1);
      removeFromCart(product.id);
    }
  };

  return (
    <div className="incrementBtn">
      <div className="row">
        <button onClick={handleIncrement} className="button-card">
          <i className="material-icons">add</i>

        </button>
        <button onClick={handleDecrement} className="button-card">
          <i className="material-icons">remove</i>

        </button>
        </div>
        <p>{selectedIncrement}</p>
    </div>
  )
}