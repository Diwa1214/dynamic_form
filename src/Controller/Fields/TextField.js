import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '45ch',
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField  id="filled-required" label={props.label} 
      onChange={(e)=>{
           props.handleChanging({...props,value:e.target.value})
      }}
       required={props.required} 
        error={props.error} 
        helperText={props.error && props.errorText}  variant="outlined" InputProps={{
        readOnly:props.readOnly ? props.readOnly :false
      }}
       value={props.value} type={props.type} />

    </form>
  );
}
