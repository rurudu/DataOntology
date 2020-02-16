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

          // receiving files from main.js
          const ipc = window.require('electron').ipcRenderer;
          ipc.on('files', (event, args) => {
            //FileReader.re
            /*
            csv({noheader:true, output:"csv"})
            .fromString(args)
            .then((csvRow)=>{
            csvRow.forEach(e => this.state.rowData.push({ont_label:e[0], file_label:e[1]}))
            })
            */
           /*
            var rowData = Papa.parse(args, {
              download: true,
              header: true,
              //transformHeader: undefined,
              delimiter: ",",
              newline: ",",
              //escapeChar: '"',
              complete: function(results) {
                window.alert(rowData)
              } 
            });
            */
            window.alert(args)
            //window.app.getDataGrid().setRowData([{ ont_label: 'test', file_label: 'p_alt' }])
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