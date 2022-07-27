import "../assets/Button.css"

export default function Button(props) {
    return (
        <div
            className={props.className}
            onClick={() => props.onClick(props.onClickValue)}
        >
            { props.text }
        </div>
    )
}