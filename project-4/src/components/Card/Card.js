import Main from "./Main/Main"
import About from "./About/About"
import Interests from "./Interests/Interests"
import Footer from "./Footer/Footer"
import "./Card.css"

export default function Card() {
    return (
        <div className="card">
            <div className="card-content">
                <Main />
                <About />
                <Interests />
                <Footer />
            </div>
        </div>
    )
}
