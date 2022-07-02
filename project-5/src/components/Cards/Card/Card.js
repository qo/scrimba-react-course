import "./Card.css"
import photo from "./images/photo.png"
import star from "./images/star.svg"

export default function Card() {
    return(
        <div className="card">
            <img className="photo" src={photo} alt=""/>
            <div className="first-row">
                <img className="star" src={star} alt=""/>
                <div className="rating">5.0</div>
                <div className="amount-of-ratings">(6)</div>
                <div className="dot">·</div>
                <div className="location">USA</div>
            </div>
            <div className="second-row">
                <div className="title">
                    Life lessons with Katie Zaferes
                </div>
            </div>
            <div className="third-row">
                <div className="price">
                    From $136 /
                </div>
                <div className="person-word">
                     person
                </div>
            </div>
        </div>
    )
}