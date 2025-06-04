import "./App.css";
import { useState, useEffect } from "react";
import { generateItem } from "./functions/items";
// import { createLevel } from "./functions/levels";
import { generateGrid } from "./functions/grid";



function App() {
  const [items, setItems] = useState({});
  const [level, setLevel] = useState({});
  // const [heroes, setHeroes] = useState([])
  // const [missions, setMissions] = useState([])

  useEffect(() => {
    createItem(10, 0);
    createLevel(generateGrid(15, 20));
  }, []);

  function createItem(difficulty, itemFind) {
    let newItems = generateItem(difficulty, itemFind);
    setItems((items) => ({
      ...items,
      ...newItems,
    }));
  }

  function createLevel() {
    let newLevel = {
      grid: createLevel
    };
    setLevel(newLevel);
  }

  return (
    <div className="App">
      <header className="header">
        <div className="header">Mod Type: {items.itemType}</div>
      </header>
      <body className="body">
        <div>Number of mods: {items.modifiers}</div>
        {Array.isArray(items.mods) && items.mods.length > 0 ? (
          items.mods.map((mod, index) => (
            <div key={index}>
              <p>
                <strong>Mod Name:</strong> {mod.modName}
              </p>
              <p>
                <strong>Mod Value:</strong> {mod.modValue}
              </p>
            </div>
          ))
        ) : (
          <p>no mods</p>
        )}
      </body>
      <footer className="footer">
        <div>Footer</div>
      </footer>
    </div>
  );
}

export default App;
