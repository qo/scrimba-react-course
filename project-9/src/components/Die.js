import "./Die.css"

export default function Die(props) {
    return (
        <div
            className={`Die ${props.isHeld ? "held" : ""}`}
            onClick={() => props.hold(props.id)}
        >
            <div className="number">
                {props.number}
            </div>
        </div>
    )
}