import React from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(() => range(6).map(() => ""));
  console.log({ guesses });
  const [numOfGuesses, setNumOfGuesses] = React.useState(0);
  function handleAddGuess(guess) {
    const nextGuesses = [...guesses];
    nextGuesses[numOfGuesses] = guess;
    setGuesses(nextGuesses);
    setNumOfGuesses(numOfGuesses + 1);
  }
  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput handleAddGuess={handleAddGuess} numOfGuesses />
    </>
  );
}

export default Game;
