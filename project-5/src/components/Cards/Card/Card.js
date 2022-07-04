import "./Card.css"
import star from "./images/star.svg"

export default function Card(props) {
    console.log(props);
    return(
        <div className="card">
            <img className="image" src={props.data.image} alt=""/>
            <div className="first-row">
                <img className="star" src={star} alt=""/>
                <div className="black">{props.data.rating}</div>
                <div className="grey">({props.data.ratingsCount}) · {props.data.location}</div>
            </div>
            <div className="second-row">
                <div className="black">
                    {props.data.title}
                </div>
            </div>
            <div className="third-row">
                <div className="bold">
                    From ${props.data.price} /
                </div>
                <div className="black">
                     person
                </div>
            </div>
        </div>
    )
}