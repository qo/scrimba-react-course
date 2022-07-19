import "./Main.css"
import {useState} from "react";
import memesData from "../../data/memesData"

export default function Main() {

    function getRandomMemeUrl() {
        const memesList = memesData.data.memes;
        const randomMeme = memesList[Math.floor((Math.random()*memesList.length))];
        return randomMeme.url;
    }

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        image: getRandomMemeUrl()
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
           ...prevMeme,
           [name]: value
        }));
    }

    function handleClick() {
        setMeme(prevMeme => ({
            ...prevMeme,
            image: getRandomMemeUrl()
        }));
    }

    return (
        <div className="container">
            <div className="form">
                <div className="inputs">
                    <input
                        className="input"
                        type="text"
                        placeholder="Upper Text"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                    <input
                        className="input"
                        type="text"
                        placeholder="Lower Text"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </div>
                <button className="button" onClick={handleClick}>
                    <span>Get a new image</span>
                    <span role="img" aria-label="image"> 🖼️</span>
                </button>
            </div>
            <div className="meme">
                <img className="meme-image" src={meme.image} alt="" />
                <div className="meme-text top">
                    {meme.topText}
                </div>
                <div className="meme-text bottom">
                    {meme.bottomText}
                </div>
            </div>
        </div>
    )
}