import './App.css';
import Relogio from './components/Relogio';
import ManipuladorDeItens from './components/ManipuladorDeItens';
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
            <ManipuladorDeItens/>
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
