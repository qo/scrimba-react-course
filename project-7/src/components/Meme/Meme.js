import "./Meme.css"
import memesData from "../../data/memesData"

export default function Meme() {
    const memesList = memesData.data.memes;
    const randomMeme = memesList[Math.floor((Math.random()*memesList.length))];
    console.log(randomMeme);
    const randomMemeUrl = randomMeme.url;
    return (
        <img className="meme" src={randomMemeUrl}/>
    )
}