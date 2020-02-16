import React, { Component } from 'react';
import theme from './Theme'
import "./App.css";
import { ThemeProvider } from '@material-ui/core/styles';
import DataGrid from './components/DataGrid';
import ForceGraph from './components/ForceGraph';
import Ribbon from './components/Ribbon';

<<<<<<< HEAD

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

=======
class App extends Component {
  constructor(props) {
    super(props)
    window.app = this
    this.dataGridElement = React.createRef();
  }
>>>>>>> 3bd07ca498ca70e5e939f7fe219ea535d66dcfe2

  getDataGrid() {
    return this.dataGridElement.current
  }

  render() {

    return (
      <div className="App" >
        <ThemeProvider theme={theme}>
          <div class="grid">
            <div class="Ribbon">
              <Ribbon />
            </div>
            <div class="Workspace">
              <DataGrid ref={this.dataGridElement} />
            </div>
            <div class="graph">
              <ForceGraph/>
            </div>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App
  