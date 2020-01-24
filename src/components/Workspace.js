import React from 'react';
import WorkspaceRow from './WorkspaceRow';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      rounded: 'false'
    },
    paper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        textAlign: 'center',
        height: 5,
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
        color: theme.palette.text.light,
        height: 20,
        backgroundColor: theme.palette.background.main
    }
  }));

export default function Workspace() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={0}>
                    <Grid labels xs={3}>
                        <Container className={classes.container}>
                            <Paper className={classes.column_label} spacing={0} square={true}>Ontology Label</Paper>
                        </Container>
                    </Grid>
                    <Grid labels xs={3}>
                        <Container className={classes.container}>
                            <Paper className={classes.column_label} spacing={0} square={true}>File_name labels</Paper>
                        </Container>
                    </Grid>
                    <Grid labels xs={3}>
                        <Container className={classes.container}>
                            <Paper className={classes.column_label} spacing={0} square={true}>File_Name labels</Paper>
                        </Container>
                    </Grid>
                    <Grid labels xs={3}>
                        <Container className={classes.container}>
                            <Paper className={classes.column_label} spacing={0} square={true}>Recommendations</Paper>
                        </Container>
                    </Grid>
                </Grid>
                <WorkspaceRow />
                <WorkspaceRow />
                <WorkspaceRow />
                <WorkspaceRow />
                <WorkspaceRow />
                <WorkspaceRow />
                <WorkspaceRow />
                <WorkspaceRow />
                <WorkspaceRow />
                <WorkspaceRow />
            </Container>
        </div>
    )
}