import './App.css';
import {useState} from "react";

function App() {
  const [name, setName] = useState({
    firstName: "",
    lastName: ""
  });

  /**
   * Challenge: Track the applicant's last name as well
   */

  function handleNameChange(event) {
    setName(prevName => {
      return {
        ...prevName,
        [event.target.name]: event.target.value
      };
    });
  }

  return (
      <div className="App">
        <form>
          <input
              type="text"
              placeholder="First Name"
              onChange={handleNameChange}
              name="firstName"
          />
          <input
              type="text"
              placeholder="Last Name"
              onChange={handleNameChange}
              name="lastName"
          />
        </form>
        <div>
          Hi, {name.firstName} {name.lastName}
        </div>
      </div>
  )
}

export default App;
