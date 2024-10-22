import "./App.css";
import { useState, useEffect } from "react";
import { generateItem } from "./functions/items";

function App() {
  const [items, setItems] = useState({});
  // const [heroes, setHeroes] = useState([])
  // const [missions, setMissions] = useState([])

  useEffect(() => {
    createItem(10, 0);
  }, []);

  function createItem(difficulty, itemFind) {
    let newItems = generateItem(difficulty, itemFind);
    setItems((items) => ({
      ...items,
      ...newItems,
    }));

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
