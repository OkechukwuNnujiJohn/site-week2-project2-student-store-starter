import React from 'react';
import IncreaseBtn from "../IncreaseBtn/IncreaseBtn"
import { Link } from 'react-router-dom';


const Product = (props) => {
 

  return (
    <div className='card'>
    <Link to={`/products/${props.id}`}>
    <div>
        <img src={props.image} style={{width:"100%",height:"100%"}}></img> 
        </div>
    </Link>
        <div className="btnRow">
        <h3>{props.name}</h3>
        <IncreaseBtn addToCart={props.addToCart} removeFromCart={props.removeFromCart} name={props.name} price ={props.price}/>

        </div>
        <p>Price: ${props.price}</p>
        {/* Additional JSX for displaying other product details */}
  </div>

   
   
  )
};

export default Product;