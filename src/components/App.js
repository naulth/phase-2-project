import '../App.css';
import Home from "./Home"
import Cards from './Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cards />
        <Home />
      </header>
    </div>
  );
}

export default App;
