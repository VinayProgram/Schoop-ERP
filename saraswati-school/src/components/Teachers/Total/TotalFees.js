import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { useSelector } from 'react-redux';
const TotalFees = () => {
      const [student,setStudent]=useState(["0","2"])
  
  
    let checklogin =sessionStorage.getItem('lock');
    if(checklogin===null){
      window.location.href='/TeacherLogin'
    }
    const batch=useSelector((data)=>data.data)

    const details=async()=>{
        console.log(batch)
        var data=await fetch('http://localhost:4500/basic/Fees',{method:'POST',
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
      <th scope="col"> Totalfees</th>
      <th scope="col">PaidTodate</th>
      <th scope="col danger">Remaining</th>
    </tr>
  </thead>
  <tbody>
         {student.map((info)=>{
          return(
            <tr>
                <th scope="row">{info.StudentId}</th>
                            <td>{info.Totalfees}</td>
                <td>{info.PaidTodate}</td>
                <td style={{color:'Red',fontWeight:'bold'}}>{info.Remaining}</td>
                
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

export default TotalFees
