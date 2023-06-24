import * as React from "react"
import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from './logo.png';
import { FaTwitter, FaInstagram, FaBars } from 'react-icons/fa';
import { BsMeta } from "react-icons/bs"
// FaMeta

export default function Navbar({isOpen, handleMenuToggle}) {
  // const toggleSidebar = () => {
  //   handleMenuToggle(!isOpen);
  // };
  return (
    <nav className="navbar">
      <div className="NavbarLogo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-icons">
        <FaTwitter />
        <FaInstagram />
        <BsMeta />
      </div>
      <div className="navbar-links">
      <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/about" className="navbar-link">
          About Us
        </Link>
        <Link to="/contact" className="navbar-link">
          Contact Us
        </Link>
        <Link to="/buy" className="navbar-link">
          Buy Now
        </Link>
      </div>
    </nav>
  )
}

