import "./Die.css"

export default function Die(props) {
    return (
        <div className={`Die ${props.isActive ? "active" : "inactive"}`}>
            <div className="value">
                {props.value}
            </div>
        </div>
    )
}