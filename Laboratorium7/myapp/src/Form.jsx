import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function FormPropsTextFields() {
    const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off" style={{marginBottom: '10px'}}>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Country"
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Age"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
    </form>
  );
}