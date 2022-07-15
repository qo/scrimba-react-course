import "./Main.css"
import {useState} from "react";
import memesData from "../../data/memesData"

export default function Main() {

    function getRandomMemeUrl() {
        const memesList = memesData.data.memes;
        const randomMeme = memesList[Math.floor((Math.random()*memesList.length))];
        return randomMeme.url;
    }

    const [currentMemeUrl, setCurrentMemeUrl] = useState(getRandomMemeUrl());

    function handleClick() {
        setCurrentMemeUrl(getRandomMemeUrl());
    }

    return (
        <div className="container">
            <div className="form">
                <div className="inputs">
                    <input className="input" type="text" placeholder="Upper Text" />
                    <input className="input" type="text" placeholder="Lower Text" />
                </div>
                <button className="button" onClick={handleClick}>
                    <span>Get a new image</span>
                    <span role="img" aria-label="image"> 🖼️</span>
                </button>
            </div>
            <div className="meme-container">
                <img className="meme" src={currentMemeUrl}/>
            </div>
        </div>
    )
}