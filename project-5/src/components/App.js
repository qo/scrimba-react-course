import './App.css';
import Navbar from "./Navbar/Navbar"
import Hero from "./Hero/Hero"
import Cards from "./Cards/Cards"
import cardsData from "../data/cardsData";

function App() {
  return (
    <div className="page">
        <div className="app">
            <Navbar />
            <Hero />
            <Cards data={cardsData}/>
        </div>
    </div>
  );
}

export default App;
