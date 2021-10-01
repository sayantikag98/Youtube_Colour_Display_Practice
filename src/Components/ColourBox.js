export default function ColourBox({ colour, colourName }) {
  return (
    <div id="colour-box" style={{ backgroundColor: colour }}>
      {colourName}
    </div>
  );
}
