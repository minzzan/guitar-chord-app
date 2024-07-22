import React from "react";

const Fretboard = ({ chord, openStrings, mutedStrings }) => {
  const strings = [1, 2, 3, 4, 5, 6];
  const frets = [0, 1, 2, 3, 4];

  return (
    <svg width="200" height="140" style={{ border: "1px solid black" }}>
      {/* Draw open/muted string markers */}
      {strings.map((string, i) => {
        const isOpen = openStrings.includes(string);
        const isMuted = mutedStrings.includes(string);
        return (
          <React.Fragment key={string}>
            {isOpen && (
              <circle
                cx="10"
                cy={20 + i * 20}
                r="5"
                stroke="black"
                strokeWidth="1"
                fill="none"
              />
            )}
            {isMuted && (
              <>
                <line
                  x1="5"
                  y1={15 + i * 20}
                  x2="15"
                  y2={25 + i * 20}
                  stroke="black"
                  strokeWidth="1"
                />
                <line
                  x1="5"
                  y1={25 + i * 20}
                  x2="15"
                  y2={15 + i * 20}
                  stroke="black"
                  strokeWidth="1"
                />
              </>
            )}
          </React.Fragment>
        );
      })}

      {/* Draw strings */}
      {strings.map((string, i) => (
        <line
          key={string}
          x1="20"
          y1={20 + i * 20}
          x2="180"
          y2={20 + i * 20}
          stroke="black"
          
        />
      ))}

      {/* Draw frets */}
      {frets.map((fret, i) => (
        <line
          key={fret}
          x1={20 + i * 35}
          y1="20"
          x2={20 + i * 35}
          y2="120"
          stroke="black"
          strokeWidth={i === 0 ? "5" : "1"}
        />
      ))}

      {/* Draw finger positions */}
      {chord.map(({ string, fret }) => (
        <circle
          key={`${string}-${fret}`}
          cx={5 + fret * 35}
          cy={20 + (string - 1) * 20}
          r="7"
          fill="black"
        />
      ))}
    </svg>
  );
};

export default Fretboard;
