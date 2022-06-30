import './App.css';
import Relogio from './components/Relogio';
import BolaTimida from './components/BolaTimida';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="test_alinhamento">
          <div className="relogio">
          <Relogio/>
          </div>
          <div className="row_2">
            <p>Manipulacao de items</p>
          </div>
        </div>
        <div className="column">
          <BolaTimida/>
        </div>
      </header>
    </div>
  );
}

export default App;
