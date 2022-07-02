import './App.css';
import Navbar from "./Navbar/Navbar"
import Hero from "./Hero/Hero"
import Cards from "./Cards/Cards"

function App() {
  return (
    <div className="page">
        <div className="app">
            <Navbar />
            <Hero />
            <Cards />
        </div>
    </div>
  );
}

export default App;
