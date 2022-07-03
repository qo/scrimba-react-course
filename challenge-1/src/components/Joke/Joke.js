export default function Joke(props) {
    return (
        <div>
            { props.setup &&
                <div>
                    <h1>
                        {props.setup}
                    </h1>
                    <h3>
                        {props.punchline}
                    </h3>
                </div>
            }
            { !props.setup &&
                <h1>
                    {props.punchline}
                </h1>
            }
            <hr/>
        </div>
    )
}