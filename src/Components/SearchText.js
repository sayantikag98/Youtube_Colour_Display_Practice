import { useState } from "react";

export default function SearchText({ setColourName, setColour }) {
  const [colourState, setColourState] = useState("");

  const HandlerOnChange = (event) => {
    setColourState(event.target.value);
  };

  const HandlerOnSubmit = (event) => {
    event.preventDefault();
    const copyColour = colourState.toLowerCase();
    setColour(copyColour);
    setColourName(colourState);
    setColourState("");
  };

  return (
    <form onSubmit={HandlerOnSubmit}>
      <input
        id="search-text"
        placeholder="Add the colour here"
        autoFocus
        value={colourState}
        onChange={HandlerOnChange}
      />
    </form>
  );
}
