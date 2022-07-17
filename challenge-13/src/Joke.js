import "./Joke.css"
import {useState} from "react";

export default function Joke(props) {

    const [punchlineIsShown, showPunchline] = useState(false);

    function togglePunchline() {
        showPunchline(isShown => !isShown);
    }

    return (
        <div>
            {/* Show setup only if joke has a setup */}
            { props.setup &&
                <h3>{props.setup}</h3>
            }

            {/*
                Show the punchline only if
                joke has no setup or
                punchlineIsShown is true.
                Also, if joke has no setup,
                use <h3>, otherwise use <p>
            */}
            { (!props.setup || punchlineIsShown) &&
                    props.setup ? <p>{props.punchline}</p> : <h3>{props.punchline}</h3>
            }

            {/*
                Show this button only if joke has a setup
            */}
            {
                props.setup &&
                <button onClick={togglePunchline}>
                    { punchlineIsShown ? "Hide Punchline" : "Show Punchline" }
                </button>
            }

            <hr />
        </div>
    );
}