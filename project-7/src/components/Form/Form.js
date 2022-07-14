import "./Form.css"

export default function Form() {

    function getNewMeme() {
        console.log("Here you should get a new meme...");
    }

    return (
        <div className="form">
            <div className="inputs">
                <input className="input" type="text" placeholder="Upper Text" />
                <input className="input" type="text" placeholder="Lower Text" />
            </div>
            <button className="button" onClick={getNewMeme}>
                <span>Get a new image</span>
                <span role="img" aria-label="image"> 🖼️</span>
            </button>
        </div>
    )
}