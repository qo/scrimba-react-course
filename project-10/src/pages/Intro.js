import "../assets/Intro.css"
import Button from "../components/Button";

export default function Intro(props) {
    return (
        <div className="Intro">
            <div className="title">
                Quizzical
            </div>
            <div className="description">
                Take a random Quiz!
            </div>
            <Button
                className="button large"
                onClick={props.setMode}
                onClickValue="quiz"
                text="Start Quiz"
            />
        </div>
    )
}