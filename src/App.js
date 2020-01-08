import React from 'react';
import theme from './Theme'
import { ThemeProvider } from '@material-ui/core/styles';
//import TopBar from './components/TopBar';
import Table from './components/MaterialTable';

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
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Table />
      </ThemeProvider>
    </div>
    )
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
  