import './App.css';
import {useState} from "react";

function App() {
  const [userdata, setUserdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: false,
    employment: "",
    favColor: ""
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

  let fullName = "";
  if (userdata.firstName && userdata.lastName)
      fullName = userdata.firstName + " " + userdata.lastName;
  else
      fullName = userdata.firstName ? userdata.firstName : userdata.lastName;

  function handleSubmit(event) {
      event.preventDefault();
      console.log(userdata);
  }

  return (
      <div className="App">
        <form onSubmit={handleSubmit}>
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
            <fieldset>
                <legend>Current employment status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    onChange={handleUserdataChange}
                    checked={userdata.employment === "unemployed"}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onChange={handleUserdataChange}
                    checked={userdata.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={handleUserdataChange}
                    checked={userdata.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
                id="favColor"
                value={userdata.favColor}
                onChange={handleUserdataChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <button>Submit</button>
        </form>
        <div>
            { fullName && <p>Hi, {fullName}.</p>}
            { userdata.email && <p>Your email is {userdata.email}.</p> }
            { userdata.comments && <p>Your comments on registration: {userdata.comments}</p> }
            { userdata.isFriendly && <p>You are friendly</p> }
            { userdata.employment && <p>You currently have {userdata.employment} employment status.</p> }
            { userdata.favColor && <p style={{backgroundColor: userdata.favColor }}>Your favorite color is {userdata.favColor}.</p>}
        </div>
      </div>
  )
}

export default App;
