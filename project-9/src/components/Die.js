import "./Die.css"

export default function Die(props) {
    return (
        <div
            className={`Die ${props.isHeld ? "held" : ""}`}
            onClick={() => props.hold(props.id)}
        >
            <p className="number">
                {props.number}
            </p>
        </div>
    )
}