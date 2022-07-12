import "./Header.css"
import logo from "./img/logo.svg"

export default function Header() {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <div className="header-text">
                my travel journal.
            </div>
        </div>
    );
}