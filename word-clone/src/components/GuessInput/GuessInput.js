import React from "react";
import { useState } from "react";
import Banner from "../Banner";
function GuessInput({ handleAddGuess, gameStatus, answer, attempts }) {
  const [GuessInput, setGuessInput] = useState("");
  const isDisables = gameStatus !== "playing";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (GuessInput.length !== 5) {
          return;
        }
        handleAddGuess(GuessInput);
        setGuessInput("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      {isDisables ? (
        <Banner gameStatus={gameStatus} answer={answer} attempts={attempts} />
      ) : (
        <input
          id="guess-input"
          type="text"
          disabled={isDisables}
          value={GuessInput}
          minLength={5}
          maxLength={5}
          onChange={(e) => setGuessInput(e.target.value.toUpperCase())}
        />
      )}
    </form>
  );
}

export default GuessInput;
