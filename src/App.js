import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  React.useEffect(() => {
    window.fetch('/mock/70395/goods/list').then(res => {
      return res.json()
    })
    .then(res => {
      console.log(res);
      debugger;
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
