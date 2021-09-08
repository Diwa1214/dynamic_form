import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import BasicTextFields from '../Controller/Fields/TextField'
import Form from '../Controller/Forms'
import { Details } from '../data/FeesDetailsData'
import { StudentForms } from './CreateForms/studentForm'

function StudentForm() {
  const [studentForm,setStudentForm]  = React.useState([])
  const [courseValue, setCourseValue]=React.useState(0)
  const [defaultValue,setDefaultValue] = React.useState({})
  const histroy = useHistory()
  const location = useLocation()
  const uri = location.pathname.split("/")[1]
 
  useEffect(()=>{
    setStudentForm(StudentForms)
    if(uri =="edit"){
        setDefaultValue(JSON.parse(localStorage.getItem("value"))) 
    }
  },[uri])
   
  const handleSubmit = (value)=>{
      localStorage.setItem("value",JSON.stringify(value))
      histroy.push("/SuccessSubmit")
  }
console.log("value",defaultValue.course);

    return (
        <div>
          {uri =="edit" ? <>
           <Form textField={studentForm} handleSubmit = {handleSubmit} data = {(value)=>{
               if(value.props =="course"){
                     return setCourseValue(value.value)
               }
            }} defaultValues = {defaultValue}/>
             {Details.map((item)=>{
                if(item.value == courseValue || defaultValue.course){
                     return item.details.map((val)=>{
                          return (
                              <BasicTextFields label = {val.label}  value={val.value}  readOnly ={true}/>
                          )
                     }) 
                }
           })}
           
         </>:
           
           
           <>
            <Form textField={studentForm} handleSubmit = {handleSubmit} data = {(value)=>{
               if(value.props =="course"){
                     return setCourseValue(value.value)
               }
            }} defaultValues = {defaultValue}/>
           {Details.map((item)=>{
                if(item.value == courseValue){
                     return item.details.map((val)=>{
                          return (
                              <BasicTextFields label = {val.label}  value={val.value}  readOnly ={true}/>
                          )
                     }) 
                }
           })}
           
           
           </>}
 
 

        </div>
    )
}

export default StudentForm
