import React from 'react';
import theme from './Theme'
import "./App.css";
import { ThemeProvider } from '@material-ui/core/styles';
//import TopBar from './components/TopBar';


//import Table from './components/DataGridOld';
import DataGrid from './components/DataGrid';
import { doc } from 'prettier';
import { Grid } from 'ag-grid-community';

/*
> TODO <
  - Design and implement all components
    - Merge Bar
    - Merge Button
    - Auto-Merge Button
    - Search Bar
    - The workspace
    - Colum label fields
    - Label fields
    - Pop-ups
    - Merge Comfirmation
  - File loading capability
  - File parsed and displayed for each column under the corresponding column
  - Merge capability
  - Pop-up displayed, inputs work
*/

/*
> HIERARCHY <
  - App
    - TopBar
    - Workspace
      - WorkspaceRow
*/

export default function App() {
  function click(){
    var button = document.getElementById('b')
    var c = document.getElementById("commands")
    var ws = document.getElementById("")
    c.style.display = 'none'
    button.style.display = 'none'
    
    var data_grid = document.getElementsByClassName("DataGrid")
    var obj = new DataGrid();
   
   
   
   obj.setHeight();
  
   


  }
  return (
 
    <div className="App" >
      <ThemeProvider theme={theme}>
        <div class="Workspace" id = "ws" >
          <div class="RibbonGoesHere"></div>
         
          {/* <body bgcolor="#E6E6FA"> */}
          <DataGrid/>

          {/* </body> */}
          <div id="commands" aligned = 'center'  ><font color="gray">Commands to be added!</font></div>
          <button id = 'b' onClick={click}>next</button>
       
        </div>
      </ThemeProvider>
    </div>
    
    
    );
  }
  
  // class App extends Component {
  //   render() {
  //     return (
  //       <div className="App">
  //         <TopBar />
  //       </div>
  //     )
  //   }
  // }
  
  // export default App;
  