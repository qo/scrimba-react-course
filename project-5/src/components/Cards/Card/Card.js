import "./Card.css"
import star from "./images/star.svg"

export default function Card(props) {
    console.log(props);
    return(
        <div className="card">
            <img className="image" src={props.data.image} alt=""/>
            <div className="first-row">
                <img className="star" src={star} alt=""/>
                <div className="rating">{props.data.rating}</div>
                <div className="ratings-count">({props.data.ratingsCount})</div>
                <div className="dot">·</div>
                <div className="location">{props.data.location}</div>
            </div>
            <div className="second-row">
                <div className="title">
                    {props.data.title}
                </div>
            </div>
            <div className="third-row">
                <div className="price">
                    From ${props.data.price} /
                </div>
                <div className="person-word">
                     person
                </div>
            </div>
        </div>
    )
}