import React, { Component } from 'react';
import theme from './Theme'
import "./App.css";
import { ThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components'
import SplitPane from 'react-split-pane'
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
          <div class="wrapper">
            <div class="flex_col">
              <div class="ribbon">
                <Ribbon />
              </div>
              <div class="workspace">
                <SplitWrapper>
                  <SplitPane 
                    minSize={419} /*must equal grid min-width*/
                    style={ {height: "calc(100% - 52.67px)"} } /* minus ribbon height, temporarily hard coded.*/
                  >
                    <div class="data-grid">
                      <DataGrid ref={this.dataGridElement} />
                    </div>
                    <div class="graph">
                      <ForceGraph />
                    </div>
                  </SplitPane>
                </SplitWrapper>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

export default App

const SplitWrapper = styled.div`
  .Resizer {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #000;
    opacity: 0.2;
    z-index: 1;
    -moz-background-clip: padding;
    -webkit-background-clip: padding;
    background-clip: padding-box;
  }

  .Resizer:hover {
    -webkit-transition: all 2s ease;
    transition: all 2s ease;
  }

  .Resizer.horizontal {
    height: 11px;
    margin: -5px 0;
    border-top: 5px solid rgba(255, 255, 255, 0);
    border-bottom: 5px solid rgba(255, 255, 255, 0);
    cursor: row-resize;
    width: 100%;
  }

  .Resizer.horizontal:hover {
    border-top: 5px solid rgba(0, 0, 0, 0.5);
    border-bottom: 5px solid rgba(0, 0, 0, 0.5);
  }

  .Resizer.vertical {
    width: 11px;
    margin: 0 -5px;
    border-left: 5px solid rgba(255, 255, 255, 0);
    border-right: 5px solid rgba(255, 255, 255, 0);
    cursor: col-resize;
  }

  .Resizer.vertical:hover {
    border-left: 5px solid rgba(0, 0, 0, 0.5);
    border-right: 5px solid rgba(0, 0, 0, 0.5);
  }
  .Pane1 {
    /* background-color: blue; */
  }
  .Pane2 {
    /* background-color: red; */
  }
`;
  