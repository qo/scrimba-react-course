import "./Box.css"

export default function Box(props) {

    const styles =
        props.on
        ?
            props.darkTheme
            ?
            {
                backgroundColor: "#6464cd"
            }
            :
            {
                backgroundColor: "#7878ff"
            }
        :
            {
                backgroundColor: "transparent"
            };


    return (
        <div className="Box" style={styles} onClick={() => props.toggleBox(props.id)}>
            <p className="id">
                {props.id}
            </p>
        </div>
    )
}