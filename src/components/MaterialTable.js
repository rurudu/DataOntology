import React from 'react';
import MaterialTable from 'material-table';
import { SingleSelect } from "react-select-material-ui";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid'

import { Paper } from '@material-ui/core';
import { MTableToolbar } from 'material-table';

import MergeButton from './LabelDefinition';

const styles = makeStyles(theme => ({
  root: {
    color: theme.palette.primary.main
  },
  header: {
    backgroundColor: theme.palette.primary.main
  },
  mergeButton: {
    paddingLeft: 10
  },
  container: {
    maxWidth: false
  }
}));

export default function Table() {
const classes = styles();

  const [state, setState] = React.useState({
    columns: [
      { title: 'Label', field: 'label',
        editComponent: props => (
          <SingleSelect
            options={[{label: 'null', value: 'null'},
                      {label: 'altitude', value: 'altitude'},
                      {label: 'pressure', value: 'pressure'},
                      {label: 'atmospheric pressure', value: 'atmospheric pressure'},
                      {label: 'average speed', value: 'average speed'},
                      {label: 'top speed', value: 'top speed'},
                      {label: 'heading', value: 'heading'},
                      {label: 'vertical acceleration', value: 'vertical acceleration'},
                      {label: 'pitch', value: 'pitch'},
                      {label: 'time', value: 'time'},
                      {label: 'velocity', value: 'velocity'},]}
            value={props.value}
            placeholder="Select Category"
            className="autocompleteSelect"
            onChange={value => props.onChange(value)}
          />
          /*
          <Autocomplete
            debug
            //type='text'
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
            options={[{value: 'altitude'}, {value: 'pressure'}, {value: 'atmospheric pressure'}]}
            getOptionLabel={option => option.label}
            style={{ width: 300 }}
            renderInput={params => <TextField {...params} label="debug" margin="normal" fullWidth />
          }
          />
          */
        ),
      },
      { title: 'File', field: 'file', editable: 'never' },
    ],
    data: [
      { id: 1, label: 'null', file: 'p_alt' },
      { id: 2, label: 'null', file: 'air_pressure' },
      { id: 3, label: 'null', file: 'av_spd' },
      { id: 4, label: 'null', file: 'tp_spd' },
      { id: 5, label: 'null', file: 'heading' },
      { id: 6, label: 'null', file: 'v_acc' },
      { id: 7, label: 'null', file: 'pit' },
      { id: 8, label: 'null', file: 'temp' },
      { id: 9, label: 'null', file: 'grav_frce' },
      { id: 10, label: 'null', file: 'vel' },
      { id: 11, label: 'null', file: 'hr' },
      { id: 12, label: 'null', file: 'min', relId: 11 },
      { id: 13, label: 'null', file: 'sec', relId: 11 },
    ],
    //relationshipData: (row, rows) => rows.find(a.id === b.relId)
  });

  return (
    <MaterialTable
      options={{
        showTitle: false,
        pageSize: 9,
        selection: false,
      }}
      columns={state.columns}
      data={state.data}
      components={{
        Container: props => (
          <div>
            <Paper className={classes.container} {...props} />
          </div>
        ),
        Toolbar: props => (
          <div className={classes.header} >
            <Grid
              className={classes.mergeButton}
              container
              justify='space-between'
              alignItems='center'
              alignContent='center'
				    >
              <Grid item>
                <MergeButton />
              </Grid>
              <Grid item>
                <MTableToolbar {...props} />
              </Grid>
            </Grid>
          </div>
        ),
      }}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
      parentChildData={(row, rows) => rows.find(a => a.id === row.relId)}
    />
  );
}