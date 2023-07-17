import React from "react";

function Keyboard() {
  const ROWS = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <div className="keyboard">
      {ROWS.map((row) => (
        <div className="row">
          {row.map((letter) => (
            <span className="letter correct">{letter}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
