import React, { useState } from "react";
import Fretboard from "./Fretboard";
import chordData from "./chordData";

const App = () => {
  const [chord, setChord] = useState("A");

  const handleChange = (event) => {
    setChord(event.target.value);
  };

  return (
    <div>
      <h1>Guitar Chord Viewer</h1>
      <select value={chord} onChange={handleChange}>
        {Object.keys(chordData).map((chord) => (
          <option key={chord} value={chord}>
            {chord}
          </option>
        ))}
      </select>
      <Fretboard 
        chord={chordData[chord].positions}
        openStrings={chordData[chord].openStrings}
        mutedStrings={chordData[chord].mutedStrings}
      />
    </div>
  );
};

export default App;
