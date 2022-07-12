import "./Header.css"
import logo from "../../assets/logo.svg"

export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
                <div className="logo-text">
                    Meme Generator
                </div>
            </div>
        </div>
    );
}