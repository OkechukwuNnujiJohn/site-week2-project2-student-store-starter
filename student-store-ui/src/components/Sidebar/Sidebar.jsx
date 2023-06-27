import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { BsCashCoin, BsCreditCard } from "react-icons/bs";
import "./Sidebar.css";

export default function Sidebar({ cart = {}, data }) {
  const [isOpen, setIsOpen] = useState(false);

//   console.log("cart:", cart);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  
  const calculateSubtotal = (quantity, price) => {
      console.log("Quantity:", quantity);
      console.log("Price:", price);
      const subtotal = parseInt(quantity) * parseFloat(price);
      return subtotal.toFixed(2); // Round the subtotal to two decimal places
    };
    
    const calculateTax = (subtotal) => {
        console.log("Subtotal:", subtotal);// Add this line to check the subtotal value
        const tax = subtotal * 0.1; // Assuming tax rate is 10%
        return tax.toFixed(2); // Round the tax to two decimal places
    };
    
    const calculateTotal = (subtotal, tax) => {
        console.log("Subtotal:", subtotal);
        console.log("Tax:", tax);
        const total = parseFloat(subtotal) + parseFloat(tax);
        return total.toFixed(2); // Round the total to two decimal places
    };
    
    if (cart === null || cart === undefined) {
      cart = {};
    }
    
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
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
          {data && Array.isArray(data)&&  // Check if data is available before rendering
          Object.entries(cart).map(([product, quantity]) => {
            // Assuming price is available from your data source
            const item = data.find((item) => item.name === product);
            const price = item ? item.price : 0;
            return (
              <tr key={product}>
                <td>{product}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{calculateSubtotal(cart[product], price)}</td>
              </tr>
            )})}
          </tbody>
        {data && Array.isArray(data) && ( // Check if data is available before rendering
          <tfoot>
            <tr>
              <td colSpan="2">Tax</td>
              <td>
                {calculateTax(
                  Object.entries(cart).reduce(
                    (subtotal, [product, quantity]) =>
                      subtotal + calculateSubtotal(cart[product], data.find((item) => item.name === product).price),
                    0
                  )
                )}
              </td>
            </tr>
            <tr>
              <td colSpan="2">Total</td>
              <td>
                {calculateTotal(
                  Object.entries(cart).reduce(
                    (subtotal, [product, quantity]) =>
                      subtotal + calculateSubtotal(cart[product], data.find((item) => item.name === product).price),
                    0
                  ),
                  calculateTax(
                    Object.entries(cart).reduce(
                      (subtotal, [product,quantity]) =>
                        subtotal + calculateSubtotal(cart[product], data.find((item) => item.name === product).price),
                      0
                    )
                  )
                )}
              </td>
            </tr>
          </tfoot>
           )}
        </table>
      </div>
    </aside>
  );
}
