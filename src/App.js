import React, { Component } from 'react';
import theme from './Theme'
import "./App.css";
import { ThemeProvider } from '@material-ui/core/styles';
import DataGrid from './components/DataGrid';
import ForceGraph from './components/ForceGraph';
import Ribbon from './components/Ribbon';

class App extends Component {
  constructor(props) {
    super(props)
    window.app = this
    this.dataGridElement = React.createRef();
  }

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
  