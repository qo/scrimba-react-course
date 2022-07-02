import photo from "./images/photo.png";
import email from "./images/mail-icon.svg"
import linkedin from "./images/linkedin-icon.svg"
import "./Main.css"

export default function Main() {
    return (
        <div className="main">
            <img className="photo" src={photo} alt="photo"/>
            <div className="name">Laura Smith</div>
            <div className="job">Frontend Developer</div>
            <div className="website">laurasmith.website</div>
            <div className="buttons">
                <div className="email-button">
                    <img src={email} alt="email"/>
                    <div className="email-button-text">Email</div>
                </div>
                <div className="linkedin-button">
                    <img src={linkedin} alt="linkedin"/>
                    <div className="linkedin-button-text">LinkedIn</div>
                </div>
            </div>
        </div>
    )
}