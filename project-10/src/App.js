import './App.css';
import {useState} from "react";
import Intro from "./pages/Intro";
import Quiz from "./pages/Quiz";

export default function App() {

    const [mode, setMode] = useState("intro");

    const app = mode === "intro" ? < Intro setMode={setMode} /> : <Quiz />;

    return (
        <div className="App">
            { app }
        </div>
    )
}
