import "../App.css";
import { useState, useEffect } from "react";
import { generateItem } from "../functions/items";
// import { createLevel } from "./functions/levels";
import { generateGrid } from "../functions/grid";
import Map from "./Map";


function App() {
  const [items, setItems] = useState({});
  const [level, setLevel] = useState({});
  // const [heroes, setHeroes] = useState([])
  // const [missions, setMissions] = useState([])

  useEffect(() => {
    createItem(10, 0);
    createLevel();
  }, []);

  function createItem(difficulty, itemFind) {
    let newItems = generateItem(difficulty, itemFind);
    setItems((items) => ({
      ...items,
      ...newItems,
    }));
  }

  function createLevel() {
    let newGrid = generateGrid()
    let newLevel = {
      grid: newGrid
    };
    setLevel(newLevel);
  }

  return (
    <div className="App">
      <header className="header">
        <div className="header">Mod Type: {items.itemType}</div>
      </header>
      <body className="body">
        {console.log(level.grid, "level grid")}
        {level.grid && <Map grid={level.grid} />}
      </body>
      <footer className="footer">
        <div>Footer</div>
      </footer>
    </div>
  );
}

export default App;
