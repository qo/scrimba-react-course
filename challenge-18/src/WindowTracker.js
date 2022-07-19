import React from "react"

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {

        function updateWindowWidth() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", updateWindowWidth);

        return function() {
            window.removeEventListener("resize", updateWindowWidth);
        };

    }, []);

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
