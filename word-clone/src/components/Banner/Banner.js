import React from "react";

function Banner({ gameStatus, attempts, answer }) {
  return (
    <div className={gameStatus === "win" ? `banner happy` : `banner sad`}>
      {gameStatus === "win" ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{attempts} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
