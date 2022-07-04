import './App.css';
import Navbar from "./Navbar/Navbar"
import Hero from "./Hero/Hero"
import Cards from "./Cards/Cards"
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"

function App() {
    let cardsData = [
        {
            image: image1,
            rating: 5.0,
            ratingsCount: 6,
            location: "USA",
            title: "Life lessons with Katie Zaferes",
            price: 136.0
        },
        {
            image: image2,
            rating: 5.0,
            ratingsCount: 30,
            location: "USA",
            title: "Learn wedding photography",
            price: 125.0
        },
        {
            image: image3,
            rating: 4.8,
            ratingsCount: 2,
            location: "USA",
            title: "Group Mountain Biking",
            price: 50.0
        }];
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
