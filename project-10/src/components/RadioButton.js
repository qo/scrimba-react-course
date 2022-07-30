import "../assets/RadioButton.css"
import "../assets/Button.css"

export default function RadioButton(props) {

    return (
        <li>
            <input
                type="radio"
                name={props.radioGroupName}
                id={props.id}
                value={props.id}
                checked={props.checked}
                onChange={(event) => props.handleChange(event)}
            />
            <label
                className={`button small label ${props.style}`}
                htmlFor={props.id}
            >
                <p className="text">{props.text}</p>
            </label>
        </li>
    )
}