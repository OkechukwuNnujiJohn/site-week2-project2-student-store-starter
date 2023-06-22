import * as React from "react"
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
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
        <a href="#" className="navbar-link">
          Home
        </a>
        <a href="#" className="navbar-link">
          About Us
        </a>
        <a href="#" className="navbar-link">
          Contact Us
        </a>
        <a href="#" className="navbar-link">
          Buy Now
        </a>
      </div>
    </nav>
  )
}

