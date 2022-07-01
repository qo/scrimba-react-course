import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Page() {
    return (
        <div>
            <h1>Why I'm excited to be learning React</h1>
            <ol>
                <li>React is highly maintained library and used by a lot of companies</li>
                <li>I can instantly see the result via my browser</li>
                <li>There is a huge library of React documentation</li>
            </ol>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);
