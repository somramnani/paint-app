import "./App.css";

const Square = () => {
  return <div className="square"></div>;
};

function App() {
  const board = Array(10).fill(Array(10).fill(null));

  return (
    <div className="App">
      <div className="board-container">
        {board.map((pixel, colIndex) => {
          return (
            <div className="square-container">
              {pixel.map((square, index) => {
                return <Square />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
