import ColourBox from "./Components/ColourBox";
import SearchText from "./Components/SearchText";
import { useState } from "react";

export default function App() {
  const [colour, setColour] = useState("white");
  const [colourName, setColourName] = useState("Empty Value");

  return (
    <div id="app">
      <ColourBox colour={colour} colourName={colourName} />
      <SearchText setColourName={setColourName} setColour={setColour} />
    </div>
  );
}
