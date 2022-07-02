import "./Navbar.css"
import airbnb from "./images/airbnb-logo.svg"

export default function Navbar() {
    return (
        <div className="navbar">
            <img className="airbnb-logo" src={airbnb} alt="airbnb" />
        </div>
    )
}