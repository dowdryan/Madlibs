import './App.css';
import addCommas from "./addCommas.js"
import MadlibGen from './MadlibGen.js';

function App() {
  const formattedNumber = addCommas(1234567); // Change input number here.
  return (
    <div>
      <header className="App-header">
        <h1>{formattedNumber}</h1>
        <h1>Madlibs!</h1>
        <MadlibGen/>
      </header>
    </div>
  );
}

export default App;