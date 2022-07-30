import './App.css';
import {useState} from "react";
import Intro from "./pages/Intro";
import Quiz from "./pages/Quiz";

export default function App() {

    // App state (either "intro" or "quiz")
    const [mode, setMode] = useState("intro");

    // Pass setMode to Intro, so mode can be changed
    // via "Start Quiz" button
    const app = (
        mode === "intro"
        ?
        <Intro setMode={setMode} />
        :
        <Quiz />
    );

    return (
        <div className="App">
            { app }
        </div>
    )
}
