import "./Die.css"

export default function Die(props) {
    return (
        <div className={`Die ${props.isActive ? "active" : "inactive"}`}>
            <div className="number">
                {props.number}
            </div>
        </div>
    )
}