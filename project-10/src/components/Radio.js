import "../assets/Radio.css"

export default function Radio(props) {

    console.log("chosen", props.isChosen);

    return (

        <li className="li">
            <input
                // className={`radio button small ${props.isChosen} ? "answer-filled" : "answer"}`}
                className="input"
                type="radio"
                name={props.radioGroupName}
                id={props.answer.id}
                value={props.answer.id}
                checked={props.isChosen}
                onChange={(event) => props.handleAnswerChange(event)}
            />
            <label
                className="small button answer label"
                htmlFor={props.answer.id}
            >
                {props.answer.content}
            </label>
        </li>
    )
}