import React, { useState } from "react"
import { MdAddShoppingCart } from "react-icons/md"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { BsCashCoin, BsCreditCard } from "react-icons/bs"
import "./Sidebar.css"


export default function Sidebar({ cartItems,removeFromCart, subtotal, taxRate }) {
	const [isOpen, setIsOpen] = useState(false)
    
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

//     // Calculate subtotal
//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Function to calculate tax and total
  const calculateTax = (amount) => {
    return amount * taxRate;
  };

  const calculateTotal = () => {
    const tax = calculateTax(subtotal);
    return subtotal + tax;
  };



	return (
		<aside className={`sidebar ${isOpen ? "open" : ""}`}>
			<div className="toggle-btn" onClick={handleToggle}>
				{isOpen ? (<AiOutlineArrowLeft className="arrow" />) : (<AiOutlineArrowRight className="arrow" />)}
			</div>
			<div className={`sidebar-icons ${isOpen ? "open" : ""}`}>
				<MdAddShoppingCart className="sidebar-icon" onClick={handleToggle}/>
				<BsCashCoin className="sidebar-icon" onClick={handleToggle}/>
				<BsCreditCard className="sidebar-icon" onClick={handleToggle}/>
			</div>
			<div className="sidebar-content">
            <h3>Shopping Cart</h3>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              {/* <th>Subtotal</th> */}
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                {/* <td>${(item.price * item.quantity).toFixed(2)}</td> */}
              </tr>
            ))}
          </tbody>
          </table>
        <div className="cart-summary">
        <div className="subtotal">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="tax">
            <span>Tax:</span>
            <span>${calculateTax(subtotal).toFixed(2)}</span>
          </div>
          <div className="total">
            <span>Total:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
        </div>
          <button className="checkout-button">Checkout</button>
      </div>
    </aside>
  );
}
