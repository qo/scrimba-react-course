import "./Form.css"

export default function Form() {
    return (
        <form className="form">
            <div className="inputs">
                <input className="input" type="text" placeholder="Upper Text" />
                <input className="input" type="text" placeholder="Lower Text" />
            </div>
            <button className="button">
                <span>Get a new image</span>
                <span role="img" aria-label="image">  🖼️</span>
            </button>
        </form>
    )
}