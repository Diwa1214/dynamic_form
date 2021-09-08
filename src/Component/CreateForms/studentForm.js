export const StudentForms = [
    {
        props:"email",
        type:"text",
        required:true,
        check:(val)=>{
           return  val.length > 0 && "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
        },
        value:"",
        label:"email",
        width:"48%",
        error:false,
        errorText:"Please enter the valid email"
        
    },
    {
        props:"email",
        type:"password",
        required:true,
        check:(val)=>{
           return  val.length > 7
        },
        value:"",
        label:"Password",
        width:"48%",
        error:false,
        errorText:"Please enter the atleast 7 character"
        
    },
    {
        props:"name",
        type:"text",
        required:true,
        check:(val)=>{
           return  val.length > 0
        },
        value:"",
        label:"Name",
        width:"48%",
        error:false,
        errorText:"Please fill the field"
    },
    {
        props:"address",
        type:"text",
        required:true,
        check:(val)=>{
           return  val.length > 0
        },
        value:"",
        label:"Address",
        error:false,
        errorText:"Please fill the field"
    },
    {
        props:"Age",
        type:"select",
        value:"",
        label:"Age",
        options:[
            {
              value:1,
              name:"Above 18"
            },

    ]
    },
    {
        props:"10th",
        type:"text",
        value:"",
        label:"10th",
    },
    {
        props:"12th",
        type:"text",
        value:"",
        label:"12th",
    },
    {
        props:"clgName",
        type:"text",
        required:true,
        check:(val)=>{
           return  val.length > 0
        },
        value:"",
        label:"College Name",
        error:false,
        errorText:"Please fill the field"
    },

    {
        props:"course",
        type:"select",
        required:true,
        check:(val)=>{
           return  val.length > 0
        },
        value:"",
        label:"Course",
        options:[
            {
              value:1,
              name:"B.E"
            },
            {
                value:2,
                name:"B.Tech"
            }
    ],
        error:false,
        errorText:"Please fill the field"
    },
  
    {
        props:"Passed_Out",
        type:"select",
        value:"",
        label:"passes_out",
        options:[
            {
              value:1,
              name:"2020"
            },
            {
                value:2,
                name:"2022"
            }
    ],
    },

]