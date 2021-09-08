import { Button } from '@material-ui/core'
import React, { useEffect, useReducer } from 'react'
import SimpleSelect from '../Fields/SelectField'
import BasicTextFields from '../Fields/TextField'

function Form(props) {

 const reducer = (state,action)=>{
      switch(action.type){
         case "SET_INITAL":
             return{
                 ...state,
                 initialValues:action.payload
             }
         case "SET_TEXTFIELD":
             return {
                 ...state,
                 textField:action.payload
             }

         case "HANDLE_CHANGE":
              return {
                  ...state,
                  textField:[
                    ...state.textField.slice(0,action.payload.index),
                      {
                          ...state.textField[action.payload.index],
                          value:action.payload.value,
                          error:false
                      },
                       ...state.textField.slice(action.payload.index +1),
                  ]
              }
              case "DEFAULT_VALUES":
                if (Object.keys(action.payload || {}).length == 0) {
                  action.payload = state.initialValues;
                }
          
                return {
                  ...state,
                  textField: state.textField.map((input) => {
                    // console.log("frewe",action.payload)
          
                    input.value = action.payload[input.props] || "";
                    return input;
                  }),
                  defaultValue: action.payload,
                };
            case "HANDLE_ERROR":
                return {
                    ...state,
                    textField:action.payload
                }

         default :
         return state
      }
 }



  const initialState = {textField:[],defaultValue:{},initialValues:{}}
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state.textField,"text");

  useEffect(()=>{
     if(props.textField && props.textField.length > 0){
         let initalValues = {}
        props.textField.map((text)=>{
            if(text.type =="text"){
               text.value = ""
            }
            if(text.type == "select"){
              text.value = ""
            }
            initalValues[text.props]=text.value
        })
        // console.log("inital values",initalValues);
        dispatch({
            type:"SET_TEXTFIELD",
            payload:props.textField
        })
        dispatch({
            type:"SET_INITAL",
            payload:initalValues
        })
        dispatch({
            type:"DEFAULT_VALUES",
            payload:props.defaultValues || {}
        })

     }
  },[props.textField,props.defaultValues])

  const handleChange = (payload)=>{
      props.data(payload)
      dispatch({
          type:"HANDLE_CHANGE",
          payload:payload
      })
  }

  const onClick = () => {
    let text = state.textField;
    let cloneText = text;
    let checkText = true;
    text.map((t, i) => {
    	if (t.required) {
    		if (!t.check(t.value)) {
    			checkText= false
                if(checkText == false){
                    (cloneText = [
    					...cloneText.slice(0, i),
    					{
    						...t,
    						...cloneText[i],
    						error: true
    					},
    					...cloneText.slice(i + 1)
    				])
                }
    		}
    	}
    })
    if (!checkText) {
      //Error dispatch
      dispatch({
        type: "HANDLE_ERROR",
        payload: cloneText,
      });
    }

    let result = {};
    state.textField.map((t) => {
      return (result = { ...result, [t.props]: t.value });
    });
    //console.log("re",result);
    props.handleSubmit(result);
  };

 const renderInput = (text,index)=>{
      switch (text.type){
          case "text":
              return (
                 <BasicTextFields key={index} {...text} handleChanging= {handleChange} index={index}/>
              )
          case "select":
              return (
                  <SimpleSelect   key={index} {...text} handleChanging= {handleChange} index={index} />
              )
      }
 }

  
    return (
        <React.Fragment>
           {state.textField.map((text,i)=>{
               return renderInput(text,i)
           })}
           <Button onClick ={onClick} style={{marginLeft:"70%"}}>
               Submit
           </Button>
 
        </React.Fragment>
    )
}

export default Form
