import ColourBox from "./Components/ColourBox";
import SearchText from "./Components/SearchText";
import { useState } from "react";

export default function App() {
  const [colour, setColour] = useState("white");
  const [colourName, setColourName] = useState("Empty Value");
  const [toggleColour, setToggleColour] = useState(true);

  return (
    <div id="app">
      <ColourBox
        colour={colour}
        colourName={colourName}
        toggleColour={toggleColour}
      />
      <SearchText
        toggleColour={toggleColour}
        setColourName={setColourName}
        setColour={setColour}
        setToggleColour={setToggleColour}
      />
    </div>
  );
}
