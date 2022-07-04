import "./Cards.css"
import Card from "./Card/Card";

export default function Cards(props) {
    const cardElements = props.data.map(cardData => <Card data={cardData} />);
    return (
        <div className="cards">
            {cardElements}
        </div>
    )
}