import { useState } from "react";

const Square = ({ selectedColor }) => {
  const [individualSquareColor, setIndividualSquareColor] = useState("");

  const setSquareColor = () => {
    setIndividualSquareColor(selectedColor);
  };

  return (
    <div
      style={{ backgroundColor: individualSquareColor }}
      onClick={(e) => setSquareColor()}
      className="square"
    ></div>
  );
};

export default Square;
