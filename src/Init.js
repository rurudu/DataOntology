import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme'
import App from './App';
import ReactDOM, { render } from 'react-dom';
export default function Init() {
    function click() {
        ReactDOM.render(
            <App />,
       
           document.getElementById('root')
           );
        
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