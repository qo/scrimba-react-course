import photo from "./images/photo.png";
import "./Main.css"

export default function Main() {
    return (
        <div className="main">
            <img className="photo" src={photo} alt="photo"/>
            <div className="name">Laura Smith</div>
            <div className="job">Frontend Developer</div>
            <div className="website">laurasmith.website</div>
            <div className="buttons">
                <button className="email">Email</button>
                <button className="linkedin">LinkedIn</button>
            </div>
        </div>
    )
}