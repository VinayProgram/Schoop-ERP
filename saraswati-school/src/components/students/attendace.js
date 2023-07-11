import React, { useEffect as UseEffect} from 'react'
import { useContext as Usecontext} from "react";
import actions from '../../Context/Application'

const Attendance = () => {
    const data=Usecontext(actions)
    const {ShowAttendance,information}=data
    let checklogin =localStorage.getItem("damlasadsakmsoa");
    let a=sessionStorage.getItem('batch')
    if(checklogin===null||checklogin==="Error"){
      window.location.href='/login'
    }

    const loaddata=async()=>{
        await ShowAttendance(a,checklogin)
        console.log(information)
      }
  
      UseEffect(()=>{
        loaddata()
      },[])

    return (
    <div>
        <center>
        <table className="table my-4" style={{width:'40rem',}}>
  <thead>
    <tr>
      <th scope="col">StudentId</th>
      <th scope="col"> AttendanceDate</th>
      <th scope="col">Present</th>
    </tr>
  </thead>
  <tbody>
        {information.map((data)=>{
            return(
                <>
                <tr>
                <th scope="row">{data.StudentId}</th>
                    <td>{data.AttendanceDate}</td>
                <td>{data.present}</td>
                </tr>
                </>
            )
        })}
        </tbody>
        </table>
        </center>
    </div>
  )
}

export default Attendance
