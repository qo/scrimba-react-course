import "./Main.css"
import Card from "./Card/Card"
import data from "../../data/data"

export default function Main() {
    const cardElements = data.map(cardData => <Card key={cardData.id} {...cardData} />)
    return (
        <div className="main">
            {cardElements}
        </div>
    );
}