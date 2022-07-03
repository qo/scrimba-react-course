import "./Joke.css"

export default function Joke(props) {
    let jokeStyle;
    if (props.isPun) jokeStyle="pun";
    else jokeStyle="not-pun";
    return (
        <div className={jokeStyle}>
            { props.setup &&
                <div>
                    <h1>
                        {props.setup}
                    </h1>
                    <h3>
                        {props.punchline}
                    </h3>
                    <span>
                        ↑ {props.upvotes}
                    </span>
                    <span>
                        ↓ {props.downvotes}
                    </span>
                    { props.comments &&
                        <p>
                            {props.comments}
                        </p>
                    }
                </div>
            }
            { !props.setup &&
                <div>
                    <h1>
                        {props.punchline}
                    </h1>
                    <span>
                    ↑ {props.upvotes}
                </span>
                <span>
                    ↓ {props.downvotes}
                </span>
                    { props.comments &&
                        <p>
                            {props.comments}
                        </p>
                    }
                </div>
            }
            <hr/>
        </div>
    )
}