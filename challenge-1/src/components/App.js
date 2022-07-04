import './App.css';
import Joke from "./Joke/Joke"
import jokesData from "../data/jokesData";

function App() {
  const jokeElements = jokesData.map(joke => <Joke data={joke} />);
  return (
    <div className="app">
        {jokeElements}
    </div>
  );
}

export default App;
