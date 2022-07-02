import "./Hero.css"
import grid from "./images/grid.png"

export default function Hero() {
    return (
        <div className="hero">
            <img className="grid" src={grid} alt=""/>
            <div className="paragraph-title">
                Online Experiences
            </div>
            <div className="paragraph">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </div>
        </div>
    )
}