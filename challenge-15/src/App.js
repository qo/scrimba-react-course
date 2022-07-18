import './App.css';
import {useState} from "react";

function App() {
  const [userdata, setUserdata] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  /**
   * Challenge: Track the applicant's last name as well
   */

  function handleUserdataChange(event) {
    setUserdata(prevData => {
      return {
        ...prevData,
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
                onChange={handleUserdataChange}
                name="firstName"
                value={userdata.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleUserdataChange}
                name="lastName"
                value={userdata.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleUserdataChange}
                name="email"
                value={userdata.email}
            />
        </form>
        <div>
            Hi, {userdata.firstName} {userdata.lastName}.
            Your email is {userdata.email}
        </div>
      </div>
  )
}

export default App;
