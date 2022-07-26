export default function Intro(props) {
    return (
        <div className="Intro">
            <div className="title">
                Quizzical
            </div>
            <div className="description">
                Some description if needed
            </div>
            <div
                className="start-button"
                onClick={() => props.setMode("quiz")}
            >
                Start Quiz
            </div>
        </div>
    )
}