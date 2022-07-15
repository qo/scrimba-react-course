import './App.css';
import {useState} from "react";
import person from "./assets/person.png"
import emptyStar from "./assets/star-empty.png"
import filledStar from "./assets/star-filled.png"

function App() {

  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

  function toggleFavorite() {
    setContact(prevState => ({
        ...prevState,
        isFavorite: !prevState.isFavorite
    }));
  }

  let starIcon = (contact.isFavorite ? filledStar : emptyStar)

  return (
    <div className="App">
      <div className="card">
        <img className="person" src={person} alt="" />
        <img className="star" onClick={toggleFavorite} src={starIcon} alt="" />
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
