import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "45ch",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();

  const handleChange = (event) => {
  
    //  props.handleChange({...props,value:event.target.value})
     console.log(event.target.value);
  };

  return (
    <div>
      {/* <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">{props.label}</InputLabel>
        <Select
          labelId={props.label}
          id="demo-simple-select-filled"
          value={"B.E"}
          onChange={(e)=>{
             return console.log("hai");
          }}
          variant="outlined"
        >
         {props.options.map((option,index)=>{
             return (
                 <>
                  <MenuItem value={option.value}>{option.name}</MenuItem>

                 </>
             )
         })}
        </Select>
      </FormControl> */}
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={props.value}
          onChange={(e)=>{
             props.handleChanging({...props,value:e.target.value})
          }}
          variant="outlined"
        >
          {props.options.map((o)=>{
             return <MenuItem value={o.value}>{o.name}</MenuItem>
           })}
        </Select>
      </FormControl>
    </div>
  );
}
