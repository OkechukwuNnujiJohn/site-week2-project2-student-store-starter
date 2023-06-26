import * as React from "react"
import "./IncreaseBtn.css"
import { useState } from "react"
// import { useDispatch } from "react-redux";
// import { addToCart, removeFromCart } from "../../actions/cartActions";

export default function IncreaseBtn() {
  
const [selectedIncrement, setSelectedIncrement] = useState(0);

function selectedIncrementValue(){
  if(selectedIncrement<=0){
  return "";
}else{
  return selectedIncrement;
}
}

  return (
    <div className="incrementBtn">
      <div className="row">
                <button onClick={() => setSelectedIncrement(selectedIncrement+1)}className="button-card">
                    <i className="material-icons">add</i>

                </button>
                <button onClick={() => setSelectedIncrement(selectedIncrement-1)}className="button-card">
                    <i className="material-icons">remove</i>

                </button>


            </div>
          <p>{selectedIncrementValue()}</p>
    </div>
  )
}