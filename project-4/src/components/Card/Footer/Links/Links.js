import facebook from "./images/fb-icon.svg"
import github from "./images/gh-icon.svg"
import instagram from "./images/inst-icon.svg"
import twitter from "./images/tw-icon.svg"

import "./Links.css"

export default function Links() {
    return (
        <div className="links">
            <input type="image" src={facebook} alt="facebook"/>
            <input type="image" src={github} alt="github"/>
            <input type="image" src={instagram} alt="instagram"/>
            <input type="image" src={twitter} alt="twitter"/>
        </div>
    )
}