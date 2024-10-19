import './App.css';
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([])
  const [heroes, setHeroes] = useState([])
  const [missions, setMissions] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <div className="header">Header</div>
      </header>
      <body className="body">
        <div>Body</div>
        <div className="container"></div>
      </body>
      <footer className="footer">
        <div>Footer</div>
      </footer>
    </div>
  );
}

export default App;
