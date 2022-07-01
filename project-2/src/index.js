import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

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
