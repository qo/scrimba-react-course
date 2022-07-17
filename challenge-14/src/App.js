import './App.css';
import React, {useState} from "react";

export default function App() {
  const [messages, setMessages] = useState(["a", "b"]);

    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */

    function addMessage() {
        setMessages(messages => [...messages, "dummy"]);
    }

    function subMessage() {
        if (messages.length > 1)
            setMessages(messages => messages.slice(0, messages.length - 1));
        else
            setMessages([]);
    }

  return (
      <div className="App">
          <div className="msg-amt">
              {
                  messages.length
                      ?
                      <h1>You have {messages.length} unread { messages.length > 1 ? "messages" : "message"}</h1>
                      :
                      <h1>You're all caught up!</h1>
              }
          </div>
          <div className="change-amt-of-msg">
              <button onClick={addMessage}>+</button>
              <button onClick={subMessage}>-</button>
          </div>
      </div>
  )
}