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

  function handleFirstNameChange(event) {
    setName(prevName => {
      return {
        firstName: event.target.value,
        lastName: prevName.lastName
      };
    });
  }

  function handleLastNameChange(event) {
    setName(prevName => {
      return {
        firstName: prevName.firstName,
        lastName: event.target.value
      };
    });
  }

  return (
      <div className="App">
        <form>
          <input
              type="text"
              placeholder="First Name"
              onChange={handleFirstNameChange}
          />
          <input
              type="text"
              placeholder="Last Name"
              onChange={handleLastNameChange}
          />
        </form>
        <div>
          Hi, {name.firstName} {name.lastName}
        </div>
      </div>
  )
}

export default App;
