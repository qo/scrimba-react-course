import './App.css';

function App() {

    const rainbowColors = [
      "Red",
      "Orange",
      "Yellow",
      "Green",
      "Blue",
      "Indigo",
      "Violet"
  ];

  const rainbowColorsParagraphs = rainbowColors.map(color => <h3>{color}</h3>);

  return (
    <div className="App">
      {rainbowColorsParagraphs}
    </div>
  );
}

export default App;
