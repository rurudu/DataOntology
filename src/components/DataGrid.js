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
          checkboxSelection: true, headerCheckboxSelection: true, /*cellEditor: "agSelectCellEditor", cellEditorParams: {
            values: ['null', 'altitude', 'pressure', 'velocity', 'average speed'] }*/
            cellEditor: "agTextCellEditor"
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
      style: {
        width: '100%',
        height: '100%'
      }
    }

  }  

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;     
  };

  undo() {
    this.gridApi.undoCellEditing();
  }
  
  redo() {
    this.gridApi.redoCellEditing();
  }  
  
  setRowData(rows) {
    this.gridApi.setRowData(rows)
  }

  getRowData(){
    let rowData = []
    this.gridApi.forEachNode(node => rowData.push(node.data))
    return rowData
  }

  render() {
   
    return (
      <div id="grid"
        className="ag-theme-balham-dark"
        style={{
          height: '100%',
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          enableRangeSelection={true}
          enableFillHandle={true}
          undoRedoCellEditing={true}
          undoRedoCellEditingLimit={this.state.undoRedoCellEditingLimit}
          enableCellChangeFlash={true}
          onGridReady={this.onGridReady}
          rowSelection={this.state.rowSelection}>
            
        </AgGridReact>
      </div> 
    );
  }

}

export default DataGrid;
