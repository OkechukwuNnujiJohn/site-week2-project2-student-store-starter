import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi"
import "./ProductCard.css"

const ProductCard = (props) => {
  return (
    <div key={props.id} className="product-item">
        <img src={props.image}alt={prod.name} />
        <div className="product-name-count">
            <h3>{props.name}</h3>
            <div>
                <HiOutlinePlus className="sign plus"/>
                <HiOutlineMinus className="sign minus" />
            </div>
        </div>
            <p className="product-price">{formatPrice(props.price)}</p>
            <div className="stars">
                <img src="/stars.png" alt="stars" />
            </div>
    </div>
  )
}

function formatPrice(price) {
	const formattedPrice = price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
	return `$${formattedPrice}`;
}

export default ProductCard