import colorNames from "colornames";

export default function ColourBox({ colour, colourName, toggleColour }) {
  const textColour = toggleColour === false ? "#fff" : "#000";
  const styleObj = {
    color: textColour,
  };
  return (
    <div id="colour-box" style={{ backgroundColor: colour }}>
      <p style={styleObj}>{colourName}</p>
      <p style={styleObj}>{colorNames(colourName)}</p>
    </div>
  );
}
