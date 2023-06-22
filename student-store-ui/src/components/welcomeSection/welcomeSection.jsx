import homeBld from './home.png';
import * as React from "react"
import "./welcomeSection.css"

export default function Welcome() {
  return (
    <nav className = "welcomeContainer">
        <div className="WelcomeText">
            <div className='welcomeIntro'>
                Welcome! <br/>
                Find Your Merch!
            </div> 
        <p>We have all kinds of goddies. Click on any of the items to start filling up your cart. Checkout whenever you're ready.</p>
      </div>

        <img src={homeBld} alt="house" className="homeBld" />
    </nav>
    
  )
}