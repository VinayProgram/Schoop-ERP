import React, { useState  as UseState} from 'react'
import Sidebar from '../Sidebar'
import { useSelector as UseSelector} from 'react-redux';
const ManageAttendance = () => {
    let checklogin =sessionStorage.getItem('lock');
    if(checklogin===null){
      window.location.href='/TeacherLogin'
    }
    const batch=UseSelector((data)=>data.data)
    const [info,setinfo]=UseState([])
    const [date,setDate]=UseState("No date")
  
    const shownotice=async()=>{
        let dateset=document.getElementById('datesetting').value
        setDate(dateset)
        console.log(dateset)
        let type='ShowNotice'
        var data=await fetch('http://localhost:4500/basic/AttendanceStudents',{method:'POST',
        headers:{'Content-Type':'application/json','SVML':checklogin},
        body:JSON.stringify({type,batch})})
        let d=await data.json()
        setinfo(d)
       console.log(d)
    }

    const clearnotice=async(id,givendate,present)=>{
       let type='insert'
      var data=await fetch('http://localhost:4500/admin/manageattendance',{method:'POST',
      headers:{'Content-Type':'application/json','SVML':checklogin},
       body:JSON.stringify({type,batch,id,givendate,present})})
      let d=await data.text()
      alert(d)
  }



  return (
    <div style={{display:'inline-flex'}}>
      <Sidebar/>
      <div style={{width:'25rem',border: '1px solid #ccc',margin:'30px 6cm',height:'4cm' }}>
        <div style={{margin:'10px'}}>
        <h4 style={{marginLeft:'80px'}}>Personal Notice for Student of {batch} </h4>
            <input type='datetime-local' id='datesetting' style={{marginLeft:'70px', border:'2px solid #ccc',borderRadius:'5px'}}></input> 
            <input type='submit' onClick={shownotice} value="Get Students"className='btn btn-dark' style={{marginLeft:'70px', marginTop:'1px', border:'2px solid #ccc',borderRadius:'5px'}}></input>  
        </div>
        <table className="table my-4" style={{width:'30rem',marginLeft:'0rem',marginTop:'1.5cm'}}>
  <thead>
    <tr>
      <th scope="col">StudentId</th>
      <th scope="col">Name</th>
      <th scope="col">Attendace Date</th>
      <th scope="col">Present</th>
      <th scope="col">absent</th>
    </tr>
  </thead>
  <tbody>
  {info.map((info)=>{
          return(
            <tr>
                <th scope="row">{info.Studentid}</th>
                <td id='message'>{info.FullName}</td>
                <td id='date'>{date}</td>
                
                <td><button className='btn btn-success' onClick={()=>{clearnotice(info.Studentid,date,"Present")}}>Present</button></td> 

                <td><button className='btn btn-danger' onClick={()=>{clearnotice(info.Studentid,date,"Abbsent")}}>Absent</button></td> 
                </tr>
          )
         })}
  </tbody>
  </table>
      </div>
        </div>
  )
}

export default ManageAttendance
