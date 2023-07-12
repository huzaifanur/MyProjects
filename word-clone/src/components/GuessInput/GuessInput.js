import React from "react";
import { useState } from "react";

function GuessInput({ handleAddGuess }) {
  const [GuessInput, setGuessInput] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddGuess(GuessInput);
        setGuessInput("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={GuessInput}
        minLength={5}
        maxLength={5}
        onChange={(e) => setGuessInput(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
