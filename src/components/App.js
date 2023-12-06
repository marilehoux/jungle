import logo from '../logo.svg';
import Banner from './Banner';
import Cart from './Cart';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner /> 
      <Cart />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hola Mundo</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React GO
        </a>
      </header>
    </div>
  );
}

export default App;
