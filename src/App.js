import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "🥳 ": "Enjoy",
  "🤔": "Thinking",
  "😂": "Laughter",
  "❤️": "love",
  "✨": "Sparkles",
  "🔥": "Fire"
};

const knownEmojis = Object.keys(emojiDictionary);

export default function App() {
  var [userInput, setUserInput] = useState("");

  function clickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setUserInput(meaning);
  }

  function emojiInputHandler(event) {
    var input = event.target.value;
    var emojiMeaning = emojiDictionary[input];
    if (emojiMeaning === undefined) {
      emojiMeaning = "This emoji isn't there is our Page";
    }
    setUserInput(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>

      <input onChange={emojiInputHandler} style={{ padding: "1rem" }}></input>
      <h2>{userInput}</h2>
      <h3>Emojis We know</h3>
      {knownEmojis.map(function (emoji) {
        return (
          <span
            style={{ padding: "0.7rem", fontSize: "2rem", cursor: "pointer" }}
            onClick={() => clickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
