import "./Cards.css"
import Card from "./Card/Card";

export default function Cards(props) {
    console.log(props);
    return (
        <div className="cards">
            <Card data={props.data[0]} />
            <Card data={props.data[1]} />
            <Card data={props.data[2]} />
        </div>
    )
}