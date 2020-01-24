import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';

class DataGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowSelection: 'multiple',
      columnDefs: [
        { headerName: "Ontology Label", field: "ont_label", sortable: true, filter: true, editable: true, 
          checkboxSelection: true, headerCheckboxSelection: true, cellEditor: "agSelectCellEditor", cellEditorParams: {
            values: ['null', 'altitude', 'pressure', 'velocity', 'average speed']
          }
        },
        { headerName: "File Label", field: "file_label", sortable: true, filter: true }
      ],
      // allows copy / paste using cell ranges
      enableRangeSelection: true,

      // enables the fill handle
      enableFillHandle: true,

      // enables undo / redo
      undoRedoCellEditing: true,

      // restricts the number of undo / redo steps to 5
      undoRedoCellEditingLimit: 5,

      // enables flashing to help see cell changes
      enableCellChangeFlash: true,
      rowData: [
        { ont_label: 'null', file_label: 'p_alt' },
        { ont_label: 'null', file_label: 'air_pressure' },
        { ont_label: 'null', file_label: 'av_spd' },
        { ont_label: 'null', file_label: 'tp_spd' },
        { ont_label: 'null', file_label: 'heading' },
        { ont_label: 'null', file_label: 'v_acc' },
        { ont_label: 'null', file_label: 'pitch' },
        { ont_label: 'null', file_label: 'temperature' },
        { ont_label: 'null', file_label: 'grav_frce' },
        { ont_label: 'null', file_label: 'pressure' },
        { ont_label: 'null', file_label: 'hr' },
        { ont_label: 'null', file_label: 'min' },
        { ont_label: 'null', file_label: 'sec' }
      ],
      style: {
        width: '100%',
        height: '100%'
      }
    }

    
  function undo() {
      this.api.undoCellEditing();
  }
  
  function redo() {
      this.api.redoCellEditing();
  }  
  
  }

  
  render() {
    
    return (
      <div id="g"
        className="ag-theme-balham-dark"
        style={{
          height: '100%',
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          rowSelection={this.state.rowSelection}>
        </AgGridReact>
      </div>
    );
  }

 setHeight() {

    document.getElementById("g").style.height='100%'   
 }
  
  
  

}

export default DataGrid;
