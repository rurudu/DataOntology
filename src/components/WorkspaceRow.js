import React from 'react';
import { Grid, Container, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: "primary",
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.main,
        height: 5,
        backgroundColor: theme.palette.background.main,
    },
    container: {
        padding: 0,
        maxWidth: '100%',
    },
    column_label: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        textAlign: 'center',
        height: 20,
    }
  }));

export default function WorkspaceRow() {
    const classes = useStyles();
    return (
        <Grid container spacing={0}>
            <Grid labels xs={3}>
                <Container className={classes.container}>
                    <Paper className={classes.paper} spacing={0} square={true}>Entry</Paper>
                </Container>
            </Grid>
            <Grid labels xs={3}>
                <Container className={classes.container}>
                    <Paper className={classes.paper} spacing={0} square={true}>Entry</Paper>
                </Container>
            </Grid>
            <Grid labels xs={3}>
                <Container className={classes.container}>
                    <Paper className={classes.paper} spacing={0} square={true}>Entry</Paper>
                </Container>
            </Grid>
            <Grid labels xs={3}>
                <Container className={classes.container}>
                    <Paper className={classes.paper} spacing={0} square={true}>Entry</Paper>
                </Container>
            </Grid>
        </Grid>
    )
}