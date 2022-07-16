import "./style.css"

export default function Count(props) {

    console.log("Count component rendered");

    return (
        <div className="counter--count">
            <h1>{props.count}</h1>
        </div>
    )
}