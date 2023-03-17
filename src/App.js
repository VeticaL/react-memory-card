import "./App.css";
import Score from "./Score";
import Cards from "./Cards";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Memory Game</h1>
      </div>
      <Score />
      <Cards />
      <footer>The odin project @</footer>
    </div>
  );
}

export default App;
