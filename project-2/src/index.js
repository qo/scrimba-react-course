import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={require("./react-logo.png")} alt="react-logo" className="react-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

function MainContent() {
    return (
        <div className="main-content">
            <h1>Why I'm excited to be learning React</h1>
            <ol>
                <li>React is highly maintained library and used by a lot of companies</li>
                <li>I can instantly see the result via my browser</li>
                <li>There is a huge library of React documentation</li>
            </ol>
        </div>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <small>2022, qo</small>
        </footer>
    );
}

function Page() {
    return (
        <div className="app">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);
