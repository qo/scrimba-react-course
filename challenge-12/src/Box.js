import "./Box.css"
import {useState} from "react";

export default function Box(props) {

    // If box is off, set background color to "none",
    // otherwise set it to dark blue if dark theme is on
    // or to light blue if dark theme is off.
    let boxBackgroundColor = {
        backgroundColor:
            (props.on ?
                (props.darkTheme ? "#1e447d" : "#5d8dd4") :
                "transparent")
    };

    return (
        <div className="box" style={boxBackgroundColor} onClick={() => props.toggleBox(props.id)}>
            <p>
                {props.id}
            </p>
        </div>
    )
}