import React, { useState  as UseState} from 'react'
import Application from './Application'
const ApplicationState = (props) => {

  const [information,Setinformation]=UseState(['no data'])
  const [Feesinf,SetFeesinf]=UseState(['data'])
  
    const sales=async(name,Contact,email,context)=>{
    var data=await fetch('http://localhost:4500/sales/sales',{method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({name,Contact,email,context})})
    return await data
    }

    const Feesstructure=async(studentbatch,id)=>{
      var data=await fetch('http://localhost:4500/students/fees',{method:'POST',
      headers:{'Content-Type':'application/json','STML':id},
      body:JSON.stringify({studentbatch,id})})
      let d=await data.json()
      SetFeesinf(d)
      return d
      }

      const loginfeed=async(studentbatch,id,password)=>{
      var data=await fetch('http://localhost:4500/students/login',{method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({studentbatch,id,password})})
      let d=await data.text()
      return d
      }

      const studentprofile=async(studentbatch,id)=>{
        console.log(studentbatch,id)
        var data=await fetch('http://localhost:4500/students/profile',{method:'POST',
        headers:{'Content-Type':'application/json','STML':id},
        body:JSON.stringify({studentbatch,id})})
        let d=await data.json()
        Setinformation(d)
        return d
        }
        const Marksheetdata=async(studentbatch,id)=>{
          console.log(studentbatch,id)
          var data=await fetch('http://localhost:4500/students/marksheet',{method:'POST',
          headers:{'Content-Type':'application/json','STML':id},
          body:JSON.stringify({studentbatch,id})})
          let d=await data.json()
          console.log(d)
          Setinformation(d)
          return d
          }

          const ShowAttendance=async(studentbatch,id)=>{
            console.log(studentbatch,id)
            var data=await fetch('http://localhost:4500/students/attendace',{method:'POST',
            headers:{'Content-Type':'application/json','STML':id},
            body:JSON.stringify({studentbatch,id})})
            let d=await data.json()
            console.log(d)
            Setinformation(d)
            return d
            }
            
            const Notices=async(studentbatch,id)=>{
              console.log(studentbatch,id)
              var data=await fetch(' http://localhost:4500/students/notices',{method:'POST',
              headers:{'Content-Type':'application/json','STML':id},
              body:JSON.stringify({studentbatch,id})})
              let d=await data.json()
              console.log(d)
              Setinformation(d)
              return d
              }
           
    return (
    <Application.Provider value={{sales,loginfeed,studentprofile,information,Feesstructure,Feesinf,Marksheetdata,ShowAttendance,Notices}}>
        {props.children}
    </Application.Provider>
  )
}

export default ApplicationState
