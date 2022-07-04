import "./Joke.css"

export default function Joke(props) {
    let jokeStyle;
    if (props.data.isPun) jokeStyle="pun";
    else jokeStyle="not-pun";
    return (
        <div className={jokeStyle}>
            { props.data.setup &&
                <div>
                    <h1>
                        {props.data.setup}
                    </h1>
                    <h3>
                        {props.data.punchline}
                    </h3>
                    <span>
                        ↑ {props.data.upvotes}
                    </span>
                    <span>
                        ↓ {props.data.downvotes}
                    </span>
                    { props.data.comments &&
                        <p>
                            {props.data.comments}
                        </p>
                    }
                </div>
            }
            { !props.data.setup &&
                <div>
                    <h1>
                        {props.data.punchline}
                    </h1>
                    <span>
                    ↑ {props.data.upvotes}
                </span>
                <span>
                    ↓ {props.data.downvotes}
                </span>
                    { props.data.comments &&
                        <p>
                            {props.data.comments}
                        </p>
                    }
                </div>
            }
            <hr/>
        </div>
    )
}