import React, { useState } from 'react';
import './CharacterCounter.css';

const CharacterCounter = () => {
  const [inputText, setInputText] = useState('');

  const countCharacters = (event) => {
    const newText = event.target.value;
    setInputText(newText);
  };

  const characterCount = inputText.length;

  return (
    <div className="character-counter">
      <hr></hr>
      <label htmlFor="inputText">Enter Text:</label>
      <textarea
        id="inputText"
        name="inputText"
        value={inputText}
        onChange={countCharacters}
        placeholder="Enter Text"
      />
      <p>Character Count: {characterCount}</p>
      <hr></hr>
    </div>
  );
};

export default CharacterCounter;
