import "./Card.css"
import placeIcon from "./img/place-icon.svg"
import DelimiterLine from "./DelimiterLine/DelimiterLine";

export default function Card(props) {
    return (
        <div className="container">
            <div className="card">
                <img className="card-img" src={props.img} alt="img" />
                <div className="card-text">
                    <div className="location">
                        <div className="country">
                            <img src={placeIcon} alt="" />
                            {props.location.country}
                        </div>
                        <a href={props.location.googleMapsLink} className="google-maps-link">
                            View on Google Maps
                        </a>
                    </div>
                    <div className="name">
                        {props.name}
                    </div>
                    <div className="date">
                        {props.date.start} - {props.date.end}
                    </div>
                    <div className="description">
                        {props.description}
                    </div>
                </div>
            </div>
            <DelimiterLine />
        </div>
    )
}