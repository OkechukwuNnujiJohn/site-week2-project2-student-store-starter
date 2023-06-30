import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BsCashCoin, BsCreditCard } from "react-icons/bs";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Sidebar.css";

export default function Sidebar({ cart, cartTotal}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="toggle-btn" onClick={handleToggle}>
        {isOpen ? (
          <AiOutlineArrowLeft className="arrow" />
        ) : (
          <AiOutlineArrowRight className="arrow" />
        )}
      </div>
      <div className={`sidebar-icons ${isOpen ? "open" : ""}`}>
        <MdAddShoppingCart className="sidebar-icon" onClick={handleToggle} />
        <BsCashCoin className="sidebar-icon" onClick={handleToggle} />
        <BsCreditCard className="sidebar-icon" onClick={handleToggle} />
      </div>
      <div className={`sidebar-content ${isOpen ? "open" : ""}`}>
        
        {Object.entries(cart).length !== 0 &&
        (<table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {/* {Object.entries(cart) &&// Check if data is available before rendering */}
              {Object.entries(cart).map(([productName, productProperties]) => {
                return (
                  <tr key={productName}>
                    <td>{productName}</td>
                    <td>{productProperties.quantity}</td>
                    <td>{productProperties.price}</td>
                    <td>{productProperties.subTotal}</td>
                  </tr>
                )
              })}
          </tbody>
          {/* {Object.entries(cart).length !== 0 && */}
            {/* // Check if data is available before rendering */}
            <tfoot>
              <tr>
                <td colSpan="2">Tax</td>
                <td>{cartTotal * 0.1}</td>
              </tr>
              <tr>
                <td colSpan="2">Total</td>
                <td>{cartTotal * (1 + 0.1)}</td>
              </tr>
            </tfoot>
          {/* } */}
        </table>)}
        {Object.entries(cart).length === 0 &&
          <p>No items added to cart yet. Start shopping now!</p>
        }

        <CheckoutForm cart={cart} cartTotal={cartTotal} />
      </div>
    </aside>
  );
}