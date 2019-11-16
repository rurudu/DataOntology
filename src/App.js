import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const {app} = window.require('electron').remote;

function App() {
  return (
    <div className="App">
      <header className="ToolBar-header">
        <button className="Merge-button" type="button">
          Merge
        </button>
        <button className="AutoMerge-button" type="button">
          Auto-Merge
        </button>
      </header>
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
