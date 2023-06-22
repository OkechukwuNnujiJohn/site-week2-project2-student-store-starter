import * as React from "react"

import "./Home.css"
import Welcome from "../welcomeSection/welcomeSection"
import SearchBar from "../Search/Search"
import HelpLink from "../Help/Help"
import CartButton from "../ShoppingCart/ShoppingCart"
import Footer from "../Footer/Footer"
import About from "../About/About"
import ContactUs from "../ContactUs/ContactUs"
// import ProductCard from "../ProductCard/ProductCard";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductGrid from "../ProductGrid/ProductGrid";
import ProductView from "../ProductView/ProductView";

export default function Home(props) {

  console.log(props);
  // Mock data for products
  const products = [
    { id: 1, name: "Product 1", price: 9.99, description: "Product 1 description" },
    { id: 2, name: "Product 2", price: 19.99, description: "Product 2 description" },
    { id: 3, name: "Product 3", price: 29.99, description: "Product 3 description" },
  ];
  return (
    <div className="home">
      <Welcome />
        <div className="middle_home">
        <SearchBar/>
        <HelpLink/>
        <CartButton/>
        </div>
      <ProductGrid products={props.data?.products} />
      {/* <ProductDetail productId={1} /> */}
      {/* <ProductView product={products[0]} productId={1} quantity={0} handleAddItemToCart={() => {}} handleRemoveItemToCart={() => {}} /> */}

      <ContactUs/>
      <About/>
      <Footer/>
    </div>
  )
}
