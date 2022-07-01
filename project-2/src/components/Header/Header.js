export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={require("../../react-logo.png")} alt="react-logo" className="react-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}