import "./Main.css"
import {useEffect, useState} from "react";

export default function Main() {

    const [memes, setMemes] = useState([]);

    useEffect(() => {

        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemes(data.data.memes));

    }, []);

    function getRandomMemeUrl() {
        if (memes.length) {
            const randomMeme = memes[Math.floor((Math.random()*memes.length))];
            return randomMeme.url;
        }
        return "https://upload.wikimedia.org/wikipedia/ru/thumb/7/78/Trollface.svg/1200px-Trollface.svg.png";
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