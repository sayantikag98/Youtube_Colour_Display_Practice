import { useState } from "react";

export default function SearchText({
  toggleColour,
  setColourName,
  setColour,
  setToggleColour,
}) {
  const [colourState, setColourState] = useState("");

  const HandlerOnChange = (event) => {
    setColourState(event.target.value);
    setColour("white");
    setColourName("Empty Value");
    setToggleColour(true);
  };

  const HandlerOnSubmit = (event) => {
    event.preventDefault();
    const copyColour = colourState.toLowerCase();
    setColour(copyColour);
    setColourName(copyColour);
    setColourState("");
  };

  const HandlerOnClick = (event) => {
    event.preventDefault();
    setToggleColour(!toggleColour);
  };

  return (
    <form id="form-item" onSubmit={HandlerOnSubmit}>
      <input
        id="search-text"
        placeholder="Add the colour here"
        autoFocus
        value={colourState}
        onChange={HandlerOnChange}
        autoComplete="off"
        required
      />
      <button type="button" id="btn-div" onClick={HandlerOnClick}>
        Toggle Text Colour
      </button>
    </form>
  );
}
