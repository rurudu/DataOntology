import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme'
import App from './App';
import ReactDOM, { render } from 'react-dom';

// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default function Init() {
    // receiving file data from main.js
    const ipc = window.require('electron').ipcRenderer;
    ipc.on('setData', (event, args) => {
      var app = React.createElement(App)
      ReactDOM.render(
        app,
     
        document.getElementById('root')
      );
      // TODO we need to remove this sleep and instead pass this data in as an
      // argument when rendering the app. This is just for the demo because I don't
      // feel like doing that right now.
      sleep(1).then(() => {
        window.app.getDataGrid().setRowData(args)
      });
    });
    ipc.on('undo', (event, args) => {
      window.app.getDataGrid().undo()
    });
    ipc.on('redo', (event, args) => {
      window.app.getDataGrid().redo()
    });

    ipc.on('getData', (event, args) => {
      var data = window.app.getDataGrid().getRowData();
      ipc.send('getData-reply', data)
      event.returnValue = true
    });


    return (
      <div className="Init" >
        <ThemeProvider theme={theme}>
          <div id="commands" aligned = 'center' >
            <font color="gray">
              <br /><br />Open File:   Ctrl + O
              <br />Open Recent:    Ctrl + R
            </font>
          </div>
        </ThemeProvider>
      </div>
    );
  }