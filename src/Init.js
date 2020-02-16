import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme'
import App from './App';
import ReactDOM, { render } from 'react-dom';
import csv from 'csvtojson';
import FileReader from 'filereader'
import Papa from 'papaparse'

export default function Init() {
    function click() {
        var app = React.createElement(App)
        ReactDOM.render(
          app,
       
          document.getElementById('root')
          );

          // receiving file data from main.js
          const ipc = window.require('electron').ipcRenderer;
          ipc.on('csvData', (event, args) => {
            window.app.getDataGrid().setRowData(args)
          });
    }
    
    return (
      <div className="Init" >
        <ThemeProvider theme={theme}>
        <div id="commands" aligned = 'center' ><font color="gray">Commands to be added!</font></div>
        <button id = 'nextbutton' onClick={click}>next</button>
  
      </ThemeProvider>
      </div>
  
      );
    }