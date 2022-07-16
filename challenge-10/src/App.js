import './App.css';
import {useState} from "react";
import person from "./assets/person.png"
import Star from "./Star";

function App() {

  console.log("App Rendered");

  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true
  })

  function toggleFavorite() {
    setContact(prevState => ({
        ...prevState,
        isFavorite: !prevState.isFavorite
    }));
  }

  return (
    <div className="App">
      <div className="card">
        <img className="person" src={person} alt="" />
        <Star
            isFilled={contact.isFavorite}
            handleClick={toggleFavorite}
        />
        <div className="name">
          {contact.firstName} {contact.lastName}
        </div>
        <div className="phone">
          {contact.phone}
        </div>
        <div className="email">
          {contact.email}
        </div>
      </div>
    </div>
  );
}

export default App;
