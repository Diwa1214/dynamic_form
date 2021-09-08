import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

function SuccessSubmit() {
  const histroy  = useHistory()
  const [data,setData] =React.useState({})  
  useEffect(()=>{
     setData(JSON.parse(localStorage.getItem("value")))
  })

    return (
        <div >
            <Button onClick={()=>{
                       histroy.push("/edit")
            }} style={{width:"30%",height:200,border:"1.6px solid red",margin:100,marginLeft:100}}>
               <div style={{display:"flex",flexDirection:"column"}}>
               <h5>Name:{data.name}</h5>
                <h5>Email:{data.email}</h5>
                <h5>Clg:{data.clgName}</h5>
               </div>
            </Button >
        </div>
    )
}

export default SuccessSubmit
