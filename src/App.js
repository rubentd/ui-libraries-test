import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import Button  from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import './App.css';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  margin: {
    display: 'block',
    marginBottom: 20,
    width: '100%',
  },
  bootstrapInput: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
    textTransform: 'uppercase',
  },
  button: {
    textTransform: 'uppercase',
    backgroundColor: '#ea5f25 !important',
    color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <Paper className="card">
          <h2>Register</h2>

          <div className="card-content">
            <FormControl className={classes.margin} fullWidth>
              <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel}>
                First Name
              </InputLabel>
              <InputBase
                placeholder="First Name"
                classes={{
                  root: classes.bootstrapRoot,
                  input: classes.bootstrapInput,
                }}
                fullWidth
              />
            </FormControl>
            <FormControl className={classes.margin} fullWidth>
              <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel}>
                Last name
              </InputLabel>
              <InputBase
                placeholder="Last Name"
                classes={{
                  root: classes.bootstrapRoot,
                  input: classes.bootstrapInput,
                }}
                fullWidth
              />
            </FormControl>
            <FormControl className={classes.margin} fullWidth>
              <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel}>
                Email
              </InputLabel>
              <InputBase
                type="email"
                placeholder="Email"
                classes={{
                  root: classes.bootstrapRoot,
                  input: classes.bootstrapInput,
                }}
                fullWidth
              />
            </FormControl>
            <Button color="primary" fullWidth className={classes.button}>Submit</Button>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
