import filledStar from "./assets/star-filled.png";
import emptyStar from "./assets/star-empty.png";

export default function Star(props) {

    console.log("Star Rendered");

    let starIcon = (props.isFilled ? filledStar : emptyStar);
    return (
        <img className="star" onClick={props.handleClick} src={starIcon} alt="" />
    )
}