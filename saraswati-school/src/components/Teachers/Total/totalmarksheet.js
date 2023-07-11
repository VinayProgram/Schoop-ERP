import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { useSelector } from 'react-redux';
const TotalMarksheet = () => {
      const [student,setStudent]=useState(["0","2"])
  
  
    let checklogin =sessionStorage.getItem('lock');
    if(checklogin===null){
      window.location.href='/TeacherLogin'
    }
    const batch=useSelector((data)=>data.data)

    const details=async()=>{
        console.log(batch)
        var data=await fetch('http://localhost:4500/basic/Marksheet',{method:'POST',
        headers:{'Content-Type':'application/json','SVML':checklogin},
        body:JSON.stringify({batch})})
        let d=await data.json()
        setStudent(d)
        console.log(d)

        }

    useEffect(()=>{
        details()
    },[batch])


    return (
    <div style={{display:'inline-flex',flexWrap:'wrap'}}>
        <Sidebar/>
        <div>
        <div>
        <center>
        <table className="table my-4" style={{width:'60rem',marginLeft:'5rem'}}>
  <thead>
    <tr>
      <th scope="col">StudentId</th>
      <th scope="col">Dated</th>
      <th scope="col"> semester</th>
      <th scope="col">SubjectName</th>
      <th scope="col">Marks</th>

    </tr>
  </thead>
  <tbody>
         {student.map((info)=>{
          return(
            <tr>
                <th scope="row">{info.StudentId}</th>
                            <td>{info.Dated}</td>
                <td>{info.semester}</td>
                <td>{info.SubjectName}</td>
                <td>{info.Marks}</td>
                </tr>
          )
         })}
          </tbody>
        </table>
        </center>
    </div>
        </div>
    </div>
  )
}

export default TotalMarksheet
