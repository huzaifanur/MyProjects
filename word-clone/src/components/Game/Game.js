import React from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(() => range(6).map(() => ""));
  const [numOfGuesses, setNumOfGuesses] = React.useState(0);
  //palying, win, loss
  const [gameStatus, setGameStatus] = React.useState("playing");

  function handleAddGuess(guess) {
    const nextGuesses = [...guesses];
    nextGuesses[numOfGuesses] = guess;
    setGuesses(nextGuesses);
    const nextNumOfGuesses = numOfGuesses + 1;
    setNumOfGuesses(nextNumOfGuesses);
    if (guess === answer) {
      setGameStatus("win");
    } else if (nextNumOfGuesses === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("loss");
    }
  }
  console.log({ gameStatus });

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput
        handleAddGuess={handleAddGuess}
        gameStatus={gameStatus}
        answer={answer}
        attemptes={numOfGuesses}
      />
    </>
  );
}

export default Game;
