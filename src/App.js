import React from 'react';
import Menu from './Components/Menu'
import Grid from '@material-ui/core/Grid';
import RomanNumberConverter from './Components/RomanNumberConverter';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  paper: {
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'column',
    padding: 20,
    height: '84vh',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2}>
        <Menu brand='Optiopay Test' />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <RomanNumberConverter />
          </Paper>
        </Grid>      
      </Grid>
    </>
  )
}

export default App;