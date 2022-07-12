import "./Card.css"
import star from "./images/star.svg"

export default function Card(props) {
    let badgeType = "";
    let badgeText = "";
    if (!props.openSpots) {
        badgeType = "sold-out-badge";
        badgeText = "Sold Out";
    }
    else {
        if (props.location === "Sweden") {
            badgeType = "close-to-you-badge";
            badgeText = "Close to You";
        }
    }
    return (
        <div className="card">
            {badgeType && <div className={badgeType}>{badgeText}</div>}
            <img className="image" src={props.image} alt=""/>
            <div className="first-row">
                <img className="star" src={star} alt=""/>
                <div className="black">{props.rating}</div>
                <div className="grey">({props.ratingsCount}) · {props.location}</div>
            </div>
            <div className="second-row">
                <div className="black">
                    {props.title}
                </div>
            </div>
            <div className="third-row">
                <div className="bold">
                    From ${props.price} /
                </div>
                <div className="black">
                     person
                </div>
            </div>
        </div>
    )
}