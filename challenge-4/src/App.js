import './App.css';

export default function App() {

  function handleClick() {
    console.log("I was clicked!")
  }

  function handleCover() {
      console.log("The image was hovered!")
  }

  /**
   * Add our new function to the button
   */

  return (
      <div className="container">
        <img src="https://picsum.photos/640/360" onMouseOver={handleCover}/>
        <button onClick={handleClick}>Click me</button>
      </div>
  )
}