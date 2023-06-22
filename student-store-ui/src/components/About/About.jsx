import "./About.css"
import logo from './logo.png';

export default function About(){
    return(
        <>
            <div className="Header">
                <h3>About</h3>
            </div>
            <div className="aboutSection">
                <div className="aboutText">
                    <p>
                    The codepath student store offers great products at great prices from a great team and for a great cause.
                    </p>
                    <p>
                    We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.
                    </p>
                    <p>
                    All proceeds go towards bringing high quality CS education to college students around the country.
                    </p>
                </div>
                <div className="aboutLogo">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
            </div>
        </>
    )
}