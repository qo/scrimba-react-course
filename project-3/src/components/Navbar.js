import reactlogoimg from "../images/react-logo.svg";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="react-logo">
                <img src={reactlogoimg} alt="React Logo" className="react-logo-image" />
                <div className="react-logo-text">ReactFacts</div>
            </div>
            <div className="current-project">React Course - Project 1</div>
        </div>
    );
}