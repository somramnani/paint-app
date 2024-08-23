import "./App.css";
import { useState } from "react";
import Square from "./components/Square";

function App() {
  const board = Array(10).fill(Array(10).fill(null));
  const [userInput, setUserInput] = useState("#000000");

  const handleOnChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="App">
      <h1>Paint</h1>
      <div className="color-selector">
        <input
          type="color"
          id="head"
          name="head"
          value={userInput}
          onChange={(e) => handleOnChange(e)}
        />
        <label for="head">Pick a color</label>
      </div>
      <div className="board-container">
        {board.map((pixel, colIndex) => {
          return (
            <div className="square-container">
              {pixel.map((square, index) => {
                return <Square selectedColor={userInput} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
