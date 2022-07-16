import "./Box.css"

export default function Box(props) {
    return (
        <div className="box">
            <p>
                {props.id}
            </p>
        </div>
    )
}