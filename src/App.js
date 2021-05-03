import logo from './logo.svg';
import Search from './Components/Search/Search'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Search/>
    </div>
  );
}

export default App;
