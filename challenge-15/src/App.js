import './App.css';
import {useState} from "react";

function App() {
  const [userdata, setUserdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: false
  });

  /**
   * Challenge: Track the applicant's last name as well
   */

  function handleUserdataChange(event) {
    const {name, value, checked, type} = event.target
    setUserdata(prevData => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }

  return (
      <div className="App">
        <form>
            <input
                className="input-box"
                type="text"
                placeholder="First Name"
                onChange={handleUserdataChange}
                name="firstName"
                value={userdata.firstName}
            />
            <input
                className="input-box"
                type="text"
                placeholder="Last Name"
                onChange={handleUserdataChange}
                name="lastName"
                value={userdata.lastName}
            />
            <input
                className="input-box"
                type="email"
                placeholder="Email"
                onChange={handleUserdataChange}
                name="email"
                value={userdata.email}
            />
            <textarea
                className="input-box"
                placeholder="Comments"
                onChange={handleUserdataChange}
                name="comments"
                value={userdata.comments}
            />
            <input
                type="checkbox"
                id="isFriendly"
                onChange={handleUserdataChange}
                checked={userdata.isFriendly}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
        </form>
        <div>
            Hi, {userdata.firstName} {userdata.lastName}.
            Your email is {userdata.email}.
            Comments on registration: {userdata.comments}
        </div>
      </div>
  )
}

export default App;
