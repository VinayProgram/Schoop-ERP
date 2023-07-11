import React, { useEffect as UseEffect } from 'react'
import { useContext as Usecontext} from "react";
import actions from '../../Context/Application'

const student = () => {
    const data=Usecontext(actions)
    const {studentprofile,information}=data
    let checklogin =localStorage.getItem("damlasadsakmsoa");
    let a=sessionStorage.getItem('batch')
    if(checklogin===null){
        alert('please login')
        window.location.href='/login'
    }
    const loaddata=async()=>{
      await studentprofile(a,checklogin)
    }

    UseEffect(()=>{
      loaddata()
    },[])

    const display=(studentsinf)=>{
      return(
        <center>
        <div
      className="card card-body dark"
      style={{ width: "20rem", margin: "1cm 12.5cm" , backgroundColor:'skyblue',borderRadius:'1cm'}}
     >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" style={{color:'blue',fontWeight:'bold'}}>
          Student Id<h5 style={{color:'black'}}>{studentsinf.Studentid}</h5>
          </label>
           </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" style={{color:'blue',fontWeight:'bold'}}>
          Full Name
          </label>
          <input
            type="text"
            className="form-control"
            value={studentsinf.FullName}
            required
            style={{paddingLeft:'1.5cm'}}
          />
           </div>

           <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" style={{color:'blue',fontWeight:'bold'}}>
          Passcode
          </label>
          <input
            type="text"
            className="form-control"
            value={studentsinf.password}
            style={{paddingLeft:'2.6cm'}}
            required
          />
           </div>
           <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label" style={{color:'blue',fontWeight:'bold'}}>
          Address
          </label>
          <input
            type="text"
            className="form-control"
            value={studentsinf.Address}
            required
            style={{paddingLeft:'center'}}
          />
           </div>
        
    </div>

        </center>
      )
    }

    return (
    <div>
      {information.map((data)=>{
          return display(data)
      })}
    </div>
  )
}

export default student
