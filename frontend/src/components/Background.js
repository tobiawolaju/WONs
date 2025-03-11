import React from "react";
import "./Background.css";

const BackgroundPattern = () => {
  const numPatterns = 100; // Number of pattern elements
  const patterns = Array.from({ length: numPatterns }, (_, i) => {
    const rotation = Math.floor(Math.random() * 360); // Random rotation between 0-360
    const left = Math.random() * 100; // Random position
    const top = Math.random() * 100;

    return (
      <div
        key={i}
        className="pattern-tile"
        style={{
          transform: `rotate(${rotation}deg)`,
          left: `${left}vw`,
          top: `${top}vh`,
        }}
      />
    );
  });

  return <div className="pattern-background">{patterns}</div>;
};

export default BackgroundPattern;
